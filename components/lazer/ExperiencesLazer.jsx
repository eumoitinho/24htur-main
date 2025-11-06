'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ExperiencesLazer = () => {
  const { data: lazerData } = useLazerPage();

  const defaultExperience = {
    title: 'Especialistas em proporcionar experiências memoráveis…',
    description: 'Cada viagem é uma oportunidade única de criar memórias e explorar novos horizontes. A 24H Escritório de Viagens oferece um serviço de agenciamento completo para sua viagem de lazer, cuidando de cada detalhe para que você desfrute ao máximo de seus momentos de descanso e diversão.\n\nCom uma equipe de profissionais com mais de 20 anos de expertise e uma rede extensa de fornecedores, operamos serviços personalizados no Brasil ou no exterior. Nossa missão é proporcionar uma experiência de viagem perfeita, sem preocupações, desde o momento em que você sonha com o destino até o momento em que retorna para casa com o coração cheio de boas lembranças.',
    ctaText: 'FALE AGORA COM UM ESPECIALISTA!'
  };

  const experience = lazerData?.experiences || defaultExperience;
  const title = portableTextToPlain(experience.title) || experience.title;
  const description = portableTextToPlain(experience.description) || experience.description;
  const ctaText = experience.ctaText || defaultExperience.ctaText;

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-brand-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-line">
            {description}
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesLazer;

