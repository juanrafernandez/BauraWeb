import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 bg-white overflow-hidden relative">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-baura-sand/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-baura-gold font-sans font-medium tracking-[0.3em] text-[11px] uppercase mb-6">
            La Filosofía
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-baura-dark leading-tight max-w-3xl mx-auto">
            El aroma es el recuerdo que desafía al olvido
          </h2>
        </div>

        {/* Etymology - Elegant layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-28">

          {/* BA + AURA Visual */}
          <div className="relative">
            <div className="space-y-16">
              {/* BA */}
              <div className="relative pl-8 border-l-2 border-baura-gold/30">
                <span className="text-[120px] md:text-[160px] font-serif text-baura-dark/5 absolute -top-8 -left-4 select-none pointer-events-none">B</span>
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-serif text-baura-dark mb-4">Ba</h3>
                  <p className="text-baura-gold font-sans font-medium tracking-[0.25em] text-[10px] uppercase mb-3">
                    Egipcio Antiguo · El Alma
                  </p>
                  <p className="text-baura-text-secondary font-light text-base leading-relaxed max-w-sm">
                    La parte del espíritu que viaja entre mundos, representando la esencia única e irrepetible de cada individuo.
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex items-center gap-6 pl-8">
                <div className="h-px bg-baura-gold/20 flex-1"></div>
                <span className="text-baura-gold/40 text-2xl">+</span>
                <div className="h-px bg-baura-gold/20 flex-1"></div>
              </div>

              {/* AURA */}
              <div className="relative pl-8 border-l-2 border-baura-gold/30">
                <span className="text-[120px] md:text-[160px] font-serif text-baura-dark/5 absolute -top-8 -left-4 select-none pointer-events-none">A</span>
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-serif text-baura-dark mb-4">Aura</h3>
                  <p className="text-baura-gold font-sans font-medium tracking-[0.25em] text-[10px] uppercase mb-3">
                    Latín · La Brisa
                  </p>
                  <p className="text-baura-text-secondary font-light text-base leading-relaxed max-w-sm">
                    La atmósfera distintiva que emana de una persona, su energía invisible que deja huella en quienes la perciben.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:pl-8">
            <div className="space-y-8 text-baura-text-secondary font-light text-lg leading-relaxed">
              <p>
                Para los antiguos egipcios, las fragancias eran vehículos sagrados para el viaje al más allá. Creían que el aroma tenía el poder de trascender el reino físico.
              </p>
              <p>
                <span className="text-baura-dark font-medium">Baura</span> nació de esta verdad atemporal: la fragancia es el arquitecto de la memoria. Un aroma familiar puede transportarte instantáneamente a un momento, lugar o persona específica.
              </p>
              <p>
                Nuestra misión es ayudarte a definir esa esencia. Diseñar la firma olfativa que capture tu alma y proyecte tu energía, asegurando que permanezcas inolvidable.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-12 pt-12 border-t border-baura-dark/10">
              <blockquote className="font-serif italic text-2xl md:text-3xl text-baura-gold leading-relaxed">
                "Define tu esencia.<br/>Vuélvete inmortal."
              </blockquote>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Story;
