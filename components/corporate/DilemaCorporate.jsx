'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, AlertTriangle, DollarSign } from 'lucide-react';

const DilemaCorporate = () => {
  const problems = [
    {
      icon: FileText,
      number: '1',
      title: 'Burocracia e descontrole',
      description: 'Simplificamos suas reservas com uma plataforma Self-Booking intuitiva, garantindo que suas políticas de viagem sejam sempre respeitadas.'
    },
    {
      icon: Eye,
      number: '2',
      title: 'Falta de visão e transparência',
      description: 'Disponibilizamos relatórios de Business Intelligence (BI), parametrizados por centro de custo, para guiar suas decisões.'
    },
    {
      icon: AlertTriangle,
      number: '3',
      title: 'Imprevistos e emergências',
      description: 'Garantimos suporte humano 24/7 para amparar sua viagem diante de qualquer situação. Conte com segurança e tranquilidade durante a viagem.'
    },
    {
      icon: DollarSign,
      number: '4',
      title: 'Custo elevado e inesperado',
      description: 'Analisamos seu orçamento e oferecemos condições comerciais diferenciadas através de nossa rede de fornecedores exclusiva.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            O dilema que sua empresa{' '}
            <span className="text-brand-red">não precisa mais enfrentar</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Você já se viu tendo que escolher entre a eficiência fria da tecnologia e o atendimento lento das agências tradicionais? 
            A <strong className="text-brand-dark">24H</strong> elimina essa preocupação, solucionando os principais pontos que mais consomem seu tempo e seu dinheiro:
          </motion.p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 p-8 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-500"
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-gold">{problem.number}</span>
                </div>

                {/* Icon */}
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-red transition-colors">
                  {problem.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {problem.description}
                </p>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DilemaCorporate;
