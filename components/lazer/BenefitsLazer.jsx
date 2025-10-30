'use client'

import React from 'react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BenefitsLazer = () => {
  const { data: lazerData } = useLazerPage();

  const defaultBenefits = [
    {
      title: 'Planejamento Personalizado',
      description: 'Cada viagem é única, criada especialmente para atender seus desejos e necessidades.'
    },
    {
      title: 'Economia de Tempo',
      description: 'Cuidamos de toda a burocracia enquanto você foca em aproveitar sua viagem.'
    },
    {
      title: 'Melhores Tarifas',
      description: 'Acesso a tarifas exclusivas e condições especiais com nossos parceiros.'
    },
    {
      title: 'Suporte 24/7',
      description: 'Assistência completa durante toda a viagem, a qualquer hora do dia ou da noite.'
    },
    {
      title: 'Experiências Autênticas',
      description: 'Conexões com guias locais e experiências que vão além do turismo tradicional.'
    },
    {
      title: 'Segurança Garantida',
      description: 'Viaje com tranquilidade sabendo que temos tudo sob controle.'
    }
  ];

  const benefits = lazerData?.benefits && Array.isArray(lazerData.benefits) ? lazerData.benefits : defaultBenefits;

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Por que viajar com a 24H?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-brand-gold mt-1" />
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {portableTextToPlain(benefit.title) || benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {portableTextToPlain(benefit.description) || benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsLazer;