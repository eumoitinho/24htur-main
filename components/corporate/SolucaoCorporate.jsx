'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, BarChart3, Clock, Shield, Sparkles, Check } from 'lucide-react';

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
    <section id="solucao" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-[14px] font-semibold uppercase tracking-[0.09em] text-brand-dark">
              Nossa Solução
            </span>
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Gestão de Viagens 24H:{' '}
            <span className="text-brand-red">onde a inovação encontra a experiência</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="mt-12 space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
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
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-brand-red transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed text-lg">{solution.description}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className="hidden sm:inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/30"
                  >
                    <Check className="h-5 w-5 text-brand-gold" strokeWidth={2} />
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

export default SolucaoCorporate;
