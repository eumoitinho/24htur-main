'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';
import { Plane, Hotel, Car, Camera, MapPin, Users, Clock, Shield, ArrowRight } from 'lucide-react';

const ServicesCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const localServices = [
    {
      icon: Plane,
      title: "Passagens Aéreas",
      description: "Voos diretos ou com conexão para Goiânia, com as melhores tarifas e horários convenientes."
    },
    {
      icon: Hotel,
      title: "Hospedagem Exclusiva",
      description: "Hotéis selecionados próximos ao evento, com tarifas especiais negociadas para congressistas."
    },
    {
      icon: Car,
      title: "Translado Incluso",
      description: "Transfer aeroporto-hotel-evento, garantindo comodidade e pontualidade durante todo o congresso."
    },
    {
      icon: Camera,
      title: "City Tour Goiânia",
      description: "Conheça os principais pontos turísticos da capital, incluindo centro histórico e mercado central."
    },
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Hospedagem a poucos minutos do Goiânia Convention Center, facilitando o acesso ao evento."
    },
    {
      icon: Users,
      title: "Grupos Organizados",
      description: "Pacotes especiais para grupos de hospitais, universidades e instituições de saúde."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Assistência completa durante toda a viagem, com equipe especializada disponível a qualquer hora."
    },
    {
      icon: Shield,
      title: "Seguro Viagem",
      description: "Cobertura completa incluída em todos os pacotes, garantindo tranquilidade durante o evento."
    }
  ];

  // Mapeia ícones por título do serviço
  const getIconForService = (title) => {
    const titleLower = (title || '').toLowerCase();
    if (titleLower.includes('passagem') || titleLower.includes('aérea')) return Plane;
    if (titleLower.includes('hospedagem') || titleLower.includes('hotel')) return Hotel;
    if (titleLower.includes('translado') || titleLower.includes('transfer')) return Car;
    if (titleLower.includes('tour') || titleLower.includes('city')) return Camera;
    if (titleLower.includes('localização') || titleLower.includes('estratégica')) return MapPin;
    if (titleLower.includes('grupo') || titleLower.includes('organizado')) return Users;
    if (titleLower.includes('suporte') || titleLower.includes('24')) return Clock;
    if (titleLower.includes('seguro') || titleLower.includes('viagem')) return Shield;
    return Plane; // Ícone padrão
  };

  // Prefer services from Sanity when available, otherwise use localServices
  const services = Array.isArray(cbenfData?.services?.items) && cbenfData.services.items.length > 0
    ? cbenfData.services.items.map((s, i) => ({
        icon: getIconForService(s.title),
        title: portableTextToPlain(s.title) || s.title || (localServices[i] && localServices[i].title) || 'Serviço',
        description: portableTextToPlain(s.description) || s.description || (localServices[i] && localServices[i].description) || ''
      }))
    : localServices;

  const title = portableTextToPlain(cbenfData?.services?.title) || 'Tudo incluído para sua experiência completa';
  const subtitle = portableTextToPlain(cbenfData?.services?.subtitle) || 'Cuidamos de cada detalhe da sua viagem ao CBEnf 2024. Desde a chegada até a partida, nossa equipe especializada garante que você aproveite ao máximo este importante evento.';

  return (
    <section id="pacotes" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Plane className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark">
              Nossos Serviços
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title.includes('experiência completa') ? (
              <>Tudo incluído para sua <span className="text-brand-red">experiência completa</span></>
            ) : (
              title
            )}
          </motion.h2>
          
          <motion.p 
            className="text-xl leading-8 text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/50 hover:border-brand-gold/30 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border effect on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-gold/20 transition-all duration-300"></div>
                
                <div className="relative">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-brand-gold to-brand-red opacity-90 group-hover:opacity-100 transition-opacity shadow ring-1 ring-brand-gold/40 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(221,190,115,0.1),transparent_70%)]"></div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-brand-dark group-hover:text-brand-red transition-colors duration-300 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-white bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red transition-all duration-300 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold">SOLICITE UMA PROPOSTA PERSONALIZADA!</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCBEnf;
