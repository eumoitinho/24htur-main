'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';
import Image from 'next/image';
import HotelModalCBEnf from './modals/HotelModalCBEnf';

const AccommodationCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const hotels = Array.isArray(cbenfData?.accommodation?.hotels) && cbenfData.accommodation.hotels.length > 0
    ? cbenfData.accommodation.hotels
    : [];

  const title = portableTextToPlain(cbenfData?.accommodation?.title) || 'Hospedagem com localização estratégica';
  const subtitle = portableTextToPlain(cbenfData?.accommodation?.subtitle) || 'Selecionamos as melhores opções de hospedagem com diferentes perfis e orçamentos, todas com fácil acesso ao evento';

  if (hotels.length === 0) {
    return null;
  }

  const displayedHotels = showAll ? hotels : hotels.slice(0, 8);

  return (
    <section id="hospedagem" className="py-20 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-red-50/30 z-0"></div>
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 backdrop-blur-sm border border-red-200 rounded-full py-2 px-4 mb-4">
            <span className="text-sm font-medium text-red-700">HOSPEDAGEM ESTRATÉGICA</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            {title.includes('localização estratégica') ? (
              <>Hospedagem com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae2724] to-[#DC2626]">
                  localização estratégica
                </span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayedHotels.map((hotel, index) => (
            <motion.div
              key={hotel._key || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden transition-all duration-300 h-[28rem] group"
            >
              {/* Foto de fundo */}
              <div className="absolute inset-0 w-full h-full bg-gray-400">
                {hotel.image ? (
                  <Image
                    src={resolveImage(hotel.image, '/hotel-placeholder.jpg')}
                    alt={portableTextToPlain(hotel.name) || hotel.name || 'Hotel'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                )}
              </div>
              
              {/* Overlay gradiente - cobrindo a área do texto */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#D38E17] via-[#D38E17]/90 to-transparent"></div>
              
              {/* Badge */}
              {hotel.badge && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white font-semibold text-sm rounded-full py-2 px-4 border border-white/20 z-10">
                  {portableTextToPlain(hotel.badge) || hotel.badge}
                </div>
              )}
              
              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Glass Card com as informações */}
                <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-2xl">
                  <div className="space-y-3 text-[#B8860B]">
                    {/* Nome e localização */}
                    <div>
                      <h3 className="text-xl font-black mb-1 leading-tight drop-shadow-lg text-[#B8860B]">
                        {portableTextToPlain(hotel.name) || hotel.name}
                      </h3>
                      <div className="flex items-center text-[#B8860B] text-sm mb-2 font-semibold">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0 drop-shadow-md" />
                        <span className="drop-shadow-md">{portableTextToPlain(hotel.distance) || hotel.distance}</span>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-2xl font-black drop-shadow-lg text-[#B8860B]">
                          {portableTextToPlain(hotel.basePrice) || hotel.basePrice}
                        </div>
                        <div className="text-[#B8860B]/80 text-xs font-bold drop-shadow-md">por diária</div>
                      </div>
                    </div>

                    {/* Botão */}
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="group/button relative overflow-hidden w-full bg-[#B8860B]/20 backdrop-blur-sm hover:bg-[#B8860B] hover:text-white text-[#B8860B] font-black rounded-xl py-2.5 transition-all duration-300 flex items-center justify-center gap-2 border border-[#B8860B]/40 text-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-[#B8860B]/0 group-hover/button:bg-[#B8860B] transition-colors duration-300"></div>
                      <span className="relative z-10 drop-shadow-md">Reserve Agora</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/button:translate-x-1 transition-transform drop-shadow-md" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && hotels.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold px-8 py-3 rounded-full border-2 border-[#ae2724] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">Ver todos os {hotels.length} hotéis</span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold px-8 py-3 rounded-full border-2 border-[#ae2724] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">Ver menos</span>
            </button>
          </div>
        )}
      </div>

      {selectedHotel && (
        <HotelModalCBEnf
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </section>
  );
};

export default AccommodationCBEnf;
