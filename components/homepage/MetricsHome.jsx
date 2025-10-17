'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HeadphonesIcon, CheckCircle, TrendingUp } from 'lucide-react';

const MetricsHome = () => {
  const metrics = [
    {
      icon: Clock,
      value: '+20',
      label: 'anos de experiência no mercado',
    },
    {
      icon: HeadphonesIcon,
      value: '24/7',
      label: 'suporte operacional',
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: 'gestão personalizada',
    },
    {
      icon: TrendingUp,
      value: '+1000',
      label: 'operações executadas com sucesso',
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-4">
                  <Icon className="w-8 h-8 text-brand-dark" strokeWidth={1.5} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-dark mb-2">
                  {metric.value}
                </div>
                <div className="text-sm lg:text-base text-slate-600">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsHome;