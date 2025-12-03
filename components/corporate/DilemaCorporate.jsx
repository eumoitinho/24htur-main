'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, AlertTriangle, DollarSign, AlertCircle, Check } from 'lucide-react';

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
    <section className="py-14 sm:py-16 lg:py-18 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-[14px] font-semibold uppercase tracking-[0.09em] text-brand-dark">
              O Dilema
            </span>
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            O dilema que sua empresa{' '}
            <span className="text-brand-red">não precisa mais enfrentar</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Você já se viu tendo que escolher entre a eficiência fria da tecnologia e o atendimento lento das agências tradicionais? 
            A <strong className="text-brand-dark">24H</strong> elimina essa preocupação, solucionando os principais pontos que mais consomem seu tempo e seu dinheiro:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-12 space-y-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-slate-50/50 border border-slate-200/50 hover:border-slate-300/70 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative px-8 py-6 sm:px-10 sm:py-8 flex items-start gap-6">
                  <motion.div 
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg shadow-brand-gold/20 group-hover:shadow-xl transition-shadow duration-300">
                      <div className="absolute inset-2 rounded-xl bg-white/20 backdrop-blur-sm">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-brand-dark flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-white">{problem.number}</span>
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{problem.description}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="hidden sm:inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200"
                  >
                    <Check className="h-5 w-5 text-emerald-600" strokeWidth={2} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DilemaCorporate;
