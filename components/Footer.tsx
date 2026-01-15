import React from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [logoSrc, setLogoSrc] = React.useState(BUSINESS_INFO.logo);
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
          <p className="text-sm text-gray-500 max-w-xs">Authentic Caribbean Flavors in Raleigh. Experience the taste of the Dominican Republic.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
           {NAV_LINKS.map((link) => {
             const isExternal = link.href.startsWith('http');
             return (
              <a 
                key={link.name}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-brand-red transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
             )
           })}
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;