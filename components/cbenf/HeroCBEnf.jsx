'use client'

import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroCBEnf = () => {
  return (
    <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/cbenf-hero.jpg)` }}
        >
          {/* Layered overlay */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#06060a]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/95 via-[#06060a]/70 to-[#06060a]/20" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
            {/* Logo */}
            <div className="absolute right-6 top-6 hidden md:block">
              <img
                src="/logo.png"
                alt="24H Escritório de Viagens"
                width={220}
                height={220}
                className="w-[220px] h-[220px] object-contain opacity-90"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-[2] max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-2 text-brand-gold text-sm font-semibold ring-1 ring-brand-gold/30">
                <Calendar className="h-4 w-4" />
                CBEnf 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
            >
              Congresso Brasileiro <br className="hidden md:block" />
              de <span className='text-brand-gold'>Enfermagem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-6 text-white/90 text-[18px] leading-7 max-w-2xl"
            >
              Planejamos sua viagem completa para o maior evento de enfermagem do Brasil. Hospedagem, translado, city tours e tudo que você precisa para aproveitar ao máximo este congresso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-6 flex items-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-gold" />
                <span className="font-medium">12-15 Nov 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-gold" />
                <span className="font-medium">Goiânia, GO</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-brand-dark font-semibold transition-all hover:shadow-xl"
              >
                <span>RESERVE SUA VIAGEM</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </motion.a>

              <motion.a
                href="#pacotes"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-white/95 hover:text-white transition-all"
              >
                <span className="text-[16px] font-medium border-b border-white/30 hover:border-white/70">Ver pacotes disponíveis</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCBEnf;