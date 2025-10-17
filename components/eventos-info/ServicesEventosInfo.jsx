'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plane, Building, Car, Camera, Utensils, Music } from 'lucide-react';
import { useEventosInfoPage } from '../../utils/hooks/useSanityData';

const ServicesEventosInfo = () => {
  const { data: eventosInfoData, loading, error } = useEventosInfoPage();

  const defaultServices = [
    {
      icon: Plane,
      title: "Transporte e Hospedagem",
      description: "Aéreo, terrestre e acomodações em hotéis de qualidade"
    },
    {
      icon: Building,
      title: "Locais e Espaços",
      description: "Seleção de venues perfeitos para cada tipo de evento"
    },
    {
      icon: Car,
      title: "Traslados e Transfers",
      description: "Logística completa de deslocamento dos participantes"
    },
    {
      icon: Camera,
      title: "Cobertura do Evento",
      description: "Fotografia e filmagem profissional do seu evento"
    },
    {
      icon: Utensils,
      title: "Gastronomia",
      description: "Coffee breaks, almoços e jantares especializados"
    },
    {
      icon: Music,
      title: "Entretenimento",
      description: "Shows, apresentações e atividades de integração"
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const services = eventosInfoData?.services || defaultServices;

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
            Serviços Completos
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tudo que você precisa para um evento corporativo de sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon || Check;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesEventosInfo;