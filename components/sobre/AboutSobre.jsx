'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useSobrePage } from '../../utils/hooks/useSanityData';

const AboutSobre = () => {
  const { data: sobreData, loading, error } = useSobrePage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const aboutData = sobreData?.about || {
    title: "Nossa História",
    description: "Na 24H, cuidamos de todas as etapas da sua viagem, garantindo uma experiência tranquila e sem imprevistos. Nossos serviços abrangem desde a cotação e emissão de passagens até reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos, roteiros turísticos e ingressos.\n\nTrabalhamos com uma ampla e consolidada rede de fornecedores e parceiros nos setores aéreo, hoteleiro e de turismo, o que nos permite assegurar agilidade, economia e segurança em cada atendimento. Nosso compromisso primordial é oferecer um suporte disponível 24 horas por dia, 7 dias por semana, para que você tenha total tranquilidade em qualquer situação."
  };

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {aboutData.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-6">
              {aboutData.description.split('\n\n')[0]}
            </p>
            <p className="text-lg leading-relaxed">
              {aboutData.description.split('\n\n')[1]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSobre;