'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYouContent = () => {
  return (
    <section className="py-20 min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-brand-dark mb-4">
            Obrigado!
          </h1>

          <p className="text-lg text-brand-dark/80 leading-relaxed">
            Recebemos sua solicitação. Em breve entraremos em contato para
            iniciarmos o planejamento da sua viagem perfeita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-semibold text-brand-dark mb-4">
            O que acontece agora?
          </h2>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold text-white text-sm flex items-center justify-center font-bold mt-0.5">1</div>
              <p className="text-sm text-slate-600">Nossa equipe analisará sua solicitação</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold text-white text-sm flex items-center justify-center font-bold mt-0.5">2</div>
              <p className="text-sm text-slate-600">Entraremos em contato em até 24 horas</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-gold text-white text-sm flex items-center justify-center font-bold mt-0.5">3</div>
              <p className="text-sm text-slate-600">Criaremos uma proposta personalizada para você</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <a className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-gold transition-colors duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao início
            </a>
          </Link>

          <Link href="/corporate">
            <a className="text-brand-gold font-semibold hover:text-brand-dark transition-colors duration-300">
              Conhecer nossos serviços
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouContent;