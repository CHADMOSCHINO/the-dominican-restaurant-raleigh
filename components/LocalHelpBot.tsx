import React from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

type BotAction =
  | { label: string; href: string }
  | { label: string; to: string };

type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  text: string;
  actions?: BotAction[];
};

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeText(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // strip accents
}

function includesAny(haystack: string, needles: string[]): boolean {
  return needles.some((n) => haystack.includes(n));
}

function buildResponse(
  userText: string,
  language: 'en' | 'es',
  t: (key: string) => string
): { text: string; actions?: BotAction[] } {
  const q = normalizeText(userText);

  const isGreeting = includesAny(q, [
    'hi',
    'hello',
    'hey',
    'hola',
    'buenas',
    'buenos',
    'saludos',
  ]);
  const isOrder = includesAny(q, [
    'order',
    'delivery',
    'pickup',
    'pick up',
    'online',
    'clover',
    'orden',
    'ordenar',
    'entrega',
    'recogida',
    'recoger',
    'domicilio',
  ]);
  const isMenu = includesAny(q, ['menu', 'menú', 'mofongo', 'mangu', 'mangú', 'food', 'comida']);
  const isLocation = includesAny(q, [
    'where',
    'address',
    'location',
    'directions',
    'map',
    'ubicacion',
    'ubicacion',
    'direccion',
    'direcciones',
    'mapa',
    'donde',
    'dónde',
  ]);
  const isHours = includesAny(q, [
    'hours',
    'open',
    'close',
    'closing',
    'opening',
    'time',
    'horas',
    'horario',
    'abren',
    'cierran',
    'abierto',
    'cerrar',
  ]);
  const isCall = includesAny(q, [
    'call',
    'phone',
    'number',
    'contact',
    'telefono',
    'tel',
    'llamar',
    'contacto',
    'numero',
    'número',
  ]);
  const isLanguageHelp = includesAny(q, [
    'spanish',
    'espanol',
    'español',
    'english',
    'idioma',
    'language',
    'translate',
    'traducir',
  ]);
  const isGallery = includesAny(q, ['gallery', 'photos', 'pictures', 'galeria', 'galería', 'fotos', 'imagenes', 'imágenes']);
  const isHowToUse = includesAny(q, [
    'how do i',
    'how to',
    'help',
    'use this site',
    'navigate',
    'como',
    'cómo',
    'ayuda',
    'usar',
    'navegar',
  ]);

  if (isGreeting || isHowToUse) {
    return {
      text:
        language === 'es'
          ? 'Puedo ayudarte a usar el sitio: ver el menú, ordenar en línea, encontrar la ubicación, ver el horario y cambiar el idioma.'
          : 'I can help you use the site: view the menu, order online, find our location, check hours, and switch language.',
      actions: [
        { label: t('nav.menu'), to: '/menu' },
        { label: t('nav.orderOnline'), href: BUSINESS_INFO.onlineOrderLink },
        { label: t('info.directions'), href: BUSINESS_INFO.mapEmbedUrl },
      ],
    };
  }

  if (isOrder) {
    return {
      text:
        language === 'es'
          ? 'Para ordenar, toca “Ordenar en Línea”. Se abrirá nuestro sistema de pedidos (Clover) para entrega o recogida.'
          : 'To order, click “Order Online”. It will open our Clover ordering page for delivery or pickup.',
      actions: [{ label: t('nav.orderOnline'), href: BUSINESS_INFO.onlineOrderLink }],
    };
  }

  if (isMenu) {
    return {
      text:
        language === 'es'
          ? 'Puedes ver el menú aquí. Usa las pestañas para Especiales, Mofongo, Comida Callejera, Desayuno y Bebidas.'
          : 'You can view the menu here. Use the tabs for Weekly Specials, Mofongo, Street Food, Breakfast, and Drinks.',
      actions: [{ label: t('nav.menu'), to: '/menu' }],
    };
  }

  if (isGallery) {
    return {
      text:
        language === 'es'
          ? 'La galería tiene fotos del ambiente y la comida.'
          : 'The gallery has photos of the vibe and food.',
      actions: [{ label: t('nav.gallery'), to: '/gallery' }],
    };
  }

  if (isLocation) {
    const addr = `${BUSINESS_INFO.address}, ${BUSINESS_INFO.cityStateZip}`;
    return {
      text:
        language === 'es'
          ? `Estamos en ${addr}. (${BUSINESS_INFO.locationNote})`
          : `We’re located at ${addr}. (${BUSINESS_INFO.locationNote})`,
      actions: [{ label: t('info.directions'), href: BUSINESS_INFO.mapEmbedUrl }],
    };
  }

  if (isHours) {
    return {
      text:
        language === 'es'
          ? `${t('info.monWed')}: 7:00 AM - 9:00 PM\n${t('info.thuSun')}: 7:00 AM - 10:00 PM`
          : `${t('info.monWed')}: 7:00 AM - 9:00 PM\n${t('info.thuSun')}: 7:00 AM - 10:00 PM`,
    };
  }

  if (isCall) {
    return {
      text:
        language === 'es'
          ? `Puedes llamarnos al ${BUSINESS_INFO.phone}.`
          : `You can call us at ${BUSINESS_INFO.phone}.`,
      actions: [{ label: BUSINESS_INFO.phone, href: `tel:${BUSINESS_INFO.phone}` }],
    };
  }

  if (isLanguageHelp) {
    return {
      text:
        language === 'es'
          ? 'Para cambiar el idioma, usa el botón del globo en la parte superior (English/Español).'
          : 'To change language, use the globe button at the top (English/Español).',
    };
  }

  // Fallback
  return {
    text:
      language === 'es'
        ? 'Puedo ayudar con: menú, ordenar en línea, ubicación, horario, llamar, y cambiar idioma. ¿Qué necesitas?'
        : 'I can help with: menu, ordering online, location, hours, calling, and language. What do you need?',
    actions: [
      { label: t('nav.menu'), to: '/menu' },
      { label: t('nav.orderOnline'), href: BUSINESS_INFO.onlineOrderLink },
      { label: t('info.directions'), href: BUSINESS_INFO.mapEmbedUrl },
    ],
  };
}

