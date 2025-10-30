'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const CTALazer = () => {
  const { data: lazerData } = useLazerPage();

  const cta = lazerData?.cta || {
    title: 'Pronto para viver a viagem dos seus sonhos?',
    description: 'Entre em contato e deixe nossos especialistas criarem o roteiro perfeito para você.\nTransformamos seus planos em experiências inesquecíveis.',
    buttonText: 'COMECE A PLANEJAR'
  };

  const title = portableTextToPlain(cta.title) || cta.title;
  const description = portableTextToPlain(cta.description) || cta.description;
  const buttonText = lazerData?.cta?.buttonText || cta.buttonText;

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-brand-beige to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 mb-8" style={{ whiteSpace: 'pre-line' }}>
            {description}
          </p>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTALazer;