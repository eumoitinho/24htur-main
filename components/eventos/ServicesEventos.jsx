'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plane, Building, Car, MapPin, Coffee, ArrowRight } from 'lucide-react';
import { useEventosPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ServicesEventos = () => {
  const { data: eventosData } = useEventosPage();

  const defaultServicos = [
    {
      icon: Users,
      titulo: 'Atendimento a palestrantes e congressistas',
      descricao: 'Garantimos que seus convidados de honra tenham uma experiência de viagem VIP, com todo o suporte necessário.'
    },
    {
      icon: Plane,
      titulo: 'Emissão de passagens aéreas',
      descricao: 'Buscamos as melhores rotas e tarifas, otimizando custos e tempo de deslocamento, tanto para organizadores como para visitantes.'
    },
    {
      icon: Building,
      titulo: 'Reserva de hospedagem',
      descricao: 'Selecionamos e reservamos os hotéis mais adequados, considerando localização, conforto e orçamento, para que todos estejam bem acomodados.'
    },
    {
      icon: Car,
      titulo: 'Transportes e programação de apoio',
      descricao: 'Organizamos traslados eficientes e seguros, além de criar programações de apoio para acompanhantes e familiares, garantindo que todos desfrutem da melhor experiência de viagem possível.'
    },
    {
      icon: MapPin,
      titulo: 'Cotação e locação de salas para eventos',
      descricao: 'Auxiliamos na escolha e reserva de espaços ideais para suas reuniões, conferências ou workshops.'
    },
    {
      icon: Coffee,
      titulo: 'Contratação de Serviços de Alimentos e Bebidas (A&B)',
      descricao: 'Gerenciamos a parte gastronômica do seu evento, desde coffee breaks a jantares de gala, com opções que se encaixam no seu perfil e orçamento.'
    }
  ];

  // Garante que sempre seja um array
  const servicos = Array.isArray(eventosData?.eventServices?.items)
    ? eventosData.eventServices.items
    : (eventosData?.eventServices && !Array.isArray(eventosData.eventServices) && eventosData.eventServices.items)
      ? eventosData.eventServices.items
      : (Array.isArray(eventosData?.services))
        ? eventosData.services
        : (eventosData?.services?.items && Array.isArray(eventosData.services.items))
          ? eventosData.services.items
          : defaultServicos;

  const servicesTitle = eventosData?.eventServices?.title || eventosData?.services?.title || 'Nossos serviços';
  const servicesSubtitle = eventosData?.eventServices?.subtitle || eventosData?.services?.subtitle || 'Soluções completas para o sucesso do seu evento';

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
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
            <Users className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
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
            {(() => {
              const titleStr = portableTextToPlain(servicesTitle) || servicesTitle;
              if (titleStr.includes('serviços')) {
                const parts = titleStr.split('serviços');
                return (
                  <>
                    {parts[0]}<span className="text-brand-red">serviços</span>{parts[1]}
                  </>
                );
              }
              return titleStr;
            })()}
          </motion.h2>
          
          {servicesSubtitle && (
            <motion.p 
              className="text-xl leading-8 text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {portableTextToPlain(servicesSubtitle) || servicesSubtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {servicos.map((servico, index) => {
            // Mapeia ícones por título do serviço ou usa ícone padrão
            const getIconForService = (title) => {
              const titleLower = (title || '').toLowerCase();
              if (titleLower.includes('palestrantes') || titleLower.includes('congressistas')) return Users;
              if (titleLower.includes('passagens') || titleLower.includes('aéreas')) return Plane;
              if (titleLower.includes('hospedagem') || titleLower.includes('hotel')) return Building;
              if (titleLower.includes('transporte') || titleLower.includes('traslado')) return Car;
              if (titleLower.includes('sala') || titleLower.includes('locação')) return MapPin;
              if (titleLower.includes('alimentos') || titleLower.includes('bebidas') || titleLower.includes('a&b')) return Coffee;
              return Users; // Ícone padrão
            };

            // Se o serviço tem um ícone (do fallback), usa ele. Senão, mapeia pelo título
            const Icon = servico.icon || getIconForService(servico.title || servico.titulo);
            const title = portableTextToPlain(servico.title || servico.titulo) || servico.title || servico.titulo;
            const description = portableTextToPlain(servico.description || servico.descricao) || servico.description || servico.descricao;
            
            return (
              <motion.div
                key={servico._key || index}
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
                    {title}
                  </h3>
                  
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                    {description}
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

export default ServicesEventos;
