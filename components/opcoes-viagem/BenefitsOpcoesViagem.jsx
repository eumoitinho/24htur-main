'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, Headphones } from 'lucide-react';
import { useOpcoesViagemPage } from '../../utils/hooks/useSanityData';

const BenefitsOpcoesViagem = () => {
  const { data: opcoesViagemData, loading, error } = useOpcoesViagemPage();

  const defaultBenefits = [
    {
      icon: Clock,
      title: "Disponibilidade 24h",
      description: "Suporte técnico permanente com atendimento especializado da própria equipe."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Seguros de viagem e assistência completa durante todo o período."
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Parcerias com as melhores empresas do setor hoteleiro e aéreo."
    },
    {
      icon: Headphones,
      title: "Suporte Personalizado",
      description: "Atendimento dedicado com profissional especializado no seu perfil."
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const benefits = opcoesViagemData?.benefits || defaultBenefits;

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
            {opcoesViagemData?.intro?.title || 'Por que Escolher a 24H?'}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {opcoesViagemData?.intro?.description || 'Mais de 20 anos de experiência garantindo viagens perfeitas'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon || Clock;
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
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOpcoesViagem;