import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import OlfactoryPyramid from './components/OlfactoryPyramid';
import ScentFamilies from './components/ScentFamilies';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

const HomePage: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
