import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-baura-dark py-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-3 text-white hover:text-baura-gold transition-colors">
            <ArrowLeft size={20} />
            <Logo size={32} />
            <span className="font-serif text-xl tracking-widest">BAURA</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-baura-dark mb-4">Términos de Uso</h1>
        <p className="text-baura-text-tertiary mb-12">Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none text-baura-text-secondary">

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar la aplicación Baura y este sitio web, aceptas estos términos de uso.
              Si no estás de acuerdo con alguna parte de estos términos, te rogamos que no utilices
              nuestros servicios.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">2. Descripción del servicio</h2>
            <p>
              Baura es una aplicación gratuita que te ayuda a descubrir y organizar fragancias.
              El servicio incluye:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Recomendaciones personalizadas de perfumes basadas en tus preferencias.</li>
              <li>Gestión de tu colección personal de fragancias.</li>
              <li>Información sobre familias olfativas y notas.</li>
              <li>Herramientas para explorar el mundo de la perfumería.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">3. Naturaleza del proyecto</h2>
            <p>
              Baura es un proyecto personal desarrollado por un particular en España.
              <strong> No es una empresa ni una entidad comercial.</strong> La aplicación se ofrece
              de forma gratuita y sin ánimo de lucro, como herramienta para los aficionados a la perfumería.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">4. Uso permitido</h2>
            <p>Te comprometes a utilizar Baura de forma responsable y legal. Queda prohibido:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Usar el servicio para fines ilegales o no autorizados.</li>
              <li>Intentar acceder a sistemas o datos no autorizados.</li>
              <li>Copiar, modificar o distribuir el contenido sin autorización.</li>
              <li>Introducir virus, malware o código malicioso.</li>
              <li>Interferir con el funcionamiento normal del servicio.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">5. Contenido y recomendaciones</h2>
            <p>
              Las recomendaciones de fragancias se generan de forma automatizada basándose en tus
              preferencias y algoritmos. <strong>Son orientativas y no constituyen asesoramiento profesional.</strong>
            </p>
            <p className="mt-4">
              La información sobre perfumes (notas, familias, etc.) se recopila de fuentes públicas
              y puede contener inexactitudes. No garantizamos la precisión completa de estos datos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">6. Propiedad intelectual</h2>
            <p>
              Los nombres, logotipos y marcas de perfumes mencionados en la aplicación pertenecen
              a sus respectivos propietarios. Baura no tiene afiliación con ninguna marca de perfumería.
            </p>
            <p className="mt-4">
              El diseño, código y contenido original de Baura están protegidos por derechos de autor.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">7. Limitación de responsabilidad</h2>
            <p>
              <strong>La aplicación se proporciona "tal cual" y "según disponibilidad"</strong>, sin garantías
              de ningún tipo, expresas o implícitas.
            </p>
            <p className="mt-4">En la máxima medida permitida por la ley, no seremos responsables de:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso de la app.</li>
              <li>Pérdida de datos o información almacenada en la aplicación.</li>
              <li>Interrupciones del servicio o errores técnicos.</li>
              <li>Decisiones de compra basadas en las recomendaciones de la app.</li>
              <li>Reacciones alérgicas o adversas a fragancias recomendadas.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">8. Disponibilidad del servicio</h2>
            <p>
              Nos esforzamos por mantener el servicio disponible, pero no garantizamos un funcionamiento
              ininterrumpido. Podemos modificar, suspender o discontinuar el servicio en cualquier
              momento sin previo aviso.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
              Los cambios entrarán en vigor tras su publicación. El uso continuado del servicio
              después de los cambios implica la aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">10. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por la legislación española. Para cualquier controversia,
              las partes se someten a los juzgados y tribunales de España.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">11. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos:
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-baura-dark py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} Baura. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
