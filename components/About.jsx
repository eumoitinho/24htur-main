'use client'

import React from 'react';
import { Timer, FileText, Wallet, Focus, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSectionView, registerInteraction } from '../utils/tracking/engagement';
import { trackSolicitarProposta } from '../utils/gtm';

const About = () => {
  const painPoints = [
    {
      icon: Timer,
      title: 'Sem tempo para planejar?',
      description: 'Pesquisar voos, hotéis, negociar tarifas e gerenciar aprovações são tarefas que, se não otimizadas, se tornam um fardo.'
    },
    {
      icon: FileText,
      title: 'Burocracia em excesso?',
      description: 'A burocracia e a lentidão nos processos de reserva e aprovação podem comprometer prazos e oportunidades de negócio.'
    },
    {
      icon: Wallet,
      title: 'Gastos fora do controle?',
      description: 'Diferenças de preço acumuladas impactam diretamente a saúde financeira da empresa.'
    },
    {
      icon: Focus,
      title: 'Desvio de foco?',
      description: 'Tempo gasto na gestão de viagens é tempo perdido em estratégia e crescimento.'
    }
  ];

  // dispara section_view quando 50% visível
  useSectionView('sec-about', { threshold: 0.5 });

  return (
    <section id="sobre" className="py-16 lg:py-24 relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HERO (titulo + badge) */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left: Intro Text */}
            <div className="lg:max-w-2xl">
              
              <h1 className="text-[40px] sm:text-[54px] md:text-[64px] lg:text-[68px] font-semibold tracking-tight leading-[0.95] text-slate-900">
                <span className="block">Gestão Completa</span>
                <span className="block text-brand-dark">de Viagens</span>
                <span className="block">Corporativas</span>
              </h1>
            </div>
            {/* Right: Status / Experiência */}
            <div className="lg:mt-8">
             <p className="text-sm font-semibold uppercase tracking-[0.09em] text-brand-dark/80 mb-4">Descomplique sua viagem corporativa</p>
            </div>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Coluna Imagem */}
            <motion.div
              className="lg:col-span-5 relative border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-100"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/mala.jpg"
                alt="Equipe 24H Escritório de Viagens"
                className="w-full h-[420px] lg:h-[550px] object-cover"
                style={{ filter: 'sepia(15%) saturate(110%) brightness(90%) contrast(105%)' }}
              />
              {/* Badge flutuante preservado (adaptado) */}
              <motion.div
                className="absolute top-6 left-6 w-[230px] rounded-xl p-4 text-white bg-brand-red shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="text-[40px] leading-none font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    +20
                  </motion.div>
                  <div className="leading-tight text-[16px] font-semibold">
                    Experiência<br />consolidada
                  </div>
                </div>
              </motion.div>
            </motion.div>

          {/* Coluna Conteúdo */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="flex flex-col gap-6 text-slate-600">
              <p className="text-base leading-relaxed max-w-2xl">
                Você já calculou quantas horas por mês sua equipe gasta organizando viagens? Enquanto pesquisa passagens, reserva hotéis, negocia tarifas e resolve imprevistos, o core business fica em segundo plano.
              </p>
              <p className="text-base leading-relaxed max-w-2xl">
                Nós assumimos 100% da gestão de suas viagens corporativas: destino, voos, acomodações, atividades e transporte. Com rede extensa de parceiros, geramos economia, segurança e personalização.
              </p>
              <p className="text-base leading-relaxed max-w-2xl">
                Atuamos em viagens individuais, grupos e programas de incentivo para equipes e parceiros comerciais.
              </p>

              {/* Pain Points em grade moderna */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-slate-200/70 p-4 bg-white/60 hover:border-brand-gold/60 hover:bg-brand-beige/40 transition-all group"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.15 * index }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold group-hover:bg-brand-red transition-colors">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-[15px] font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{point.title}</div>
                        <p className="text-[13px] text-slate-600 mt-1 group-hover:text-slate-700 transition-colors">{point.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA / Contato */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-brand-dark outline outline-1 outline-brand-red hover:bg-brand-red hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackSolicitarProposta('about_cta', { page_section: 'about' });
                  registerInteraction('solicitar_proposta');
                }}
              >
                <span className="text-sm font-semibold">SOLICITE UMA PROPOSTA PERSONALIZADA</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </motion.a>

              <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.02 }}>
                <span className="inline-flex h-[55px] w-[55px] items-center justify-center rounded-full bg-brand-red">
                  <Phone className="h-5 w-5 text-white" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-[15px] leading-6 text-slate-600">Precisa de ajuda?</div>
                  <div className="text-[18px] font-semibold tracking-tight text-brand-dark">(51) 3516-0098</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;