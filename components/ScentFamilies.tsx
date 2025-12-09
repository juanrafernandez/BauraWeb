import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Family {
  key: string;
  color: string;
  notes: string[];
}

const familyData: Family[] = [
  { key: 'citrus', color: '#F9D423', notes: ['Limón', 'Bergamota', 'Naranja', 'Mandarina'] },
  { key: 'floral', color: '#EFA2B2', notes: ['Rosa', 'Jazmín', 'Lirio', 'Peonía'] },
  { key: 'fruity', color: '#F4C430', notes: ['Manzana', 'Durazno', 'Pera', 'Frambuesa'] },
  { key: 'woody', color: '#8B5E3B', notes: ['Sándalo', 'Cedro', 'Vetiver', 'Patchouli'] },
  { key: 'oriental', color: '#D0A9F5', notes: ['Vainilla', 'Incienso', 'Ámbar', 'Canela'] },
  { key: 'spicy', color: '#F25D27', notes: ['Canela', 'Clavo', 'Pimienta', 'Cardamomo'] },
  { key: 'aquatic', color: '#00BFFF', notes: ['Brisa Marina', 'Sal Marina', 'Algas', 'Agua'] },
  { key: 'green', color: '#228B22', notes: ['Hierba', 'Menta', 'Té Verde', 'Lavanda'] },
  { key: 'gourmand', color: '#FFB6C1', notes: ['Vainilla', 'Caramelo', 'Chocolate', 'Café'] }
];

const ScentFamilies: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredFamily, setHoveredFamily] = useState<string | null>(null);

  return (
    <section id="families" className="py-32 lg:py-40 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-baura-gold font-sans font-medium tracking-[0.3em] text-[11px] uppercase mb-6">
            {t('families.label')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-baura-dark leading-tight max-w-3xl mx-auto mb-8">
            {t('families.title')}
          </h2>
          <p className="text-baura-text-secondary font-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t('families.subtitle')}
          </p>
        </div>

        {/* Families Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {familyData.map((family) => (
            <div
              key={family.key}
              className="group relative bg-baura-sand/30 rounded-3xl p-8 transition-all duration-500 hover:bg-white hover:shadow-xl cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredFamily(family.key)}
              onMouseLeave={() => setHoveredFamily(null)}
            >
              {/* Color accent line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl transition-all duration-500 group-hover:w-1.5"
                style={{ backgroundColor: family.color }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-baura-dark mb-1">
                      {t(`families.${family.key}.name`)}
                    </h3>
                    <p className="text-[10px] text-baura-text-tertiary uppercase tracking-[0.15em]">
                      {t(`families.${family.key}.intensity`)} · {t(`families.${family.key}.season`)}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: family.color }}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-baura-text-secondary font-light text-sm leading-relaxed mb-6">
                  {t(`families.${family.key}.description`)}
                </p>

                {/* Notes */}
                <div className="flex flex-wrap gap-2">
                  {family.notes.map((note, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/80 group-hover:bg-baura-sand/50 rounded-full text-xs text-baura-text-secondary transition-colors duration-300"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at top right, ${family.color}, transparent 70%)`
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-16">
          <p className="text-baura-text-tertiary text-sm">
            {t('families.exploreAll')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ScentFamilies;
