'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroCorporate = () => {
  return (
    <section id="inicio" className="relative pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-6">
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

          {/* Content - Single column like original Hero */}
          <div className="relative z-[2] max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              Controle total<br className="hidden md:block" /> sobre suas{' '}
              <span className="text-brand-gold">viagens<br className="hidden md:block" /> de negócios</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-white/90 text-[18px] leading-7 max-w-2xl"
            >
              Você não precisa mais escolher entre a agilidade da tecnologia ou o suporte humano personalizado. 
              Entregamos uma plataforma <strong className="text-brand-gold">self-booking</strong> e{' '}
              <strong className="text-brand-gold">suporte humano 24/7</strong> (de verdade), em uma só solução.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              {/* Primary CTA */}
              <motion.a
                href="#diagnostico"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white transition-all hover:bg-white/10 outline outline-1 outline-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-lg hover:shadow-white/20"
              >
                <span className="text-sm font-semibold">QUERO O MELHOR DOS DOIS MUNDOS</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </motion.a>

              {/* Secondary link */}
              <motion.a 
                href="#solucao" 
                whileHover={{ scale: 1.02 }}
                className="group inline-flex items-center gap-3 text-white/95 hover:text-white transition-all"
              >
                <span className="relative inline-flex h-[55px] w-[55px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all"></span>
                  <span className="relative inline-flex h-[39px] w-[39px] items-center justify-center rounded-full bg-white/90 text-brand-dark group-hover:bg-white transition-all">
                    <Play className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </span>
                <span className="text-[18px] font-semibold">Conheça a Solução</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCorporate;
