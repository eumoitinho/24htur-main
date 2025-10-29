'use client'

import React from 'react';
import Image from 'next/image';
import { resolveImage } from '../../utils/lib/sanity';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useOpcoesViagemPage } from '../../utils/hooks/useSanityData';
import Logo from '../Logo';

const HeroOpcoesViagem = () => {
  const { data: opcoesData, loading, error } = useOpcoesViagemPage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const heroData = opcoesData?.hero || {
    title: "OPÇÕES DE VIAGEM",
    subtitle: "Descubra o mundo com a 24H Escritório de Viagens",
    ctaText: "EXPLORE NOSSAS OPÇÕES!"
  };

  return (
    <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 z-0">
            <Image
              src={resolveImage(opcoesData?.hero?.backgroundImage, '/hero-opcoes.jpg')}
              alt={opcoesData?.hero?.title || 'Hero background'}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#06060a]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/10" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
            <div className="absolute right-6 top-6 hidden md:block">
              <Logo className="w-[180px] h-[180px]" />
            </div>
          </div>

          <div className="relative z-[2] max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              {opcoesData?.hero?.title ? opcoesData.hero.title.map(b => b.children?.map(c=>c.text).join('')).join(' ') : heroData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-white/90 text-[18px] leading-7"
            >
              {opcoesData?.hero?.subtitle || heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a
                href="#opcoes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {heroData.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOpcoesViagem;