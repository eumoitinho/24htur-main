'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const DestinationsLazer = () => {
  const { data: lazerData } = useLazerPage();

  const defaultDestinations = [
    {
      name: 'Europa',
      description: 'Roteiros clássicos e experiências autênticas pelo velho continente',
      image: '/destination-europa.jpg'
    },
    {
      name: 'América do Sul',
      description: 'Descubra as maravilhas naturais e culturais dos nossos vizinhos',
      image: '/destination-america-sul.jpg'
    },
    {
      name: 'Ásia',
      description: 'Mergulhe em culturas milenares e paisagens exóticas',
      image: '/destination-asia.jpg'
    },
    {
      name: 'Caribe',
      description: 'Praias paradisíacas e resorts all-inclusive dos sonhos',
      image: '/destination-caribe.jpg'
    },
    {
      name: 'Estados Unidos',
      description: 'Das metrópoles aos parques nacionais, experiências únicas',
      image: '/destination-eua.jpg'
    },
    {
      name: 'Brasil',
      description: 'Redescubra as belezas do nosso país em roteiros especiais',
      image: '/destination-brasil.jpg'
    }
  ];

  const destinations = lazerData?.destinations && Array.isArray(lazerData.destinations)
    ? lazerData.destinations
    : defaultDestinations;

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Destinos que inspiram
          </h2>
          <p className="text-lg text-slate-600">
            Explore o mundo com nossos roteiros cuidadosamente selecionados
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{portableTextToPlain(destination.name) || destination.name}</h3>
                  <p className="text-sm text-white/90">{portableTextToPlain(destination.description) || destination.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsLazer;