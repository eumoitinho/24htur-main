'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';
import Image from 'next/image';
import TourModalCBEnf from './modals/TourModalCBEnf';

const ToursCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();
  const [selectedTour, setSelectedTour] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const tours = cbenfData?.tours || {};
  const title = portableTextToPlain(tours.title) || 'Aproveite sua estadia para conhecer o melhor de Porto Alegre e região com nossos tours privativos.';
  const info = Array.isArray(tours.info) ? tours.info : [];
  const tourItems = Array.isArray(tours.items) ? tours.items : [];
  const displayedTours = showAll ? tourItems : tourItems.slice(0, 6);

  if (tourItems.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D38E17] font-semibold text-sm uppercase tracking-wider">
            Passeios exclusivos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            {title.includes('Porto Alegre e região') ? (
              <>Aproveite sua estadia para conhecer o melhor de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
                  Porto Alegre e região
                </span>{' '}
                com nossos tours privativos.
              </>
            ) : (
              title
            )}
          </h2>
        </motion.div>

        {/* Informações importantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 border border-gray-200"
        >
          <div className="space-y-3 text-gray-700">
            {info.length > 0 ? (
              info.map((item, index) => (
                <p key={index} className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>{portableTextToPlain(item) || item}</span>
                </p>
              ))
            ) : (
              <>
                <p className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>Experiências privativas com mínimo de duas pessoas.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>Veículos compatíveis com número de passageiros.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>City tours incluem parques, igrejas, museus, centros culturais e pontos turísticos (acesso gratuito).</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>Menores devem estar acompanhados de pais ou responsável.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#D38E17] mt-1">•</span>
                  <span>Cafés e restaurantes podem ser substituídos por equivalentes em caso de fechamento permanente ou temporário da casa.</span>
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* Passeios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedTours.map((tour, index) => (
            <motion.div
              key={tour._key || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                {tour.image ? (
                  <Image
                    src={resolveImage(tour.image, '/placeholder.jpg')}
                    alt={portableTextToPlain(tour.name) || tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                )}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D38E17] via-[#F59E0B] to-[#D38E17] backdrop-blur-md border border-amber-300/50 px-4 py-2 rounded-full text-white shadow-2xl">
                  <span className="text-xl font-black drop-shadow-lg">{tour.price || 'R$ 0,00'}</span>
                  <span className="text-xs block font-bold drop-shadow-md">{tour.priceDetail || 'por pessoa'}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {portableTextToPlain(tour.name) || tour.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {portableTextToPlain(tour.description) || tour.description}
                </p>
                {tour.minimum && (
                  <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {portableTextToPlain(tour.minimum) || tour.minimum}
                  </p>
                )}

                <button
                  onClick={() => setSelectedTour(tour)}
                  className="group relative overflow-hidden w-full bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  <span className="relative z-10">RESERVAR PASSEIO</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver mais/menos */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white border-2 border-[#D38E17] font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">{showAll ? 'Ver menos' : `Ver todos os ${tourItems.length} passeios`}</span>
          </button>
        </div>
      </div>

      {selectedTour && (
        <TourModalCBEnf
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </section>
  );
};

export default ToursCBEnf;
