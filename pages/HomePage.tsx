import React from 'react';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import Gallery from '../components/Gallery';
import InfoSection from '../components/InfoSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <MenuPreview />
      <Gallery />
      <InfoSection />
    </main>
  );
};

export default HomePage;

