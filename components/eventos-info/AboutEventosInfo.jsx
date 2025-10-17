'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Target, Award } from 'lucide-react';
import { useEventosInfoPage } from '../../utils/hooks/useSanityData';

const AboutEventosInfo = () => {
  const { data: eventosInfoData, loading, error } = useEventosInfoPage();

  const defaultFeatures = [
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Convenções, seminários e confraternizações empresariais"
    },
    {
      icon: Calendar,
      title: "Gestão Completa",
      description: "Do planejamento à execução, cuidamos de todos os detalhes"
    },
    {
      icon: Target,
      title: "Objetivos Alcançados",
      description: "Focamos nos resultados que sua empresa precisa atingir"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 20 anos organizando eventos de sucesso"
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const features = eventosInfoData?.features || defaultFeatures;

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
            {eventosInfoData?.about?.title || "Eventos que Marcam"}
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {eventosInfoData?.about?.description || `Criamos eventos corporativos memoráveis que conectam pessoas,
            fortalecem relacionamentos e geram resultados concretos para sua empresa.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon || Users;
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
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutEventosInfo;