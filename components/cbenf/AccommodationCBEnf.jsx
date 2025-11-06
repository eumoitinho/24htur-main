'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';
import Image from 'next/image';

const AccommodationCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const hotels = Array.isArray(cbenfData?.accommodation?.hotels) && cbenfData.accommodation.hotels.length > 0
    ? cbenfData.accommodation.hotels
    : [];

  const title = portableTextToPlain(cbenfData?.accommodation?.title) || 'Hotéis Selecionados';
  const subtitle = portableTextToPlain(cbenfData?.accommodation?.subtitle) || 'Hotéis estrategicamente localizados próximos ao evento, com tarifas especiais para congressistas.';

  if (hotels.length === 0) {
    return null; // Não renderiza se não houver hotéis
  }

  return (
    <section id="hospedagem" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2 ring-1 ring-brand-gold/20">
              <div className="h-2 w-2 rounded-full bg-brand-gold"></div>
              <span className="text-sm font-semibold text-brand-gold uppercase tracking-wide">Hospedagem</span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel._key || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-xl hover:ring-slate-200 hover:-translate-y-1"
            >
              {hotel.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={resolveImage(hotel.image, '/hotel-placeholder.jpg')}
                    alt={hotel.name || 'Hotel'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {hotel.badge && (
                    <div className="absolute top-4 right-4 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-white">
                      {hotel.badge}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {portableTextToPlain(hotel.name) || hotel.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  <span>{portableTextToPlain(hotel.distance) || hotel.distance}</span>
                </div>

                {hotel.details && Array.isArray(hotel.details) && hotel.details.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {hotel.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span>{portableTextToPlain(detail) || detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-2xl font-bold text-brand-gold">
                    {portableTextToPlain(hotel.basePrice) || hotel.basePrice}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">por noite</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationCBEnf;

