'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const NextEventEventos = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Confira as condições especiais para nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              próximos eventos
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Datas:</h4>
                <p className="text-gray-700">Pré-congresso: 22 e 23 de novembro</p>
                <p className="text-gray-700">Evento principal: 23 a 26 de novembro de 2025</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local:</h4>
                <p className="text-gray-700">Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul</p>
                <p className="text-gray-700">Endereço: Bairro Partenon - Zona Leste de Porto Alegre</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/eventos/cbenf">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  <span className="relative z-10">SAIBA MAIS!</span>
                  <ExternalLink className="w-5 h-5 relative z-10" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextEventEventos;