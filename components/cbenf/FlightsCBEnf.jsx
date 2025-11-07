'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';
import Image from 'next/image';

const FlightsCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const handleCotacao = () => {
    const formSection = document.getElementById('contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const flights = cbenfData?.flights || {};
  const title = portableTextToPlain(flights.title) || 'Passagens aéreas com os melhores preços';
  const description = portableTextToPlain(flights.description) || 'Trabalhamos com todas as companhias aéreas nacionais e internacionais. Nossa expertise garante os melhores preços e horários para sua viagem.';
  const benefits = Array.isArray(flights.benefits) ? flights.benefits : [];
  const note = flights.note || '* O parcelamento no cartão de crédito depende das regras de cada companhia.';
  const ctaText = flights.ctaText || 'SOLICITAR COTAÇÃO!';

  return (
    <section className="py-20 relative bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-amber-50/30 z-0"></div>
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 backdrop-blur-sm border border-red-200 rounded-full py-2 px-4 mb-6">
              <Plane className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">PASSAGENS AÉREAS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {title.includes('melhores preços') ? (
                <>Passagens aéreas com os{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae2724] to-[#DC2626]">
                    melhores preços
                  </span>
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {description}
            </p>

            {benefits.length > 0 && (
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`border-l-4 ${index === 0 ? 'border-[#ae2724]' : 'border-[#D38E17]'} pl-6 py-2`}>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                      {portableTextToPlain(benefit.title) || benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {portableTextToPlain(benefit.description) || benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {note && (
              <p className="text-sm text-gray-500 mb-6">
                {note}
              </p>
            )}

            <button
              onClick={handleCotacao}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 aspect-square flex items-center justify-center">
              {flights.image ? (
                <Image
                  src={resolveImage(flights.image, '/aero.avif')}
                  alt="Imagem de Passagens Aéreas"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <img src="/aero.avif" alt="Imagem de Passagens Aéreas" className="w-full h-full object-cover rounded-3xl" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlightsCBEnf;

