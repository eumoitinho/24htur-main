'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Coffee } from 'lucide-react';
import { useEquipePage } from '../../utils/hooks/useSanityData';

const JoinTeamEquipe = () => {
  const { data: equipeData, loading, error } = useEquipePage();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const benefits = equipeData?.benefits || [
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Trabalhe em uma equipe unida e apoie uns aos outros."
    },
    {
      icon: Award,
      title: "Desenvolvimento Profissional",
      description: "Oportunidades de crescimento e capacitação constante."
    },
    {
      icon: Coffee,
      title: "Benefícios Únicos",
      description: "Pacote de benefícios competitivo e flexibilidade no trabalho."
    }
  ];

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
            Junte-se à Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Quer fazer parte da família 24H? Estamos sempre em busca de talentos apaixonados por turismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon || Users;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/trabalhe-conosco"
            className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            <span>Ver Vagas Disponíveis</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTeamEquipe;