import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from './constants';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-red selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <MenuPreview />
        <Gallery />
        <InfoSection />
      </main>

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
  );
}

export default App;