'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Calendar, Users, Plane, MapPin } from 'lucide-react';
import { useOpcoesViagemPage } from '../../utils/hooks/useSanityData';

const TravelOptionsOpcoesViagem = () => {
  const { data: opcoesViagemData, loading, error } = useOpcoesViagemPage();

  const defaultOptions = [
    {
      icon: Briefcase,
      title: "Viagens Corporativas",
      description: "Soluções completas para empresas, incluindo hospedagem, transporte e gestão de despesas.",
      features: ["Relatórios gerenciais", "Política de viagens", "Suporte 24h"]
    },
    {
      icon: Heart,
      title: "Viagens de Lazer",
      description: "Roteiros personalizados para momentos especiais, lua de mel, férias em família.",
      features: ["Roteiros personalizados", "Experiências únicas", "Suporte especializado"]
    },
    {
      icon: Calendar,
      title: "Eventos e Convenções",
      description: "Organização completa de eventos corporativos, convenções e seminários.",
      features: ["Gestão completa", "Locais especiais", "Logística integrada"]
    },
    {
      icon: Users,
      title: "Turismo de Incentivo",
      description: "Viagens motivacionais para equipes e premiações empresariais.",
      features: ["Programas motivacionais", "Atividades especiais", "ROI comprovado"]
    },
    {
      icon: Plane,
      title: "Viagens Internacionais",
      description: "Experiências globais com toda a documentação e suporte necessário.",
      features: ["Assessoria de vistos", "Câmbio facilitado", "Seguro viagem"]
    },
    {
      icon: MapPin,
      title: "Destinos Nacionais",
      description: "Explore as belezas do Brasil com roteiros exclusivos e experiências autênticas.",
      features: ["Destinos únicos", "Cultura local", "Guias especializados"]
    }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  const options = opcoesViagemData?.options || defaultOptions;

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
            Explore Nossas Opções
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para todos os tipos de viagem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => {
            const IconComponent = option.icon || Briefcase;
            return (
              <motion.div
                key={index}
                className="bg-brand-beige rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
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
                  {option.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <ul className="space-y-2">
                  {option.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelOptionsOpcoesViagem;