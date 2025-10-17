'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTrabalheConoscoPage } from '../../utils/hooks/useSanityData';

const HeroTrabalheConosco = () => {
  const { data: trabalheConoscoData, loading, error } = useTrabalheConoscoPage();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-gold/20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {trabalheConoscoData?.hero?.title || "Trabalhe Conosco"}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {trabalheConoscoData?.hero?.subtitle || "Faça parte da nossa equipe e construa uma carreira no turismo"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => {
                const formSection = document.getElementById('vagas');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {trabalheConoscoData?.hero?.ctaText || "VER VAGAS DISPONÍVEIS"}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroTrabalheConosco;