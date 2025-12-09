import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

const PrivacyPolicy: React.FC = () => {
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
        <h1 className="text-4xl font-serif text-baura-dark mb-4">Política de Privacidad</h1>
        <p className="text-baura-text-tertiary mb-12">Última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none text-baura-text-secondary">

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">1. Responsable del tratamiento</h2>
            <p>
              Baura es un proyecto desarrollado por un particular con residencia en España.
              Para cualquier consulta relacionada con la privacidad, puedes contactarnos en:
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">2. Datos que recopilamos</h2>
            <p>A través de esta web y la aplicación Baura, podemos recopilar:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Datos de contacto:</strong> Nombre y email cuando nos escribes a través del formulario de contacto.</li>
              <li><strong>Datos de uso de la app:</strong> Preferencias olfativas, colección de perfumes y valoraciones que introduces voluntariamente en la aplicación.</li>
              <li><strong>Datos técnicos:</strong> Información anónima sobre el dispositivo y uso de la aplicación para mejorar el servicio.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">3. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Responder a tus consultas y solicitudes de contacto.</li>
              <li>Proporcionarte recomendaciones personalizadas de fragancias.</li>
              <li>Mejorar la aplicación y la experiencia de usuario.</li>
              <li>Cumplir con obligaciones legales cuando sea necesario.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">4. Base legal</h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento al utilizar la aplicación
              y enviarnos comunicaciones, así como en nuestro interés legítimo de mejorar el servicio.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">5. Conservación de datos</h2>
            <p>
              Conservamos tus datos mientras mantengas una cuenta activa en la aplicación o mientras
              sea necesario para responder a tus consultas. Los datos de contacto se eliminan
              transcurridos 12 meses desde la última comunicación.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">6. Compartición de datos</h2>
            <p>
              <strong>No vendemos ni compartimos tus datos personales con terceros</strong> con fines comerciales.
              Solo podemos compartir información con:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Proveedores de servicios técnicos necesarios para el funcionamiento de la app (hosting, email).</li>
              <li>Autoridades públicas cuando exista obligación legal.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">7. Tus derechos</h2>
            <p>Conforme al Reglamento General de Protección de Datos (RGPD), tienes derecho a:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos.</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado.</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos.</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, escríbenos a
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>.
              Responderemos en un plazo máximo de 30 días.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">8. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas razonables para proteger tus datos
              contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema es
              completamente seguro y no podemos garantizar la seguridad absoluta de la información.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">9. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios
              significativos a través de la aplicación o por email. Te recomendamos revisar
              esta página periódicamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">10. Contacto y reclamaciones</h2>
            <p>
              Para cualquier consulta sobre privacidad:
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
            </p>
            <p className="mt-4">
              Si consideras que tus derechos no han sido atendidos correctamente, puedes presentar
              una reclamación ante la Agencia Española de Protección de Datos (AEPD):
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-baura-gold hover:underline"> www.aepd.es</a>
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

export default PrivacyPolicy;
