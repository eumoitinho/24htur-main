'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Star, Users } from 'lucide-react';
import { useSobrePage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ValuesSobre = () => {
  const { data: sobreData, loading, error } = useSobrePage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  const valuesData = sobreData?.values || [
    {
      name: "Personalização",
      description: "Acreditamos que cada viagem é única. Por isso, adaptamos nossos serviços para atender às necessidades e desejos individuais de cada cliente, criando experiências sob medida."
    },
    {
      name: "Disponibilidade",
      description: "Estamos sempre presentes para nossos clientes. Nosso suporte 24/7 e a acessibilidade da nossa equipe garantem que você nunca esteja sozinho, independentemente do fuso horário ou da situação."
    },
    {
      name: "Comprometimento",
      description: "Nos dedicamos integralmente a cada projeto e a cada cliente, garantindo que todos os detalhes sejam cuidadosamente planejados e executados com a máxima precisão."
    },
    {
      name: "Ética profissional",
      description: "Atuamos com transparência, integridade e responsabilidade em todas as nossas relações, construindo confiança e credibilidade no mercado."
    }
  ];

  const iconMap = {
    "Personalização": Heart,
    "Disponibilidade": Shield,
    "Comprometimento": Star,
    "Ética profissional": Users
  };

  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Nossos Valores
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Os princípios que guiam nossa empresa e definem nossa cultura organizacional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => {
            const IconComponent = iconMap[value.name] || Heart;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {portableTextToPlain(value.name) || value.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {portableTextToPlain(value.description) || value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSobre;