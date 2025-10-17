'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAEventos = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Pronto para organizar seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              próximo evento?
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar a organização das viagens do seu evento em uma experiência simples e eficiente.
          </p>

          <button className="group relative overflow-hidden bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">FALE COM UM ESPECIALISTA</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAEventos;