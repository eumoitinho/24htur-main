'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HeadphonesIcon, CheckCircle, TrendingUp } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const MetricsLazer = () => {
  const { data: lazerData } = useLazerPage();

  const iconMap = {
    'anos de experiência no mercado': Clock,
    'anos de experiência': Clock,
    'suporte operacional': HeadphonesIcon,
    'gestão personalizada': CheckCircle,
    'operações executadas com sucesso': TrendingUp,
    'operações executadas': TrendingUp
  };

  const defaultMetrics = [
    { value: '+20 anos de experiência no mercado' },
    { value: '24/7 suporte operacional' },
    { value: '100% gestão personalizada' },
    { value: '+1000 operações executadas com sucesso' }
  ];

  // Garante que sempre seja um array
  const metrics = Array.isArray(lazerData?.metrics) && lazerData.metrics.length > 0
    ? lazerData.metrics
    : defaultMetrics;

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const value = metric.value || metric;
            const labelLower = value?.toLowerCase() || '';
            const matchedIcon = Object.keys(iconMap).find(key => 
              labelLower.includes(key.toLowerCase()) || key.toLowerCase().includes(labelLower)
            );
            const Icon = matchedIcon ? iconMap[matchedIcon] : Clock;
            
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
                <div className="text-sm lg:text-base text-slate-600">
                  {typeof value === 'string' ? value : portableTextToPlain(value)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsLazer;

