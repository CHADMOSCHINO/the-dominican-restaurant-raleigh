import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  // Using picsum seeds that return distinct food/restaurant vibes
  const images = [
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPco2uXzhBRsV-vLPxUiAqerTCPaN3U5GbykS4a=s1360-w1360-h1020-rw",
      fallbackSrc: "https://picsum.photos/seed/dominican_table/800/800",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwvxyl9QCnyybi1vOMepqoodXMaKv9X9tjpJ-j5jEiE30drGckpr9YPJ6lhUZ3mJxenroLcIwqrrJjVPKcmpW3IclSLHQ54-i2EHA2G5vzSYWvxaHoplmv-NwdDxz9k0Ap89ltl=s1360-w1360-h1020-rw",
      fallbackSrc: "https://picsum.photos/seed/mofongo_plate/800/800",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwHelU4am64l458U6Lnktfh-AAAJ5qipspchEgNx6vN-v7EvvcJTq_L07fpBA4LyC-dADQlqWah8ns_LUa2gdlI3dRiq86Wgkp8MHSjU8aFiq39dXvBxVlvbg6kuGQqirM0H6iWhW1KXnic=s1360-w1360-h1020-rw",
      fallbackSrc: "https://picsum.photos/seed/restaurant_vibes/800/400",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMKaYKc8tRKJX0J_qg-GY7F4Cqv7ijYd8NxFK61=s1360-w1360-h1020-rw",
      fallbackSrc: "https://picsum.photos/seed/tostones_fry/800/800",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMnkwyoFJNJcQVUFqYoyih9u9p7CYVRTfwuMKXq=s1360-w1360-h1020-rw",
      fallbackSrc: "https://picsum.photos/seed/chef_cooking/800/800",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-dark text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">{t('gallery.tagline')}</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold">{t('gallery.title')}</h3>
           </div>
           <a href="#" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 md:mt-0">
             <Instagram size={20} />
             {t('gallery.instagram')}
           </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt="Gallery" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                onError={(e) => {
                  // If the host blocks hotlinking for some visitors, don't leave a blank tile.
                  const el = e.currentTarget;
                  if (el.src !== img.fallbackSrc) {
                    el.src = img.fallbackSrc;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold tracking-wide">{t('gallery.caption')}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-gray-400">
             <Instagram size={20} />
             {t('gallery.follow')}
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;