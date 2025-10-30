'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, AlertCircle, FileText, Map, Globe } from 'lucide-react';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';


const ProblemsSection = () => {
  const { data: homepageData } = useHomepage();

  const defaultProblems = [
    {
      icon: Clock,
      title: 'Sem tempo para planejar?',
      description: 'Nossa equipe especializada cuida de cada etapa da sua viagem, enquanto você foca no que realmente importa.'
    },
    {
      icon: TrendingDown,
      title: 'Gastos fora de controle?',
      description: 'Reduza custos com nossas tarifas corporativas e parcerias estratégicas com fornecedores do setor de turismo.'
    },
    {
      icon: AlertCircle,
      title: 'Problemas no meio da viagem?',
      description: 'Nossa equipe está disponível 24 horas por dia, pronta para resolver qualquer imprevisto durante a sua viagem.'
    },
    {
      icon: FileText,
      title: 'Burocracia em excesso?',
      description: 'Oferecemos um sistema integrado para facilitar processos como reembolsos, solicitações e aprovações, com fluxos 100% digitais.'
    },
    {
      icon: Map,
      title: 'Roteiros genéricos?',
      description: 'Personalizamos roteiros, passeios e experiências para garantir que cada viagem seja única, agradável e memorável.'
    },
    {
      icon: Globe,
      title: 'Desafios no exterior?',
      description: 'Auxiliamos no processo de compra de moeda estrangeira e aquisição de cartão de débito e chip internacional.'
    }
  ];

  const problems = homepageData?.problems || defaultProblems;

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            {portableTextToPlain(homepageData?.problems?.title) || 'Descomplique sua rotina de viagens com quem entende do assunto'}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
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
                      {portableTextToPlain(problem.title) || problem.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {portableTextToPlain(problem.description) || problem.description}
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

export default ProblemsSection;