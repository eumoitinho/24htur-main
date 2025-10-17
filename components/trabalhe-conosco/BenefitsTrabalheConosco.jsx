'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Users, Coffee, Award, MapPin } from 'lucide-react';
import { useTrabalheConoscoPage } from '../../utils/hooks/useSanityData';

const BenefitsTrabalheConosco = () => {
  const { data: trabalheConoscoData, loading, error } = useTrabalheConoscoPage();

  const defaultBenefits = [
    {
      icon: Heart,
      title: "Ambiente Acolhedor",
      description: "Cultura organizacional baseada no respeito e colaboração entre equipes."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Oportunidades reais de desenvolvimento e progressão na carreira."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Trabalhe ao lado de profissionais experientes e apaixonados por turismo."
    },
    {
      icon: Coffee,
      title: "Flexibilidade",
      description: "Horários flexíveis e possibilidade de trabalho híbrido quando aplicável."
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Meritocracia e reconhecimento por performance e dedicação."
    },
    {
      icon: MapPin,
      title: "Experiências Únicas",
      description: "Oportunidade de conhecer destinos e participar de viagens educativas."
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const benefits = trabalheConoscoData?.benefits || defaultBenefits;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Por que Trabalhar na 24H?
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos um ambiente de trabalho estimulante onde você pode crescer profissionalmente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon || Heart;
            return (
              <motion.div
                key={index}
                className="bg-brand-beige rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
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

export default BenefitsTrabalheConosco;