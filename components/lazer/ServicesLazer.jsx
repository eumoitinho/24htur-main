'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Map, Camera, Shield, Globe } from 'lucide-react';
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

  // Garante que sempre seja um array
  const services = Array.isArray(lazerData?.services?.items)
    ? lazerData.services.items
    : (lazerData?.services && !Array.isArray(lazerData.services) && lazerData.services.items)
      ? lazerData.services.items
      : defaultServices;

  const title = lazerData?.services?.title || 'Serviços completos para sua viagem de lazer';
  const ctaText = lazerData?.services?.ctaText || 'PERSONALIZE DO SEU JEITO!';

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {portableTextToPlain(title) || title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const serviceName = service.service || service.title || '';
            const description = service.description || '';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <span className="text-brand-gold text-sm">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {portableTextToPlain(serviceName) || serviceName}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {portableTextToPlain(description) || description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {ctaText}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesLazer;