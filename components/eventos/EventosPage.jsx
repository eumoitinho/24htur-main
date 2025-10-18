'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Plane, Hotel, Car, Coffee, Building } from 'lucide-react';

const EventosPage = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, services, upcomingEvents } = data;

  const serviceIcons = {
    'Atendimento a palestrantes e congressistas': Users,
    'Emissão de passagens aéreas': Plane,
    'Reserva de hospedagem': Hotel,
    'Transportes e programação de apoio': Car,
    'Cotação e locação de salas para eventos': Building,
    'Contratação de Serviços de Alimentos e Bebidas (A&B)': Coffee,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="inicio" className="relative py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[40px] sm:rounded-[44px] lg:rounded-[50px] px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(/hero.jpg)` }}
          >
            {/* Layered overlay for readability while showing more of the photo */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[#06060a]/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/90 via-[#06060a]/60 to-[#06060a]/10" />
            </div>
      
            <div className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen">
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full opacity-25 blur-2xl bg-brand-gold"></div>
              <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full opacity-15 blur-3xl bg-brand-gold"></div>
              {/* Top-right large logo replacing decorative strokes */}
              <div className="absolute right-6 top-6 hidden md:block">
                <img
                  src="/logo.png"
                  alt="24H Escritório de Viagens"
                  width={220}
                  height={220}
                  className="w-[220px] h-[220px] object-contain opacity-90"
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-[2] max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
              >
                {title || 'VIAGENS PARA EVENTOS'}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="mt-6 text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed"
              >
                {subtitle || 'Somos especialistas em transformar a complexidade da organização de viagens para eventos em uma experiência fluida e tranquila, garantindo que palestrantes, equipes, organizadores e visitantes cheguem ao seu destino com conforto e pontualidade.'}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4 sm:mb-6">
              Nossos Serviços para Eventos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services?.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || Coffee;
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="relative rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-dark leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brand-dark/70 leading-relaxed text-base sm:text-lg">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents && upcomingEvents.length > 0 && (
        <section id="proximos-eventos" className="py-10 sm:py-12 lg:py-14 bg-brand-dark">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
                Confira as condições especiais para nossos próximos eventos:
              </h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all group hover:shadow-lg hover:border-brand-gold/40 hover:bg-white/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-4">
                        {event.preCongress && (
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-brand-gold mr-3" />
                            <div>
                              <span className="text-sm font-semibold text-brand-dark">Pré-congresso:</span>
                              <p className="text-brand-dark/80">{event.preCongress}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-brand-gold mr-3" />
                          <div>
                            <span className="text-sm font-semibold text-brand-dark">Evento principal:</span>
                            <p className="text-brand-dark/80">{event.mainEvent}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-brand-gold mr-3 mt-1" />
                          <div>
                            <span className="text-sm font-semibold text-brand-dark">Local:</span>
                            <p className="text-brand-dark/80">{event.location}</p>
                            <p className="text-brand-dark/60 text-sm">{event.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      {event.link ? (
                        <motion.a
                          href={event.link}
                          className="inline-flex items-center px-8 py-4 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold/90 transition-colors shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {event.linkText || 'SAIBA MAIS!'}
                        </motion.a>
                      ) : (
                        <div className="text-center">
                          <p className="text-brand-dark/60 mb-4">Em breve mais informações</p>
                          <div className="inline-flex items-center px-8 py-4 bg-gray-200 text-gray-500 font-semibold rounded-full cursor-not-allowed">
                            {event.linkText || 'SAIBA MAIS!'}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventosPage;
