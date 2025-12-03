'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, Award, Users, RotateCw, CheckCircle2 } from 'lucide-react';
import { trackFormSubmit } from '../../utils/gtm';
import { registerInteraction } from '../../utils/tracking/engagement';

const HeroCorporate = () => {
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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-dark via-brand-dark to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.12),transparent_55%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Hook */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              CONTROLE TOTAL SOBRE SUAS{' '}
              <span className="text-brand-gold">VIAGENS DE NEGÓCIOS</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Você não precisa mais escolher entre a agilidade da tecnologia ou o suporte humano personalizado. 
              Entregamos uma plataforma <strong className="text-brand-gold">self-booking</strong> e{' '}
              <strong className="text-brand-gold">suporte humano 24/7</strong> (de verdade), em uma só solução.
            </motion.p>

            {/* Metrics */}
            <motion.div 
              className="mt-10 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-10 w-10 rounded-lg bg-brand-gold/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-white/90">{metric.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-2xl">
              {/* Form header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 mb-4">
                  <span className="text-xs font-semibold tracking-wide text-brand-dark uppercase">Diagnóstico Gratuito</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">
                  Receba seu diagnóstico gratuito de otimização
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Nossa equipe de especialistas fará uma análise rápida do seu cenário atual e apresentará um plano de economia e eficiência.
                </p>
              </div>

              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-50 p-6 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5" />
                  <div className="text-sm text-emerald-800">
                    <p className="font-semibold">Enviado com sucesso!</p>
                    <p className="mt-1">Entraremos em contato em breve.</p>
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
                    <label htmlFor="nome-hero" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                    <input
                      id="nome-hero"
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
                    <label htmlFor="email-hero" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                    <input
                      id="email-hero"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone-hero" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input
                      id="telefone-hero"
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
                    <label htmlFor="empresa-hero" className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                    <input
                      id="empresa-hero"
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

export default HeroCorporate;
