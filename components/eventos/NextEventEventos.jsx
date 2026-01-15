'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useEventosPage, useEventPages } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const NextEventEventos = () => {
  const { data: eventosData } = useEventosPage();
  const { data: eventPages } = useEventPages();

  // Garante que sempre seja um array
  const upcomingEvents = Array.isArray(eventosData?.upcomingEvents?.events)
    ? eventosData.upcomingEvents.events
    : (eventosData?.upcomingEvents && !Array.isArray(eventosData.upcomingEvents) && eventosData.upcomingEvents.events)
      ? eventosData.upcomingEvents.events
      : [];

  const sectionTitle = eventosData?.upcomingEvents?.title || 'Confira as condições especiais para nossos próximos eventos:';

  const activeEvents = Array.isArray(eventPages) ? eventPages : [];

  const events = activeEvents.length > 0 ? activeEvents : upcomingEvents.length > 0 ? upcomingEvents : [{
    name: '75º Congresso Brasileiro de Enfermagem - Porto Alegre/RS',
    preCongress: '22 e 23 de novembro',
    mainEvent: '23 a 26 de novembro de 2025',
    location: 'Campus da PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
    address: 'Bairro Partenon - Zona Leste de Porto Alegre',
    link: '/eventos/cbenf',
    linkText: 'SAIBA MAIS!'
  }];

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
            {portableTextToPlain(sectionTitle) || sectionTitle}
          </h2>

          <div className="grid gap-8">
            {events.map((event, index) => {
              const eventCard = event.card || {};
              const eventName = eventCard.name || event.hero?.eventName || event.name || event.title || '';
              const preCongress = eventCard.preCongress || event.hero?.preCongressDates || event.preCongress || '';
              const mainEvent = eventCard.mainEvent || event.hero?.mainEventDates || event.mainEvent || '';
              const location = eventCard.location || event.hero?.location || event.location || '';
              const address = eventCard.address || event.about?.locationDescription || event.address || '';
              const link = event.slug?.current ? `/eventos/${event.slug.current}` : event.link || '/eventos/cbenf';
              const linkText = eventCard.linkText || event.linkText || 'SAIBA MAIS!';
              
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{portableTextToPlain(eventName) || eventName}</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Datas:</h4>
                      {preCongress && (
                        <p className="text-gray-700">Pré-congresso: {portableTextToPlain(preCongress) || preCongress}</p>
                      )}
                      {mainEvent && (
                        <p className="text-gray-700">Evento principal: {portableTextToPlain(mainEvent) || mainEvent}</p>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Local:</h4>
                      {location && (
                        <p className="text-gray-700">{portableTextToPlain(location) || location}</p>
                      )}
                      {address && (
                        <p className="text-gray-700">Endereço: {portableTextToPlain(address) || address}</p>
                      )}
                    </div>
                  </div>

                  <div className="text-center">
                    <Link href={link}>
                      <button className="group relative overflow-hidden bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                        <span className="relative z-10">{linkText}</span>
                        <ExternalLink className="w-5 h-5 relative z-10" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextEventEventos;
