'use client'

import React from 'react';
import Image from 'next/image';
import { Building2, Users, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSectionView } from '../utils/tracking/engagement';
import { useHomepage } from '../utils/hooks/useSanityData';
import { resolveImage } from '../utils/lib/sanity';

const highlights = [
  { icon: Building2, title: 'Especialização Corporativa', description: 'Foco exclusivo em viagens de negócios e incentivo' },
  { icon: Users, title: 'Equipe Experiente', description: 'Expertise multidisciplinar certificada' },
  { icon: Globe, title: 'Alcance Global', description: 'Operações nacionais e internacionais' },
  { icon: Shield, title: 'Suporte 24/7', description: 'Assistência completa em qualquer situação' }
];

const AboutCompany = () => {
  // Corrige uso do hook (não dentro de useEffect) para registrar section_view
  useSectionView('sec-about-company', { threshold: 0.5 });

  const { data: homepageData } = useHomepage();

  return (
    <section id="sec-about-company" className="relative bg-gradient-to-br from-brand-dark via-brand-dark to-slate-900 pt-24 pb-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 ">
          {/* Left Column */}
          <div className="divide-y divide-white/10 lg:border-r border-white/10">
            <div className="p-8 lg:p-12">
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-2 backdrop-blur-sm border border-brand-gold/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Building2 className="h-5 w-5 text-brand-gold" strokeWidth={1.5} />
                <span className="text-xs font-semibold tracking-[0.08em] text-brand-gold">SOBRE A 24H</span>
              </motion.div>
              <motion.h2 
                className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-8 leading-[1.05]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                {homepageData?.aboutCompany?.title || 'Mais de duas décadas especializados em '}<span className="text-brand-gold">{homepageData?.aboutCompany?.subtitle || 'gestão de viagens'}</span>
              </motion.h2>
              <motion.div 
                className="space-y-6 text-lg text-white/85 leading-relaxed"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
              >
                {homepageData?.aboutCompany?.description ? (
                  homepageData.aboutCompany.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))
                ) : (
                  <>
                    <p>
                      A 24H Escritório de Viagens é uma agência especializada em viagens corporativas, de lazer, turismo de incentivo e eventos. Nossa trajetória madura nos permite desenhar soluções sob medida e atuar com excelência na gestão de viagens nacionais e internacionais, oferecendo programas completos e personalizados para empresas, famílias e clientes individuais.
                    </p>
                    <p>
                      Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens, reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia e segurança em cada atendimento.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="divide-y divide-white/10 relative">
            <div className="p-8 lg:p-12 space-y-10">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                <div className="w-full h-96 lg:h-[570px] relative">
                  <Image
                    src={resolveImage(homepageData?.about?.image, '/images/equipe.jpg')}
                    alt="Equipe 24H Escritório de Viagens"
                    fill
                    className="object-cover"
                    style={{ filter: 'sepia(10%) saturate(120%) brightness(95%) contrast(110%)' }}
                    sizes="(min-width: 1024px) 570px, 384px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Highlights Grid movido para aqui */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
              >
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <motion.div
                      key={h.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-brand-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm tracking-wide">{h.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed">{h.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            <div className="hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
