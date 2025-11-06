'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Shield, Clock } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const WhyChooseCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const defaultBenefits = [
    "Experiência de 15+ anos organizando viagens para eventos científicos",
    "Parcerias exclusivas com hotéis próximos ao convention center",
    "Tarifas especiais negociadas diretamente com companhias aéreas",
    "Equipe especializada em turismo científico e de saúde",
    "Suporte presencial durante todo o evento em Goiânia",
    "Flexibilidade para personalizar seu pacote conforme necessidade"
  ];

  const defaultStats = [
    {
      icon: Users,
      number: "2.500+",
      text: "Congressistas atendidos em eventos anteriores"
    },
    {
      icon: Award,
      number: "15+",
      text: "Anos organizando viagens científicas"
    },
    {
      icon: Shield,
      number: "100%",
      text: "Satisfação garantida"
    },
    {
      icon: Clock,
      number: "24/7",
      text: "Suporte durante o evento"
    }
  ];

  const benefits = Array.isArray(cbenfData?.whyChoose?.benefits) && cbenfData.whyChoose.benefits.length > 0
    ? cbenfData.whyChoose.benefits
    : defaultBenefits;

  const stats = Array.isArray(cbenfData?.whyChoose?.stats) && cbenfData.whyChoose.stats.length > 0
    ? cbenfData.whyChoose.stats.map(stat => ({
        ...stat,
        icon: stat.number?.includes('2.500') ? Users : 
              stat.number?.includes('15') ? Award :
              stat.number?.includes('100') ? Shield : Clock
      }))
    : defaultStats;

  const title = portableTextToPlain(cbenfData?.whyChoose?.title) || 'Especialistas em turismo científico';
  const description = portableTextToPlain(cbenfData?.whyChoose?.description) || 'Somos referência na organização de viagens para eventos científicos e congressos médicos. Nossa experiência garante que você chegue descansado, hospedado no melhor local e pronto para aproveitar cada momento do CBEnf 2024.';

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 ring-1 ring-brand-gold/20">
                <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
                <span className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Por que escolher a 24H</span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                {title.includes('turismo científico') ? (
                  <>Especialistas em <span className="text-brand-gold">turismo científico</span></>
                ) : (
                  title
                )}
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-slate-700 leading-relaxed">{portableTextToPlain(benefit) || benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-100 hover:ring-slate-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10 ring-1 ring-brand-gold/20">
                    <stat.icon className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600 leading-tight">{stat.text}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent p-6 ring-1 ring-brand-gold/20"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 text-brand-gold">
                    ⭐
                  </div>
                ))}
              </div>
              <p className="text-slate-700 italic mb-3 leading-relaxed">
                &ldquo;A 24H organizou nossa viagem para o último congresso de cardiologia. Tudo perfeito! Desde o translado até a localização do hotel. Recomendo para qualquer evento científico.&rdquo;
              </p>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Dra. Marina Silva</div>
                <div className="text-slate-600">Enfermeira Coordenadora - Hospital das Clínicas</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCBEnf;