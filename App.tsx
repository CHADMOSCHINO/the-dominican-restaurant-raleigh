import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from './constants';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LocalHelpBot from './components/LocalHelpBot';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

// Loading fallback component
const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-brand-dark font-medium">Loading...</p>
      </div>
    </div>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Inner app component that uses language context
const AppContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-cream selection:bg-brand-red selection:text-white">
        <Header />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>

        <Footer />

        <LocalHelpBot />

        {/* Mobile Floating CTA - Shows only on small screens */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 pointer-events-none">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="pointer-events-auto max-w-sm mx-auto"
          >
            <a 
              href={BUSINESS_INFO.onlineOrderLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-dark text-white py-4 px-6 rounded-full font-bold text-lg border border-white/10 shadow-2xl active:scale-95 transition-transform"
            >
              <ShoppingBag className="text-brand-red flex-shrink-0" size={22} />
              <span>{t('cta.orderNow')}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;