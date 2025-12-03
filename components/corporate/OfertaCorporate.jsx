'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RotateCw, CheckCircle2, Sparkles } from 'lucide-react';
import { trackFormSubmit } from '../../utils/gtm';
import { registerInteraction } from '../../utils/tracking/engagement';

const OfertaCorporate = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          empresa: formData.empresa,
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          assunto: 'Landing Page Corporate - Diagnóstico Gratuito (CTA Final)',
          mensagem: 'Lead capturado via CTA final da landing page corporate',
          source: 'lp_corporate_cta_final'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          assunto: 'Landing Page Corporate CTA Final',
          source: 'oferta_form'
        });
        registerInteraction('form_submit_corporate_cta');
        setFormData({ nome: '', email: '', telefone: '', empresa: '' });
      } else {
        throw new Error(result.error || 'Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-brand-dark via-brand-dark to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.15),transparent_55%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-2 mb-6 backdrop-blur-sm border border-brand-gold/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-4 w-4 text-brand-gold" />
              <span className="text-xs font-semibold tracking-[0.08em] text-brand-gold uppercase">Oferta Especial</span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A melhor gestão de viagens corporativas está a{' '}
              <span className="text-brand-gold">um clique</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Não adie mais a eficiência e a tranquilidade. Nossa proposta é clara: 
              <strong className="text-brand-gold"> o poder da tecnologia sem a frieza do atendimento automatizado</strong>.
            </motion.p>

            <motion.p 
              className="text-lg text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Receba agora o seu diagnóstico rápido e gratuito e veja como a 24H pode ser 
              o parceiro estratégico que sua empresa precisa.
            </motion.p>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-2xl">
              {/* Form header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-dark">
                  Receba um diagnóstico rápido e gratuito
                </h3>
              </div>

              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-50 p-6 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5" />
                  <div className="text-sm text-emerald-800">
                    <p className="font-semibold">Enviado com sucesso!</p>
                    <p className="mt-1">Nossa equipe entrará em contato em breve para apresentar seu diagnóstico personalizado.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 inline-flex items-center gap-1 text-emerald-600 hover:underline font-medium"
                    >
                      <RotateCw className="h-4 w-4" /> Enviar novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome-oferta" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                    <input
                      id="nome-oferta"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email-oferta" className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                    <input
                      id="email-oferta"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone-oferta" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input
                      id="telefone-oferta"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa-oferta" className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                    <input
                      id="empresa-oferta"
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-bold bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <RotateCw className="h-5 w-5 animate-spin" />
                        <span>ENVIANDO...</span>
                      </>
                    ) : (
                      <>
                        <span>QUERO O MELHOR DOS DOIS MUNDOS</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              {status === 'error' && (
                <p className="mt-4 text-center text-sm text-red-600">
                  Erro ao enviar. Tente novamente.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfertaCorporate;
