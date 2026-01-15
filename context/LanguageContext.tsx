import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.order': 'Order Delivery/Pickup',
    'nav.gallery': 'Gallery',
    'nav.orderOnline': 'Order Online',
    'nav.callToOrder': 'Call to Order',
    
    // Hero
    'hero.badge': "Raleigh's #1 Caribbean Spot",
    'hero.title1': 'Taste of the',
    'hero.title2': 'Dominican Republic',
    'hero.subtitle': 'Authentic Mofongo, Crispy Pernil, and Fresh Seafood.',
    'hero.subtitle2': 'Experience the vibrant heart of the Caribbean right here in NC.',
    'hero.orderBtn': 'Order Delivery/Pickup',
    'hero.menuBtn': 'View Menu',
    
    // Menu Section
    'menu.tagline': 'Authentic Cuisine',
    'menu.title': 'Our Menu',
    'menu.description': 'From our famous Mangu 3 Golpes to fresh Seafood Mofongos.',
    'menu.description2': 'Explore the authentic flavors of the Dominican Republic.',
    'menu.orderLink': 'Order Online for Pickup or Delivery',
    'menu.placeOrder': 'Place Order Online',
    'menu.servedWith': 'Served with Rice (White/Moro) & Salad',
    
    // Menu Categories
    'menu.cat.specials': 'Weekly Specials',
    'menu.cat.mofongo': 'Mofongo & Mains',
    'menu.cat.street': 'Street Food',
    'menu.cat.breakfast': 'Breakfast & Lite',
    'menu.cat.drinks': 'Drinks & Sides',
    
    // Menu Subcategories
    'menu.sub.mofongos': 'Signature Mofongos',
    'menu.sub.seafood': 'Seafood & Meats',
    'menu.sub.kids': 'Kids Menu & Extras',
    
    // Beer Special
    'menu.beerSpecial': 'Beer Bucket Special',
    'menu.beerDays': 'MONDAY - WEDNESDAY',
    
    // Gallery
    'gallery.tagline': 'Vibe Check',
    'gallery.title': 'Eat. Drink. Relax.',
    'gallery.instagram': '@dominicanrestaurant_nc',
    'gallery.follow': 'Follow us on Instagram',
    'gallery.caption': 'The Dominican Experience',
    
    // Info Section
    'info.title': 'Find Us',
    'info.description': 'Located on Capital Blvd, directly across from Chuck E. Cheese.',
    'info.parking': 'Ample parking available.',
    'info.address': 'Address',
    'info.directions': 'Get Directions',
    'info.hours': 'Opening Hours',
    'info.monWed': 'Mon - Wed',
    'info.thuSun': 'Thu - Sun',
    'info.contact': 'Contact',
    'info.restaurant': '(Restaurant)',
    'info.management': '(Management)',
    
    // Footer
    'footer.tagline': 'Authentic Caribbean Flavors in Raleigh. Experience the taste of the Dominican Republic.',
    'footer.rights': 'All rights reserved.',
    
    // Mobile CTA
    'cta.orderNow': 'Order Online Now',
    
    // Loading
    'loading': 'Loading...',
    
    // Language Toggle
    'lang.switch': 'Español',

    // Local Help Bot
    'bot.open': 'Open help chat',
    'bot.close': 'Close help chat',
    'bot.help': 'Help',
    'bot.title': 'Customer Help',
    'bot.subtitle': 'Fast answers, no waiting',
    'bot.placeholder': 'Ask a question…',
    'bot.send': 'Send message',
    'bot.localNote': 'This assistant runs locally (no API key).',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.order': 'Ordenar Entrega/Recogida',
    'nav.gallery': 'Galería',
    'nav.orderOnline': 'Ordenar en Línea',
    'nav.callToOrder': 'Llamar para Ordenar',
    
    // Hero
    'hero.badge': 'El #1 del Caribe en Raleigh',
    'hero.title1': 'Sabor de la',
    'hero.title2': 'República Dominicana',
    'hero.subtitle': 'Auténtico Mofongo, Pernil Crujiente y Mariscos Frescos.',
    'hero.subtitle2': 'Vive el corazón vibrante del Caribe aquí en NC.',
    'hero.orderBtn': 'Ordenar Entrega/Recogida',
    'hero.menuBtn': 'Ver Menú',
    
    // Menu Section
    'menu.tagline': 'Cocina Auténtica',
    'menu.title': 'Nuestro Menú',
    'menu.description': 'Desde nuestro famoso Mangú 3 Golpes hasta Mofongos de Mariscos.',
    'menu.description2': 'Explora los sabores auténticos de la República Dominicana.',
    'menu.orderLink': 'Ordena en Línea para Recogida o Entrega',
    'menu.placeOrder': 'Hacer Pedido en Línea',
    'menu.servedWith': 'Servido con Arroz (Blanco/Moro) y Ensalada',
    
    // Menu Categories
    'menu.cat.specials': 'Especiales de la Semana',
    'menu.cat.mofongo': 'Mofongo y Platos Fuertes',
    'menu.cat.street': 'Comida Callejera',
    'menu.cat.breakfast': 'Desayuno y Ligero',
    'menu.cat.drinks': 'Bebidas y Acompañantes',
    
    // Menu Subcategories
    'menu.sub.mofongos': 'Mofongos Especiales',
    'menu.sub.seafood': 'Mariscos y Carnes',
    'menu.sub.kids': 'Menú Infantil y Extras',
    
    // Beer Special
    'menu.beerSpecial': 'Especial de Cubeta de Cerveza',
    'menu.beerDays': 'LUNES - MIÉRCOLES',
    
    // Gallery
    'gallery.tagline': 'El Ambiente',
    'gallery.title': 'Come. Bebe. Relájate.',
    'gallery.instagram': '@dominicanrestaurant_nc',
    'gallery.follow': 'Síguenos en Instagram',
    'gallery.caption': 'La Experiencia Dominicana',
    
    // Info Section
    'info.title': 'Encuéntranos',
    'info.description': 'Ubicados en Capital Blvd, directamente frente a Chuck E. Cheese.',
    'info.parking': 'Amplio estacionamiento disponible.',
    'info.address': 'Dirección',
    'info.directions': 'Obtener Direcciones',
    'info.hours': 'Horario de Atención',
    'info.monWed': 'Lun - Mié',
    'info.thuSun': 'Jue - Dom',
    'info.contact': 'Contacto',
    'info.restaurant': '(Restaurante)',
    'info.management': '(Gerencia)',
    
    // Footer
    'footer.tagline': 'Sabores Auténticos del Caribe en Raleigh. Vive el sabor de la República Dominicana.',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Mobile CTA
    'cta.orderNow': 'Ordenar en Línea',
    
    // Loading
    'loading': 'Cargando...',
    
    // Language Toggle
    'lang.switch': 'English',

    // Local Help Bot
    'bot.open': 'Abrir chat de ayuda',
    'bot.close': 'Cerrar chat de ayuda',
    'bot.help': 'Ayuda',
    'bot.title': 'Ayuda al Cliente',
    'bot.subtitle': 'Respuestas rápidas, sin esperar',
    'bot.placeholder': 'Haz una pregunta…',
    'bot.send': 'Enviar mensaje',
    'bot.localNote': 'Este asistente funciona localmente (sin API key).',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
