import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const [logoSrc, setLogoSrc] = React.useState(BUSINESS_INFO.logo);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.menu'), href: '/menu' },
    { name: t('nav.order'), href: BUSINESS_INFO.onlineOrderLink },
    { name: t('nav.gallery'), href: '/gallery' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img 
            src={logoSrc} 
            alt={BUSINESS_INFO.name} 
            className="h-16 md:h-20 w-auto object-contain mb-3"
            onError={() => setLogoSrc('/logo.svg')}
          />
          <p className="text-sm text-gray-500 max-w-xs">{t('footer.tagline')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
           {navLinks.map((link) => {
             const isExternal = link.href.startsWith('http');
             if (isExternal) {
               return (
                 <a
                   key={link.name}
                   href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-brand-red transition-colors font-medium text-sm"
                 >
                   {link.name}
                 </a>
               );
             }

             return (
               <Link
                 key={link.name}
                 to={link.href}
                 className="text-gray-500 hover:text-brand-red transition-colors font-medium text-sm"
               >
                 {link.name}
               </Link>
             );
           })}
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;