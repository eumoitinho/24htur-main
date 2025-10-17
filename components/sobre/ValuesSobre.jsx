'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Star, Users } from 'lucide-react';
import { useSobrePage } from '../../utils/hooks/useSanityData';

const ValuesSobre = () => {
  const { data: sobreData, loading, error } = useSobrePage();

  const defaultValues = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete em cada viagem que organizamos."
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Transparência e honestidade em todas as nossas relações comerciais."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Buscamos sempre superar expectativas e entregar o melhor serviço."
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Construímos parcerias duradouras baseadas no respeito mútuo."
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const values = sobreData?.values || defaultValues;

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
          {values.map((value, index) => {
            const IconComponent = value.icon || Heart;
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
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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