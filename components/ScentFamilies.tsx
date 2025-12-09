import React, { useState } from 'react';

interface Family {
  key: string;
  name: string;
  description: string;
  notes: string[];
  color: string;
  intensity: string;
  season: string;
}

const families: Family[] = [
  {
    key: 'citrus',
    name: 'Cítricos',
    description: 'Fragancias frescas, energizantes y ligeras basadas en frutas cítricas.',
    notes: ['Limón', 'Bergamota', 'Naranja', 'Mandarina'],
    color: '#F9D423',
    intensity: 'Ligera',
    season: 'Primavera · Verano'
  },
  {
    key: 'floral',
    name: 'Florales',
    description: 'Perfumes románticos y delicados con predominio de flores frescas.',
    notes: ['Rosa', 'Jazmín', 'Lirio', 'Peonía'],
    color: '#EFA2B2',
    intensity: 'Media',
    season: 'Primavera · Verano'
  },
  {
    key: 'fruity',
    name: 'Frutales',
    description: 'Fragancias dulces y jugosas con aromas de frutas frescas y maduras.',
    notes: ['Manzana', 'Durazno', 'Pera', 'Frambuesa'],
    color: '#F4C430',
    intensity: 'Media',
    season: 'Primavera · Verano'
  },
  {
    key: 'woody',
    name: 'Amaderados',
    description: 'Perfumes cálidos y sofisticados con notas de maderas secas y resinosas.',
    notes: ['Sándalo', 'Cedro', 'Vetiver', 'Patchouli'],
    color: '#8B5E3B',
    intensity: 'Alta',
    season: 'Otoño · Invierno'
  },
  {
    key: 'oriental',
    name: 'Orientales',
    description: 'Fragancias intensas y exóticas con toques cálidos y especiados.',
    notes: ['Vainilla', 'Incienso', 'Ámbar', 'Canela'],
    color: '#D0A9F5',
    intensity: 'Alta',
    season: 'Otoño · Invierno'
  },
  {
    key: 'spicy',
    name: 'Especiados',
    description: 'Perfumes cálidos y picantes con aromas exóticos de especias.',
    notes: ['Canela', 'Clavo', 'Pimienta', 'Cardamomo'],
    color: '#F25D27',
    intensity: 'Alta',
    season: 'Otoño · Invierno'
  },
  {
    key: 'aquatic',
    name: 'Acuáticos',
    description: 'Fragancias frescas y ligeras que evocan la brisa marina.',
    notes: ['Brisa Marina', 'Sal Marina', 'Algas', 'Agua'],
    color: '#00BFFF',
    intensity: 'Ligera',
    season: 'Verano · Primavera'
  },
  {
    key: 'green',
    name: 'Verdes',
    description: 'Aromas frescos y herbales que recuerdan hojas frescas y jardines.',
    notes: ['Hierba', 'Menta', 'Té Verde', 'Lavanda'],
    color: '#228B22',
    intensity: 'Media',
    season: 'Primavera · Verano'
  },
  {
    key: 'gourmand',
    name: 'Gourmand',
    description: 'Perfumes dulces y cálidos inspirados en postres y alimentos deliciosos.',
    notes: ['Vainilla', 'Caramelo', 'Chocolate', 'Café'],
    color: '#FFB6C1',
    intensity: 'Media-Alta',
    season: 'Otoño · Invierno'
  }
];

const ScentFamilies: React.FC = () => {
  const [hoveredFamily, setHoveredFamily] = useState<string | null>(null);

  return (
    <section id="families" className="py-32 lg:py-40 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-baura-gold font-sans font-medium tracking-[0.3em] text-[11px] uppercase mb-6">
            Las 9 Familias
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-baura-dark leading-tight max-w-3xl mx-auto mb-8">
            Familias Olfativas
          </h2>
          <p className="text-baura-text-secondary font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Cada familia olfativa tiene una personalidad única. Descubre cuál resuena con tu esencia.
          </p>
        </div>

        {/* Families Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {families.map((family) => (
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
                    <h3 className="text-2xl font-serif text-baura-dark mb-1">{family.name}</h3>
                    <p className="text-[10px] text-baura-text-tertiary uppercase tracking-[0.15em]">
                      {family.intensity} · {family.season}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: family.color }}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-baura-text-secondary font-light text-sm leading-relaxed mb-6">
                  {family.description}
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
            Explora las 9 familias olfativas completas en la app
          </p>
        </div>

      </div>
    </section>
  );
};

export default ScentFamilies;
