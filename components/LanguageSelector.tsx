import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

interface LanguageSelectorProps {
  variant?: 'light' | 'dark';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'light' }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const textColor = variant === 'dark' ? 'text-white/70 hover:text-white' : 'text-baura-dark/70 hover:text-baura-dark';
  const bgColor = variant === 'dark' ? 'bg-white/10' : 'bg-white';
  const borderColor = variant === 'dark' ? 'border-white/20' : 'border-baura-dark/10';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300 ${textColor}`}
        aria-label="Seleccionar idioma"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute right-0 top-full mt-2 ${bgColor} rounded-xl shadow-lg border ${borderColor} overflow-hidden z-50 min-w-[140px]`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                lang.code === i18n.language
                  ? 'bg-baura-gold/10 text-baura-gold'
                  : variant === 'dark'
                    ? 'text-white/80 hover:bg-white/10'
                    : 'text-baura-dark/80 hover:bg-baura-sand/50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
