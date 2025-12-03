'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BarChart3, Clock, Shield, ArrowRight } from 'lucide-react';

const SolucaoCorporate = () => {
  const solutions = [
    {
      icon: Monitor,
      title: 'Self-booking completo',
      description: 'Plataforma intuitiva para reservas de aéreo, hotel e carro, integrada com a curadoria de fornecedores exclusivos da 24H. Você no controle e com tarifas negociadas.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios em tempo real',
      description: 'Dashboards completos e análises de economicidade que identificam oportunidades de redução de custos. Transforme dados em economia.'
    },
    {
      icon: Clock,
      title: 'Disponibilidade 24H',
      description: 'Atendimento 24 horas por dia, 7 dias por semana, realizado por consultores reais e experientes. Em caso de emergência, você fala com um especialista, não com um robô.'
    },
    {
      icon: Shield,
      title: 'Gestão de créditos e compliance',
      description: 'Monitoramento de bilhetes e sistema de controle de compliance para que cada reserva esteja dentro da política da sua empresa. Zero desperdício, zero risco.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark">
              Nossa Solução
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Gestão de Viagens 24H:{' '}
            <span className="text-brand-red">onde a inovação encontra a experiência</span>
          </motion.h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/50 hover:border-brand-gold/30 p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red shadow-lg shadow-brand-gold/20 group-hover:shadow-xl transition-shadow duration-300">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white drop-shadow-sm" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-300 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                </div>

                {/* Hover border */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-gold/20 transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucaoCorporate;
