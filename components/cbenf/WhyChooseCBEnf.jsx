'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Handshake, Award, Users, Network, FileText, Star } from 'lucide-react';

const WhyChooseCBEnf = () => {
  const diferenciais = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Disponibilidade 24/7',
      description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: 'Negociação de tarifas',
      description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Expertise técnica',
      description: 'Equipe com formação superior e +20 anos de experiência no setor.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Gestão personalizada',
      description: 'Atendimento dedicado com profissional especializado no seu perfil.'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Rede consolidada',
      description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Controle financeiro',
      description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              24H
            </span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 mb-16 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-[#D38E17] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseCBEnf;