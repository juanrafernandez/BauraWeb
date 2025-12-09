import React from 'react';
import { useTranslation } from 'react-i18next';
import { Apple, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background - Champagne luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B7355] via-[#C4A962] via-40% via-[#E8DCC8] to-white"></div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 relative pt-32 pb-20 lg:pt-24 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Text Content - Dark text for better contrast */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-baura-dark/60 font-sans font-medium tracking-[0.3em] text-[11px] uppercase">
                {t('hero.welcome')}
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-baura-dark leading-[1.1] tracking-tight">
                {t('hero.title1')} <br />
                <span className="italic font-normal text-baura-gold">{t('hero.title2')}</span>
              </h1>
              <p className="text-baura-dark/70 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* App Store Buttons - Dark style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-baura-dark text-white pl-5 pr-7 py-4 rounded-2xl hover:bg-baura-dark/90 transition-all duration-300 shadow-lg"
              >
                <Apple size={28} />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-70">{t('hero.downloadOn')}</span>
                  <span className="block text-base font-medium -mt-0.5">{t('hero.appStore')}</span>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 bg-baura-dark text-white pl-5 pr-7 py-4 rounded-2xl hover:bg-baura-dark/90 transition-all duration-300 shadow-lg"
              >
                <Play size={28} />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-70">{t('hero.availableOn')}</span>
                  <span className="block text-base font-medium -mt-0.5">{t('hero.googlePlay')}</span>
                </div>
              </a>
            </div>
          </div>

          {/* App Screenshots - Direct images */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-[500px] sm:h-[580px] lg:h-[660px]">

            {/* Screenshot 1 (Left/Back) - Profile Screen */}
            <div className="absolute left-1/2 -translate-x-[68%] sm:-translate-x-[72%] lg:-translate-x-[75%] top-1/2 -translate-y-1/2 transform -rotate-6 z-10">
              <img
                src={`${import.meta.env.BASE_URL}assets/pantalla_profile.png`}
                alt="Baura App - Profile"
                className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] shadow-2xl"
              />
            </div>

            {/* Screenshot 2 (Right/Front) - Collection Screen */}
            <div className="absolute left-1/2 -translate-x-[32%] sm:-translate-x-[28%] lg:-translate-x-[25%] top-1/2 -translate-y-1/2 transform rotate-6 z-20">
              <img
                src={`${import.meta.env.BASE_URL}assets/pantalla_mi_coleccion.png`}
                alt="Baura App - Collection"
                className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-baura-dark/30 text-[10px] uppercase tracking-[0.2em]">{t('hero.discoverMore')}</span>
        <div className="w-px h-12 bg-gradient-to-b from-baura-dark/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
