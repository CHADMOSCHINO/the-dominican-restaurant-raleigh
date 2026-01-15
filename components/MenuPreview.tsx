import React, { useState } from 'react';
import { MENU_DATA, BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Calendar, Coffee, Beer, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Category = 'specials' | 'mofongo' | 'street' | 'breakfast' | 'drinks';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('specials');
  const [promoImageOk, setPromoImageOk] = useState(true);
  const { t } = useLanguage();

  // Place the provided image at: public/Dominican_Restaurant_1_.png
  const promoImageSrc = '/Dominican_Restaurant_1_.png';

  const categories = [
    { id: 'specials', label: t('menu.cat.specials'), icon: Calendar },
    { id: 'mofongo', label: t('menu.cat.mofongo'), icon: Utensils },
    { id: 'street', label: t('menu.cat.street'), icon: Star },
    { id: 'breakfast', label: t('menu.cat.breakfast'), icon: Coffee },
    { id: 'drinks', label: t('menu.cat.drinks'), icon: Beer },
  ];

  return (
    <section id="menu" className="py-24 bg-white relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-sm">{t('menu.tagline')}</span>
          <h2 className="font-serif text-5xl font-bold text-brand-dark mt-3 mb-6">{t('menu.title')}</h2>
          <p className="text-gray-500 text-lg">
            {t('menu.description')} <br />
            {t('menu.description2')}
          </p>
          <a 
            href={BUSINESS_INFO.onlineOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-brand-red font-bold hover:underline"
          >
            {t('menu.orderLink')} <ShoppingBag size={18}/>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-brand-red text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <cat.icon size={18} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* Weekly Specials Layout */}
            {activeCategory === 'specials' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.daily.map((dayItem, idx) => (
                  <div key={idx} className="bg-brand-cream/50 rounded-xl p-6 border border-brand-cream hover:border-brand-red/20 transition-colors">
                    <h3 className="font-serif text-2xl font-bold text-brand-red mb-4 border-b border-gray-200 pb-2">
                      {dayItem.day}
                    </h3>
                    <ul className="space-y-3">
                      {dayItem.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-start text-sm md:text-base">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="font-bold text-brand-dark ml-2 whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-dashed border-gray-300">
                      <p className="text-xs text-gray-500 italic">{t('menu.servedWith')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mofongo & Mains Layout */}
            {activeCategory === 'mofongo' && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                    {t('menu.sub.mofongos')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {MENU_DATA.mofongo.map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-2">
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <span className="font-bold text-brand-red text-lg ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-brand-blue rounded-full"></span>
                    {t('menu.sub.seafood')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {MENU_DATA.mains.map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-2">
                         <div>
                          <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <span className="font-bold text-brand-red text-lg ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Street Food Layout */}
            {activeCategory === 'street' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {MENU_DATA.street.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                      <div>
                        <h4 className="font-bold text-xl text-brand-dark group-hover:text-brand-red transition-colors">{item.name}</h4>
                        <p className="text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <span className="bg-gray-100 text-brand-dark font-bold px-4 py-2 rounded-lg ml-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        {item.price}
                      </span>
                    </div>
                  ))}
              </div>
            )}

             {/* Breakfast Layout */}
             {activeCategory === 'breakfast' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {MENU_DATA.breakfast.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                      <div>
                        <h4 className="font-bold text-xl text-brand-dark group-hover:text-brand-red transition-colors">{item.name}</h4>
                        <p className="text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <span className="bg-gray-100 text-brand-dark font-bold px-4 py-2 rounded-lg ml-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        {item.price}
                      </span>
                    </div>
                  ))}
                  
                  {/* Kids Menu Box */}
                  <div className="bg-brand-cream p-6 rounded-xl border-2 border-dashed border-brand-red/20 md:col-span-2 mt-4">
                    <h4 className="font-bold text-xl text-brand-red mb-4 text-center">{t('menu.sub.kids')}</h4>
                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                      <span className="bg-white px-3 py-1 rounded shadow-sm">Chicken Fingers w/ Fries: $10.00</span>
                      <span className="bg-white px-3 py-1 rounded shadow-sm">Mini Chimi Burger: $8.00</span>
                      <span className="bg-white px-3 py-1 rounded shadow-sm">Tostones Salami y Queso: $8.00</span>
                    </div>
                  </div>
              </div>
            )}

             {/* Drinks Layout */}
             {activeCategory === 'drinks' && (
              <div className="max-w-3xl mx-auto">
                {/* Beer Special Photo Banner (provided asset) */}
                {promoImageOk ? (
                  <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-gray-100 bg-white">
                    <img
                      src={promoImageSrc}
                      alt="Beer bucket special promo"
                      className="w-full h-[220px] md:h-[300px] object-cover"
                      loading="lazy"
                      onError={() => setPromoImageOk(false)}
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl text-center mb-10 relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-serif text-3xl font-bold mb-2">{t('menu.beerSpecial')}</h3>
                      <p className="text-5xl font-black text-yellow-400 drop-shadow-md mb-2">6 for $25.00</p>
                      <p className="text-blue-100 font-medium tracking-widest">{t('menu.beerDays')}</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs opacity-80">
                        <span className="border border-white/30 px-2 py-1 rounded">Corona</span>
                        <span className="border border-white/30 px-2 py-1 rounded">Heineken</span>
                        <span className="border border-white/30 px-2 py-1 rounded">Presidente</span>
                        <span className="border border-white/30 px-2 py-1 rounded">Modelo</span>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                  </div>
                )}

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MENU_DATA.drinks.map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <span className="font-bold text-brand-dark">{item.price}</span>
                      </div>
                    ))}
                 </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
            <a 
            href={BUSINESS_INFO.onlineOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 transition-colors"
            >
            <ShoppingBag size={20} />
            {t('menu.placeOrder')}
            </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;