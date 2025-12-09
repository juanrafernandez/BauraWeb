import React, { useState } from 'react';
import { Sparkles, Heart, Gem } from 'lucide-react';

const OlfactoryPyramid: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      name: 'Salida',
      subtitle: 'Notas de Salida',
      icon: Sparkles,
      description: 'La primera impresión. Aromas frescos y volátiles como cítricos y acuáticos que capturan la atención en los primeros 15-30 minutos.',
      notes: ['Bergamota', 'Limón', 'Pomelo', 'Menta'],
      duration: '15-30 min'
    },
    {
      name: 'Corazón',
      subtitle: 'Notas de Corazón',
      icon: Heart,
      description: 'El alma de la fragancia. Aromas florales, verdes y afrutados que emergen cuando las notas de salida se desvanecen.',
      notes: ['Rosa', 'Jazmín', 'Lavanda', 'Geranio'],
      duration: '2-4 horas'
    },
    {
      name: 'Fondo',
      subtitle: 'Notas de Fondo',
      icon: Gem,
      description: 'La firma duradera. Notas profundas de maderas, ámbar y especias que permanecen durante horas, definiendo el carácter final.',
      notes: ['Sándalo', 'Vainilla', 'Ámbar', 'Almizcle'],
      duration: '6+ horas'
    }
  ];

  return (
    <section id="pyramid" className="py-32 lg:py-40 bg-baura-sand/50 relative overflow-hidden scroll-mt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-baura-gold font-sans font-medium tracking-[0.3em] text-[11px] uppercase mb-6">
            Ciencia Olfativa
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-baura-dark leading-tight max-w-3xl mx-auto mb-8">
            La Pirámide Olfativa
          </h2>
          <p className="text-baura-text-secondary font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Cada fragancia se compone de tres capas que se revelan gradualmente, creando una experiencia sensorial que evoluciona con el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Interactive Pyramid */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <svg viewBox="0 0 300 280" className="w-full h-auto">
                {/* Top Layer */}
                <g
                  onClick={() => setActiveLayer(0)}
                  className="cursor-pointer transition-all duration-500"
                >
                  <path
                    d="M150 20 L195 95 L105 95 Z"
                    fill={activeLayer === 0 ? '#C4A962' : '#FFFFFF'}
                    stroke="#C4A962"
                    strokeWidth={activeLayer === 0 ? "0" : "1.5"}
                    className="transition-all duration-500"
                  />
                  <text
                    x="150" y="70"
                    textAnchor="middle"
                    className={`font-sans text-[10px] font-medium tracking-[0.15em] uppercase pointer-events-none transition-all duration-500 ${activeLayer === 0 ? 'fill-white' : 'fill-baura-gold'}`}
                  >
                    SALIDA
                  </text>
                </g>

                {/* Heart Layer */}
                <g
                  onClick={() => setActiveLayer(1)}
                  className="cursor-pointer transition-all duration-500"
                >
                  <path
                    d="M100 105 L200 105 L235 175 L65 175 Z"
                    fill={activeLayer === 1 ? '#C4A962' : '#FFFFFF'}
                    stroke="#C4A962"
                    strokeWidth={activeLayer === 1 ? "0" : "1.5"}
                    className="transition-all duration-500"
                  />
                  <text
                    x="150" y="148"
                    textAnchor="middle"
                    className={`font-sans text-[11px] font-medium tracking-[0.15em] uppercase pointer-events-none transition-all duration-500 ${activeLayer === 1 ? 'fill-white' : 'fill-baura-gold'}`}
                  >
                    CORAZÓN
                  </text>
                </g>

                {/* Base Layer */}
                <g
                  onClick={() => setActiveLayer(2)}
                  className="cursor-pointer transition-all duration-500"
                >
                  <path
                    d="M60 185 L240 185 L280 260 L20 260 Z"
                    fill={activeLayer === 2 ? '#C4A962' : '#FFFFFF'}
                    stroke="#C4A962"
                    strokeWidth={activeLayer === 2 ? "0" : "1.5"}
                    className="transition-all duration-500"
                  />
                  <text
                    x="150" y="230"
                    textAnchor="middle"
                    className={`font-sans text-[12px] font-medium tracking-[0.15em] uppercase pointer-events-none transition-all duration-500 ${activeLayer === 2 ? 'fill-white' : 'fill-baura-gold'}`}
                  >
                    FONDO
                  </text>
                </g>
              </svg>

            </div>

            <p className="text-[11px] text-baura-text-tertiary uppercase tracking-[0.2em] mt-8">
              Toca para explorar
            </p>
          </div>

          {/* Layer Details */}
          <div className="lg:pl-8">
            {layers.map((layer, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${activeLayer === idx ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
              >
                {activeLayer === idx && (
                  <div className="space-y-8">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-baura-gold/10 flex items-center justify-center">
                        <layer.icon size={24} className="text-baura-gold" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-serif text-baura-dark">{layer.subtitle}</h3>
                        <p className="text-baura-text-tertiary text-sm">{layer.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-baura-text-secondary font-light text-lg leading-relaxed">
                      {layer.description}
                    </p>

                    {/* Sample Notes */}
                    <div>
                      <p className="text-[10px] text-baura-text-tertiary uppercase tracking-[0.2em] mb-4">
                        Notas características (ejemplo)
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {layer.notes.map((note, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white rounded-full text-sm text-baura-text-secondary border border-baura-dark/5"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OlfactoryPyramid;
