'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Map, Camera, Shield, Globe, ArrowRight } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ServicesLazer = () => {
  const { data: lazerData } = useLazerPage();

  const defaultServices = [
    {
      icon: Plane,
      title: 'Passagens Aéreas',
      description: 'Encontramos as melhores rotas e tarifas para seu destino, garantindo conforto e economia.'
    },
    {
      icon: Hotel,
      title: 'Hospedagem',
      description: 'Seleção criteriosa de hotéis e resorts que combinam com seu estilo de viagem e orçamento.'
    },
    {
      icon: Map,
      title: 'Roteiros Personalizados',
      description: 'Criamos itinerários exclusivos baseados em seus interesses e preferências.'
    },
    {
      icon: Camera,
      title: 'Passeios e Experiências',
      description: 'Acesso aos melhores tours, atrações e experiências locais em cada destino.'
    },
    {
      icon: Shield,
      title: 'Seguro Viagem',
      description: 'Proteção completa para você viajar com tranquilidade e segurança.'
    },
    {
      icon: Globe,
      title: 'Câmbio e Documentação',
      description: 'Auxiliamos com moeda estrangeira, vistos e toda documentação necessária.'
    }
  ];

  // Mapeia ícones por título do serviço
  const getIconForService = (title) => {
    const titleLower = (title || '').toLowerCase();
    if (titleLower.includes('passagem') || titleLower.includes('aérea')) return Plane;
    if (titleLower.includes('hospedagem') || titleLower.includes('hotel')) return Hotel;
    if (titleLower.includes('roteiro') || titleLower.includes('personalizado')) return Map;
    if (titleLower.includes('passeio') || titleLower.includes('experiência')) return Camera;
    if (titleLower.includes('seguro') || titleLower.includes('viagem')) return Shield;
    if (titleLower.includes('câmbio') || titleLower.includes('documentação')) return Globe;
    return Plane; // Ícone padrão
  };

  // Garante que sempre seja um array
  const services = Array.isArray(lazerData?.services?.items)
    ? lazerData.services.items.map((s, i) => ({
        icon: getIconForService(s.service || s.title),
        title: portableTextToPlain(s.service || s.title) || s.service || s.title || (defaultServices[i] && defaultServices[i].title) || 'Serviço',
        description: portableTextToPlain(s.description) || s.description || (defaultServices[i] && defaultServices[i].description) || ''
      }))
    : (lazerData?.services && !Array.isArray(lazerData.services) && lazerData.services.items)
      ? lazerData.services.items.map((s, i) => ({
          icon: getIconForService(s.service || s.title),
          title: portableTextToPlain(s.service || s.title) || s.service || s.title || (defaultServices[i] && defaultServices[i].title) || 'Serviço',
          description: portableTextToPlain(s.description) || s.description || (defaultServices[i] && defaultServices[i].description) || ''
        }))
      : defaultServices;

  const title = portableTextToPlain(lazerData?.services?.title) || 'Serviços completos para sua viagem de lazer';
  const subtitle = portableTextToPlain(lazerData?.services?.subtitle) || 'Tudo que você precisa para uma viagem perfeita';
  const ctaText = portableTextToPlain(lazerData?.services?.ctaText) || 'PERSONALIZE DO SEU JEITO!';

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
            {title.includes('viagem de lazer') ? (
              <>Serviços completos para sua <span className="text-brand-red">viagem de lazer</span></>
            ) : (
              title
            )}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="text-xl leading-8 text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
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
            <span className="text-lg font-semibold">{ctaText}</span>
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

export default ServicesLazer;
