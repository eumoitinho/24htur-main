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
  const services = Array.isArray(lazerData?.services)
    ? lazerData.services
    : (lazerData?.services?.items && Array.isArray(lazerData.services.items))
      ? lazerData.services.items
      : defaultServices;

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Serviços completos para sua viagem perfeita
          </h2>
          <p className="text-lg text-slate-600">
            Tudo o que você precisa para uma experiência de viagem memorável
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 mb-4">
                  <Icon className="w-8 h-8 text-brand-dark" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {portableTextToPlain(service.title) || service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {portableTextToPlain(service.description) || service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesLazer;