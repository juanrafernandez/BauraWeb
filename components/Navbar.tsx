import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Filosofía', href: '#pyramid' },
    { name: 'Familias', href: '#families' },
    { name: 'App', href: '#features' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Large and prominent */}
          <div
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group"
          >
            <Logo size={56} className="group-hover:scale-105 transition-transform duration-300" />
            <span className={`font-serif text-3xl tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-baura-dark' : 'text-baura-dark'}`}>
              BAURA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`font-sans text-[13px] tracking-wide transition-colors duration-300 hover:text-baura-gold cursor-pointer ${scrolled ? 'text-baura-text-secondary' : 'text-baura-dark/70'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="ml-4 px-5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 bg-baura-gold text-white hover:bg-baura-gold-dark"
            >
              Descargar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${scrolled ? 'text-baura-dark' : 'text-baura-dark'}`}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-baura-dark/5' : 'max-h-0'}`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block text-baura-dark text-lg font-serif py-2 hover:text-baura-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="block w-full text-center bg-baura-gold text-white py-3 rounded-xl font-medium mt-4"
          >
            Descargar App
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
