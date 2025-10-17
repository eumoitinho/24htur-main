'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useSobrePage } from '../../utils/hooks/useSanityData';

const AboutSobre = () => {
  const { data: sobreData, loading, error } = useSobrePage();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
              {sobreData?.about?.title || "Nossa História"}
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          </motion.div>

          <motion.div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-6">
              {sobreData?.about?.description || `A 24H Turismo nasceu da paixão por criar experiências únicas e memoráveis.
              Há mais de uma década no mercado, somos especialistas em turismo corporativo e de lazer,
              oferecendo soluções personalizadas para cada cliente.`}
            </p>

            <p className="text-lg mb-6">
              {sobreData?.about?.mission || `Nossa missão é transformar viagens em momentos especiais, cuidando de cada detalhe
              para que nossos clientes possam focar no que realmente importa: aproveitar a experiência.`}
            </p>

            <p className="text-lg">
              {sobreData?.about?.vision || `Acreditamos que viajar é mais do que sair do lugar comum - é descobrir novas perspectivas,
              criar conexões e colecionar memórias que duram para sempre.`}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSobre;