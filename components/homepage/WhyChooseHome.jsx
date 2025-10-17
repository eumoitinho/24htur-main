'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { HeadphonesIcon, TrendingDown, Users, User, Globe, ChartBar } from 'lucide-react';

const WhyChooseHome = () => {
  const reasons = [
    {
      icon: HeadphonesIcon,
      title: 'Disponibilidade 24/7',
      description: 'Suporte técnico permanente com atendimento especializado da própria equipe.'
    },
    {
      icon: TrendingDown,
      title: 'Negociação de tarifas',
      description: 'Condições comerciais diferenciadas através de nossa rede de fornecedores.'
    },
    {
      icon: Users,
      title: 'Expertise técnica',
      description: 'Equipe com formação superior e +20 anos de experiência no setor.'
    },
    {
      icon: User,
      title: 'Gestão personalizada',
      description: 'Atendimento dedicado com profissional especializado no seu perfil.'
    },
    {
      icon: Globe,
      title: 'Rede consolidada',
      description: 'Parcerias estratégicas com ampla rede de fornecedores nacionais e internacionais.'
    },
    {
      icon: ChartBar,
      title: 'Controle financeiro',
      description: 'Sistema de relatórios gerenciais parametrizados por centros de custos.'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Por que escolher a 24H?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 mb-4">
                  <Icon className="w-8 h-8 text-brand-dark" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHome;