import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from './constants';
import { motion } from 'framer-motion';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-cream">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-brand-dark font-medium">Loading...</p>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
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

        {/* Mobile Floating CTA - Shows only on small screens when scrolled */}
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-sm shadow-2xl"
        >
          <a 
            href={BUSINESS_INFO.onlineOrderLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-dark text-white py-4 rounded-full font-bold text-lg border border-white/10"
          >
            <ShoppingBag className="text-brand-red" size={22} />
            Order Online Now
          </a>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;