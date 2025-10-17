'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HeroEventos = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D38E17]/10 via-transparent to-[#D38E17]/10 z-0"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <img
              src="/selo-vermelho.png"
              alt="24H Escritório de Viagens"
              className="w-32 h-32 mx-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            VIAGENS PARA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              EVENTOS
            </span>
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed">
            Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroEventos;