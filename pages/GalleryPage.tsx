import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark mb-4">
          Gallery
        </h1>
        <p className="text-gray-500 text-lg">
          A look at the food, the vibe, and the experience.
        </p>
      </div>
      <Gallery />
    </main>
  );
};

export default GalleryPage;

