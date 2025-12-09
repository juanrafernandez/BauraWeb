import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Gift, BookOpen, Compass } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: User,
      key: 'profile'
    },
    {
      icon: Gift,
      key: 'gifts'
    },
    {
      icon: BookOpen,
      key: 'collection'
    },
    {
      icon: Compass,
      key: 'explore'
    }
  ];

  return (
    <section id="features" className="py-32 lg:py-40 bg-baura-dark scroll-mt-20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-baura-dark via-[#1a1a1a] to-baura-dark pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-baura-gold font-sans font-medium tracking-[0.3em] text-[11px] uppercase mb-6">
            {t('features.label')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-3xl mx-auto mb-8">
            {t('features.title')}
          </h2>
          <p className="text-white/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-3xl p-10 border border-white/[0.06] hover:border-baura-gold/30 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-baura-gold/10 flex items-center justify-center mb-8 group-hover:bg-baura-gold/20 transition-colors duration-500">
                <feature.icon size={24} className="text-baura-gold" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-serif text-white">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <span className="px-3 py-1 bg-baura-gold/10 rounded-full text-[10px] text-baura-gold uppercase tracking-wider">
                    {t(`features.${feature.key}.highlight`)}
                  </span>
                </div>
                <p className="text-white/50 font-light leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-baura-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
