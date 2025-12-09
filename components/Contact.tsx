import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Logo from './Logo';

const EMAILJS_SERVICE_ID = 'service_vsfo6pa';
const EMAILJS_TEMPLATE_ID = 'template_qf0thfm';
const EMAILJS_PUBLIC_KEY = 'Rhjc_c7xjqOKHvNFH';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const openMailClient = () => {
    const mailtoLink = `mailto:business@baura.app?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      // Fallback: abrir cliente de correo
      openMailClient();
    }
  };

  return (
    <footer id="contact" className="bg-baura-dark pt-32 pb-12 scroll-mt-20 relative overflow-hidden">
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mb-20">

          {/* Left: Brand & Info */}
          <div className="space-y-10">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <span className="font-serif text-3xl tracking-widest text-white">
                BAURA
              </span>
            </div>

            {/* Tagline */}
            <p className="text-white/50 font-light text-lg leading-relaxed max-w-md">
              Tu guía personal en el mundo de las fragancias. Descubre tu esencia, define tu aura.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em]">
                Contacto
              </p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-baura-gold" />
                <a href="mailto:business@baura.app" className="text-white/80 hover:text-baura-gold transition-colors">
                  business@baura.app
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="space-y-8">
            <div>
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">
                Colaboraciones y Negocios
              </p>
              <p className="text-white/60 font-light text-sm">
                ¿Interesado en publicidad o colaboraciones? Escríbenos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-baura-gold/50 transition-colors duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-baura-gold/50 transition-colors duration-300"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-baura-gold/50 transition-colors duration-300"
                required
              />
              <textarea
                placeholder="Tu mensaje"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-baura-gold/50 transition-colors duration-300 resize-none"
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-6 py-4 bg-baura-gold text-baura-dark rounded-xl font-medium text-sm hover:bg-baura-gold-light transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Enviado
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-sm mt-3">
                  Mensaje enviado correctamente. Te responderemos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-yellow-400 text-sm mt-3">
                  Se abrirá tu cliente de correo como alternativa.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/30">
          <p>&copy; {new Date().getFullYear()} Baura. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-white/60 transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-white/60 transition-colors">Términos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
