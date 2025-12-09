import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const PrivacyPolicy: React.FC = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedDate = () => {
    const locales: { [key: string]: string } = {
      es: 'es-ES',
      en: 'en-US',
      fr: 'fr-FR'
    };
    return new Date().toLocaleDateString(locales[i18n.language] || 'es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

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
        <h1 className="text-4xl font-serif text-baura-dark mb-4">{t('privacy.title')}</h1>
        <p className="text-baura-text-tertiary mb-12">{t('legal.lastUpdated')}: {getLocalizedDate()}</p>

        <div className="prose prose-lg max-w-none text-baura-text-secondary">

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section1.title')}</h2>
            <p>
              {t('privacy.section1.content')}
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section2.title')}</h2>
            <p>{t('privacy.section2.intro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.item1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.item2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.item3') }} />
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section3.title')}</h2>
            <p>{t('privacy.section3.intro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('privacy.section3.item1')}</li>
              <li>{t('privacy.section3.item2')}</li>
              <li>{t('privacy.section3.item3')}</li>
              <li>{t('privacy.section3.item4')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section4.title')}</h2>
            <p>{t('privacy.section4.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section5.title')}</h2>
            <p>{t('privacy.section5.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section6.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('privacy.section6.intro') }} />
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('privacy.section6.item1')}</li>
              <li>{t('privacy.section6.item2')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section7.title')}</h2>
            <p>{t('privacy.section7.intro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item5') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.section7.item6') }} />
            </ul>
            <p className="mt-4">
              {t('privacy.section7.outro')}
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>.
              {' '}{t('privacy.section7.responseTime')}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section8.title')}</h2>
            <p>{t('privacy.section8.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section9.title')}</h2>
            <p>{t('privacy.section9.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('privacy.section10.title')}</h2>
            <p>
              {t('privacy.section10.contactIntro')}
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
            </p>
            <p className="mt-4">
              {t('privacy.section10.claimIntro')}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-baura-gold hover:underline"> www.aepd.es</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-baura-dark py-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} Baura. {t('legal.footerRights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
