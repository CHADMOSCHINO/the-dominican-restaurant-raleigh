import React from 'react';
import MenuPreview from '../components/MenuPreview';

const MenuPage: React.FC = () => {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark mb-4">
          Menu
        </h1>
        <p className="text-gray-500 text-lg">
          Browse weekly specials, mofongo, street food, breakfast, and drinks.
        </p>
      </div>
      <MenuPreview />
    </main>
  );
};

export default MenuPage;

