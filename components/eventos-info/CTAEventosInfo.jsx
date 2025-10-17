'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useEventosInfoPage } from '../../utils/hooks/useSanityData';

const CTAEventosInfo = () => {
  const { data: eventosInfoData, loading, error } = useEventosInfoPage();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {eventosInfoData?.cta?.title || "Pronto para Criar um Evento Inesquecível?"}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {eventosInfoData?.cta?.description || `Nossa equipe de especialistas está pronta para transformar sua visão
            em realidade. Vamos conversar sobre seu próximo evento?`}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:(51) 3516-0098"
            className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>(51) 3516-0098</span>
          </a>

          <a
            href="mailto:contato@24h.tur.br"
            className="inline-flex items-center space-x-2 border-2 border-white hover:bg-white hover:text-brand-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>contato@24h.tur.br</span>
          </a>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70">
            Atendimento especializado de segunda a sexta, das 8h às 18h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAEventosInfo;