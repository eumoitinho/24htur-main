'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Shield, DollarSign, Heart, Check } from 'lucide-react';

const PagamentoCBEnf = () => {
  const handleSolicitarCotacao = () => {
    const formSection = document.getElementById('formulario-contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            CONDIÇÕES ESPECIAIS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Conheça nossas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              formas de pagamento
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Card Hospedagem e Passeios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#D38E17] to-[#F59E0B] p-6 text-white">
              <CreditCard className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold">Hospedagem e Passeios</h3>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-[#D38E17] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">1 vez</h4>
                    <p className="text-gray-600">via boleto bancário ou Pix</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">5 vezes</h4>
                    <p className="text-gray-600">via Pix (parcelas mensais e quitação antes do check-in)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-[#D38E17] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Até 10 vezes</h4>
                    <p className="text-gray-600">via cartão de crédito (nesta modalidade, o valor pode sofrer alteração)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-[#D38E17] rounded">
                <p className="text-sm text-amber-900">
                  O não pagamento na data estipulada, acarretará no cancelamento automático da reserva*
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Seguro Viagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#D38E17] to-[#F59E0B] p-6 text-white">
              <Heart className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold">Seguro Viagem</h3>
              <p className="text-white/90">Período: 23 a 26 de novembro</p>
            </div>
            <div className="p-8">
              <h4 className="font-bold text-gray-900 mb-4">Plano Nacional 60.000</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#D38E17]" />
                  <div className="flex-1">
                    <span className="text-gray-600">Até 64 anos:</span>
                    <strong className="text-gray-900 ml-2">R$ 41,80</strong> por pessoa
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#F59E0B]" />
                  <div className="flex-1">
                    <span className="text-gray-600">65 até 85 anos:</span>
                    <strong className="text-gray-900 ml-2">R$ 62,70</strong> por pessoa
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#D38E17]" />
                  <div className="flex-1">
                    <span className="text-gray-600">86 até 89 anos:</span>
                    <strong className="text-gray-900 ml-2">R$ 125,40</strong> por pessoa
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                *Consulte valores para períodos menores ou maiores!
              </p>

              <div className="pt-4 border-t">
                <h5 className="font-semibold text-gray-900 mb-3">Formas de pagamento para Seguro Viagem:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D38E17]" />
                    1 vez via boleto bancário ou Pix
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F59E0B]" />
                    5 vezes via pix (parcelas mensais e quitação antes do check-in)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D38E17]" />
                    Consulte o parcelamento no cartão de crédito
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleSolicitarCotacao}
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">SOLICITAR COTAÇÃO</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PagamentoCBEnf;