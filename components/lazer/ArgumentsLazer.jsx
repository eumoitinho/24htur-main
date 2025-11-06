'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingDown, Filter, Clock, Shield, FileText } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ArgumentsLazer = () => {
  const { data: lazerData } = useLazerPage();

  const iconMap = {
    'Roteiros genéricos?': Map,
    'Preocupação com o orçamento?': TrendingDown,
    'Excesso de opções?': Filter,
    'Falta de tempo para planejar?': Clock,
    'Medo de imprevistos?': Shield,
    'Burocracia e documentação?': FileText
  };

  const defaultArguments = [
    {
      question: 'Roteiros genéricos?',
      answer: 'Criamos roteiros personalizados que se encaixam no seu perfil e refletem seus interesses, ritmo e estilo.'
    },
    {
      question: 'Preocupação com o orçamento?',
      answer: 'Planejamos sua viagem para caber dentro do seu orçamento, buscando as melhores tarifas e prevenindo gastos inesperados.'
    },
    {
      question: 'Excesso de opções?',
      answer: 'Facilitamos sua decisão, filtrando o excesso de informações e encontrando o que combina com seu perfil.'
    },
    {
      question: 'Falta de tempo para planejar?',
      answer: 'Cuidamos de todo o planejamento para que você só precise se preocupar em fazer as malas.'
    },
    {
      question: 'Medo de imprevistos?',
      answer: 'Nosso suporte acompanha você durante toda a viagem, solucionando problemas e garantindo que tudo saia como planejado.'
    },
    {
      question: 'Burocracia e documentação?',
      answer: 'Vistos, seguros, vacinas… Orientamos e cuidamos de cada detalhe para que sua documentação esteja em dia.'
    }
  ];

  // Garante que sempre seja um array
  const argumentsData = Array.isArray(lazerData?.arguments?.items)
    ? lazerData.arguments.items
    : (lazerData?.arguments && !Array.isArray(lazerData.arguments) && lazerData.arguments.items)
      ? lazerData.arguments.items
      : defaultArguments;

  const title = lazerData?.arguments?.title || 'Mais segurança para sua viagem dos sonhos';

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {portableTextToPlain(title) || title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {argumentsData.map((arg, index) => {
            const question = arg.question || arg.title;
            const answer = arg.answer || arg.description;
            const Icon = iconMap[question] || Map;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 group-hover:from-brand-gold/30 group-hover:to-brand-gold/20 transition-all duration-300">
                      <Icon className="h-6 w-6 text-brand-dark" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {portableTextToPlain(question) || question}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {portableTextToPlain(answer) || answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArgumentsLazer;

