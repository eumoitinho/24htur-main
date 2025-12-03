'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, Award, Users, RotateCw, CheckCircle2, User, AtSign, Phone } from 'lucide-react';
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
    <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt="Viagens corporativas"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Overlays */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#06060a]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/10" />
          </div>

          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
            {/* Logo no canto */}
            <div className="absolute right-6 top-6 hidden md:block">
              <img src="/selo-vermelho.png" alt="24H" className="w-[180px] h-[180px] object-contain opacity-30" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="relative z-[2] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content - Hook */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CONTROLE TOTAL SOBRE SUAS{' '}
                <span className="text-brand-gold">VIAGENS DE NEGÓCIOS</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-white/90 text-[17px] sm:text-[18px] leading-7"
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
                className="mt-8 grid grid-cols-2 gap-3"
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
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 sm:p-8">
                <div className="relative">
                  {/* Form header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-2 ring-1 ring-inset ring-brand-gold/40 mb-4">
                      <span className="text-xs font-semibold tracking-[0.12em] text-brand-gold uppercase">Diagnóstico Gratuito</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      Receba seu diagnóstico gratuito de otimização
                    </h3>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed">
                      Nossa equipe de especialistas fará uma análise rápida do seu cenário atual e apresentará um plano de economia e eficiência.
                    </p>
                  </div>

                  {status === 'success' ? (
                    <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/20 p-6 flex items-start gap-3 backdrop-blur-sm">
                      <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                      <div className="text-sm text-emerald-200">
                        <p className="font-semibold text-emerald-300">Enviado com sucesso!</p>
                        <p className="mt-1 leading-relaxed">Entraremos em contato em breve.</p>
                        <button
                          type="button"
                          onClick={() => setStatus('idle')}
                          className="mt-4 inline-flex items-center gap-1 text-emerald-300 hover:underline font-medium"
                        >
                          <RotateCw className="h-4 w-4" /> Enviar novamente
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <div className="relative">
                          <input
                            id="nome-hero"
                            type="text"
                            required
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 text-white placeholder:text-white/50 pl-4 pr-12 text-sm backdrop-blur-sm"
                            placeholder="Seu nome completo"
                          />
                          <User className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="relative">
                          <input
                            id="email-hero"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 text-white placeholder:text-white/50 pl-4 pr-12 text-sm backdrop-blur-sm"
                            placeholder="seu@email.com"
                          />
                          <AtSign className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="relative">
                          <input
                            id="telefone-hero"
                            type="tel"
                            required
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 text-white placeholder:text-white/50 pl-4 pr-12 text-sm backdrop-blur-sm"
                            placeholder="(00) 00000-0000"
                          />
                          <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="relative">
                          <input
                            id="empresa-hero"
                            type="text"
                            required
                            value={formData.empresa}
                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                            disabled={status === 'submitting'}
                            className="w-full h-12 rounded-xl bg-white/10 border border-white/20 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 text-white placeholder:text-white/50 pl-4 pr-12 text-sm backdrop-blur-sm"
                            placeholder="Nome da sua empresa"
                          />
                          <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white tracking-wide transition shadow-lg bg-brand-red hover:bg-brand-red/90 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <p className="mt-4 text-center text-sm text-red-400">
                      Erro ao enviar. Tente novamente.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCorporate;
