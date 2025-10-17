'use client'

import React from 'react';
import { Clock, DollarSign, GraduationCap, Users, Network, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Disponibilidade 24H',
      description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
    },
    {
      icon: DollarSign,
      title: 'Negociação de tarifas',
      description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
    },
    {
      icon: GraduationCap,
      title: 'Expertise técnica',
      description: 'Consultores com expertise comprovada.'
    },
    {
      icon: Users,
      title: 'Gestão personalizada',
      description: 'Atendimento dedicado com profissional especializado no seu perfil.'
    },
    {
      icon: Network,
      title: 'Rede consolidada',
      description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
    },
    {
      icon: FileText,
      title: 'Controle financeiro',
      description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-slate-50/30 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Por que escolher a{' '}
            <span className="text-brand-red">24H</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Diferenciais que fazem da 24H Escritório de Viagens a escolha ideal para sua empresa
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/50 hover:border-slate-300/70 p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-brand-red/10 rounded-bl-3xl"></div>
                
                <div className="relative">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg shadow-brand-gold/20 group-hover:shadow-xl transition-shadow duration-300">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-red transition-colors duration-300 mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-gold/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                ></motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        
      </div>
    </section>
  );
};

export default WhyChoose;