'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutHome = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-brand-beige to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[14px] font-semibold uppercase tracking-[0.09em] text-brand-dark">
                SOBRE A 24H
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              Mais de duas décadas especializados em gestão de viagens
            </h2>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                A 24H Escritório de Viagens é uma agência especializada em viagens corporativas,
                de lazer, turismo de incentivo e eventos. Com mais de 20 anos de experiência no
                mercado, nossa equipe atua com excelência na gestão de viagens nacionais e
                internacionais, oferecendo soluções completas e personalizadas para empresas,
                famílias e clientes individuais.
              </p>

              <p className="leading-relaxed">
                Cuidamos de todas as etapas da viagem, desde a cotação até a emissão de passagens,
                reservas de hotéis, traslados, câmbio, seguros, vistos, locação de veículos,
                roteiros turísticos e ingressos. Trabalhamos com uma ampla rede de fornecedores e
                parceiros nos setores aéreo, hoteleiro e de turismo, garantindo agilidade, economia
                e segurança em cada atendimento.
              </p>

              <p className="leading-relaxed">
                Nosso compromisso é oferecer uma experiência de viagem tranquila, eficiente e sem
                imprevistos, com suporte disponível 24 horas por dia, 7 dias por semana.
              </p>
            </div>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
            >
              FALE COM UM ESPECIALISTA!
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">3</div>
                <p className="text-sm text-slate-600">Escritórios no Brasil</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">+20</div>
                <p className="text-sm text-slate-600">Anos de experiência</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">24/7</div>
                <p className="text-sm text-slate-600">Suporte dedicado</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-dark mb-2">100%</div>
                <p className="text-sm text-slate-600">Gestão personalizada</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;