'use client'

import React from 'react';
import { Award, Headset, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Metrics = () => {
  const metrics = [
    {
      icon: Award,
      title: 'Experiência consolidada',
      description: '',
    },
    {
      icon: Headset,
      title: '24/7 suporte operacional',
      description: '',
    },
    {
      icon: SlidersHorizontal,
      title: '100% gestão personalizada',
      description: '',
    },
    {
      icon: CheckCircle2,
      title: '+1000 operações executadas com sucesso',
      description: '',
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-7 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red opacity-90 group-hover:opacity-100 transition-opacity shadow ring-1 ring-brand-gold/40 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-gold/30 via-transparent to-brand-red/40 blur-sm pointer-events-none" />
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-tight text-brand-dark leading-snug group-hover:text-brand-red transition-colors">
                  {metric.title}
                </h3>
                {metric.description && (
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors">
                    {metric.description}
                  </p>
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-brand-gold/30 pointer-events-none" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;