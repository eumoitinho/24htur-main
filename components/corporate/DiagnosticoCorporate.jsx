'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, Award, Users, RotateCw, CheckCircle2, User, AtSign, Phone } from 'lucide-react';
import { trackFormSubmit } from '../../utils/gtm';
import { registerInteraction } from '../../utils/tracking/engagement';

const DiagnosticoCorporate = () => {
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
          assunto: 'Landing Page Corporate - Diagnóstico Gratuito',
          mensagem: 'Lead capturado via landing page corporate',
          source: 'lp_corporate_hero'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          assunto: 'Landing Page Corporate',
          source: 'hero_form'
        });
        registerInteraction('form_submit_corporate');
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

  const metrics = [
    { icon: Building2, text: '3 escritórios no Brasil' },
    { icon: Award, text: '+20 anos de experiência' },
    { icon: Clock, text: '24/7 de suporte dedicado' },
    { icon: Users, text: '100% gestão personalizada' }
  ];

  return (
    <section id="diagnostico" className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-[0.12em] text-brand-dark uppercase">Por que a 24H?</span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Receba seu diagnóstico gratuito de otimização
            </motion.h2>

            <motion.p 
              className="text-slate-600 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossa equipe de especialistas fará uma análise rápida do seu cenário atual e apresentará um plano de economia e eficiência.
            </motion.p>

            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-brand-dark leading-tight">{metric.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 p-8 sm:p-10 shadow-xl">
              {/* Form header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 ring-1 ring-inset ring-brand-red/20 mb-4">
                  <span className="text-xs font-semibold tracking-[0.12em] text-brand-red uppercase">Diagnóstico Gratuito</span>
                </div>
                <h3 className="text-2xl font-semibold text-brand-dark tracking-tight">
                  Preencha seus dados
                </h3>
              </div>

              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5" />
                  <div className="text-sm text-emerald-800">
                    <p className="font-semibold">Enviado com sucesso!</p>
                    <p className="mt-1 leading-relaxed">Entraremos em contato em breve.</p>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nome-diag" className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <div className="relative">
                      <input
                        id="nome-diag"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-dark placeholder:text-slate-400 pl-4 pr-12 text-sm transition-all"
                        placeholder="Seu nome completo"
                      />
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email-diag" className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                    <div className="relative">
                      <input
                        id="email-diag"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-dark placeholder:text-slate-400 pl-4 pr-12 text-sm transition-all"
                        placeholder="seu@email.com"
                      />
                      <AtSign className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="telefone-diag" className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                    <div className="relative">
                      <input
                        id="telefone-diag"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-dark placeholder:text-slate-400 pl-4 pr-12 text-sm transition-all"
                        placeholder="(00) 00000-0000"
                      />
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="empresa-diag" className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                    <div className="relative">
                      <input
                        id="empresa-diag"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        disabled={status === 'submitting'}
                        className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-dark placeholder:text-slate-400 pl-4 pr-12 text-sm transition-all"
                        placeholder="Nome da sua empresa"
                      />
                      <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white tracking-wide transition shadow-lg bg-brand-red hover:bg-brand-red/90 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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

export default DiagnosticoCorporate;
