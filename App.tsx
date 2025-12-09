import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import OlfactoryPyramid from './components/OlfactoryPyramid';
import ScentFamilies from './components/ScentFamilies';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-baura-light font-sans text-baura-dark selection:bg-baura-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <OlfactoryPyramid />
        <ScentFamilies />
        <Features />
      </main>
      <Contact />
    </div>
  );
};

export default App;