const LocalHelpBot: React.FC = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<ChatMessage[]>(() => [
    {
      id: makeId(),
      role: 'bot',
      text:
        language === 'es'
          ? 'Hola. Soy tu asistente local. Puedo ayudarte a usar el sitio.'
          : 'Hi. I’m your local assistant. I can help you use the site.',
    },
  ]);

  // Keep the welcome message language in sync when user toggles language
  React.useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;
      const first = prev[0];
      if (first.role !== 'bot') return prev;
      return [
        {
          ...first,
          text:
            language === 'es'
              ? 'Hola. Soy tu asistente local. Puedo ayudarte a usar el sitio.'
              : 'Hi. I’m your local assistant. I can help you use the site.',
        },
        ...prev.slice(1),
      ];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: makeId(), role: 'user', text: trimmed };
    const bot = buildResponse(trimmed, language, t);
    const botMsg: ChatMessage = { id: makeId(), role: 'bot', text: bot.text, actions: bot.actions };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const quickQuestions =
    language === 'es'
      ? ['¿Cómo ordeno?', '¿Dónde están?', '¿Cuál es el horario?', '¿Cómo cambio el idioma?']
      : ['How do I order?', 'Where are you located?', 'What are your hours?', 'How do I switch language?'];

  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-50">
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-brand-red text-white px-4 py-3 rounded-full font-bold shadow-xl shadow-brand-red/30 hover:bg-red-700 transition-colors"
          aria-label={t('bot.open')}
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">{t('bot.help')}</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="w-[340px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-brand-dark text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-400" />
              <div className="leading-tight">
                <div className="font-bold">{t('bot.title')}</div>
                <div className="text-xs text-white/80">{t('bot.subtitle')}</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={t('bot.close')}
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[360px] overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'bg-brand-red text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[85%] whitespace-pre-line'
                      : 'bg-white text-gray-800 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[85%] border border-gray-200 whitespace-pre-line'
                  }
                >
                  <div className="text-sm leading-relaxed">{m.text}</div>
                  {m.role === 'bot' && m.actions && m.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.actions.map((a) => {
                        if ('href' in a) {
                          return (
                            <a
                              key={`${m.id}-${a.label}`}
                              href={a.href}
                              target={a.href.startsWith('http') ? '_blank' : undefined}
                              rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-xs font-bold text-brand-red bg-white px-3 py-1.5 rounded-full border border-brand-red/20 hover:border-brand-red/60 hover:bg-brand-cream transition-colors"
                            >
                              {a.label}
                            </a>
                          );
                        }
                        return (
                          <button
                            key={`${m.id}-${a.label}`}
                            onClick={() => {
                              navigate(a.to);
                              setOpen(false);
                            }}
                            className="text-xs font-bold text-brand-red bg-white px-3 py-1.5 rounded-full border border-brand-red/20 hover:border-brand-red/60 hover:bg-brand-cream transition-colors"
                          >
                            {a.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-gray-100 bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickQuestions.map((qq) => (
                <button
                  key={qq}
                  onClick={() => send(qq)}
                  className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {qq}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('bot.placeholder')}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red/30"
              />
              <button
                type="submit"
                className="bg-brand-red text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label={t('bot.send')}
              >
                <Send size={18} />
              </button>
            </form>

            <div className="mt-2 text-[11px] text-gray-400">
              {t('bot.localNote')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalHelpBot;
