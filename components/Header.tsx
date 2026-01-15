import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(BUSINESS_INFO.logo);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.order'), href: BUSINESS_INFO.onlineOrderLink },
    { name: t('nav.gallery'), href: '/gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/90 backdrop-blur-xl shadow-md py-2 border-b border-white/20' 
      : 'bg-transparent py-4 md:py-6'
  }`;

  const linkClass = `text-sm font-bold tracking-wide hover:text-brand-red transition-colors duration-200 ${
    isScrolled ? 'text-gray-800' : 'text-white shadow-black/20 text-shadow-sm'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 z-50 relative">
          <Link to="/" className="flex flex-col group" aria-label="Go to homepage">
            <img 
              src={logoSrc} 
              alt={BUSINESS_INFO.name} 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-24'
              }`}
              onError={() => setLogoSrc('/logo.svg')}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            if (isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link key={link.name} to={link.href} className={linkClass}>
                {link.name}
              </Link>
            );
          })}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors duration-200 ${
              isScrolled ? 'text-gray-800 hover:text-brand-red' : 'text-white hover:text-yellow-400'
            }`}
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            <Globe size={16} />
            <span>{t('lang.switch')}</span>
          </button>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={BUSINESS_INFO.onlineOrderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-red text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>{t('nav.orderOnline')}</span>
          </motion.a>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3 z-50">
           <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isScrolled ? 'bg-gray-100 text-brand-dark' : 'bg-white/20 text-white backdrop-blur-sm'}`}
          >
            <Phone size={18} />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-6 md:hidden"
          >
             {/* Logo in Mobile Menu */}
            <div className="mb-6">
               <img 
                src={logoSrc} 
                alt={BUSINESS_INFO.name} 
                className="h-24 w-auto object-contain"
                onError={() => setLogoSrc('/logo.svg')}
              />
            </div>

            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-serif font-bold text-gray-900 hover:text-brand-red transition-colors text-center px-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-serif font-bold text-gray-900 hover:text-brand-red transition-colors text-center px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Language Toggle in Mobile Menu */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-lg font-bold text-brand-blue hover:text-brand-red transition-colors"
            >
              <Globe size={20} />
              <span>{t('lang.switch')}</span>
            </button>
            
            <div className="h-px w-20 bg-gray-200 my-2" />
            
            <a 
              href={BUSINESS_INFO.onlineOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl flex items-center gap-3"
            >
              <ShoppingBag size={24} />
              {t('nav.orderOnline')}
            </a>
             <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-gray-500 font-medium flex items-center gap-2"
            >
              <Phone size={18} />
              {t('nav.callToOrder')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;