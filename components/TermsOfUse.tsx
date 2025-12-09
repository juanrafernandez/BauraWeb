import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const TermsOfUse: React.FC = () => {
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
        <h1 className="text-4xl font-serif text-baura-dark mb-4">{t('terms.title')}</h1>
        <p className="text-baura-text-tertiary mb-12">{t('legal.lastUpdated')}: {getLocalizedDate()}</p>

        <div className="prose prose-lg max-w-none text-baura-text-secondary">

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section1.title')}</h2>
            <p>{t('terms.section1.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section2.title')}</h2>
            <p>{t('terms.section2.intro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('terms.section2.item1')}</li>
              <li>{t('terms.section2.item2')}</li>
              <li>{t('terms.section2.item3')}</li>
              <li>{t('terms.section2.item4')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section3.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('terms.section3.content') }} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section4.title')}</h2>
            <p>{t('terms.section4.intro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('terms.section4.item1')}</li>
              <li>{t('terms.section4.item2')}</li>
              <li>{t('terms.section4.item3')}</li>
              <li>{t('terms.section4.item4')}</li>
              <li>{t('terms.section4.item5')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section5.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('terms.section5.paragraph1') }} />
            <p className="mt-4">{t('terms.section5.paragraph2')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section6.title')}</h2>
            <p>{t('terms.section6.paragraph1')}</p>
            <p className="mt-4">{t('terms.section6.paragraph2')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section7.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('terms.section7.intro') }} />
            <p className="mt-4">{t('terms.section7.listIntro')}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t('terms.section7.item1')}</li>
              <li>{t('terms.section7.item2')}</li>
              <li>{t('terms.section7.item3')}</li>
              <li>{t('terms.section7.item4')}</li>
              <li>{t('terms.section7.item5')}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section8.title')}</h2>
            <p>{t('terms.section8.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section9.title')}</h2>
            <p>{t('terms.section9.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section10.title')}</h2>
            <p>{t('terms.section10.content')}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-baura-dark mb-4">{t('terms.section11.title')}</h2>
            <p>
              {t('terms.section11.content')}
              <a href="mailto:business@baura.app" className="text-baura-gold hover:underline"> business@baura.app</a>
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

export default TermsOfUse;
