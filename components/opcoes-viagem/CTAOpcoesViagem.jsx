'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useOpcoesViagemPage } from '../../utils/hooks/useSanityData';

const CTAOpcoesViagem = () => {
  const { data: opcoesViagemData, loading, error } = useOpcoesViagemPage();

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
            {opcoesViagemData?.cta?.title || "Pronto para Sua Próxima Viagem?"}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {opcoesViagemData?.cta?.description || `Entre em contato conosco e descubra como podemos transformar
            seus planos de viagem em experiências inesquecíveis.`}
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
            href="/corporate"
            className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            <span>Viagens Corporativas</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="/lazer"
            className="inline-flex items-center space-x-2 border-2 border-white hover:bg-white hover:text-brand-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            <span>Viagens de Lazer</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 mb-4">Ou fale diretamente conosco:</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="tel:(51) 3516-0098" className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold/80">
              <Phone className="w-5 h-5" />
              <span>(51) 3516-0098</span>
            </a>
            <a href="mailto:contato@24h.tur.br" className="flex items-center space-x-2 text-brand-gold hover:text-brand-gold/80">
              <Mail className="w-5 h-5" />
              <span>contato@24h.tur.br</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAOpcoesViagem;