'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Heart, UtensilsCrossed, Landmark, Calendar, ShoppingBag, Sun, Snowflake } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const TravelTypesLazer = () => {
  const { data: lazerData } = useLazerPage();

  const iconMap = {
    'adventure': Mountain,
    'romantic': Heart,
    'food': UtensilsCrossed,
    'culture': Landmark,
    'events': Calendar,
    'shopping': ShoppingBag,
    'summer': Sun,
    'winter': Snowflake
  };

  const defaultTypes = [
    { name: 'Viagens de aventura', icon: 'adventure' },
    { name: 'Viagens românticas', icon: 'romantic' },
    { name: 'Viagens gastronômica', icon: 'food' },
    { name: 'Viagens culturais', icon: 'culture' },
    { name: 'Viagens para eventos', icon: 'events' },
    { name: 'Viagens de compras', icon: 'shopping' },
    { name: 'Viagens de verão', icon: 'summer' },
    { name: 'Viagens de inverno', icon: 'winter' }
  ];

  // Garante que sempre seja um array
  const types = Array.isArray(lazerData?.travelTypes?.types)
    ? lazerData.travelTypes.types
    : (lazerData?.travelTypes && !Array.isArray(lazerData.travelTypes) && lazerData.travelTypes.types)
      ? lazerData.travelTypes.types
      : defaultTypes;

  const title = lazerData?.travelTypes?.title || 'Seu roteiro do seu jeito';

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {portableTextToPlain(title) || title}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((type, index) => {
            const iconValue = type.icon || 'adventure';
            const Icon = iconMap[iconValue] || Mountain;
            const name = type.name || type.title || '';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-4">
                  <Icon className="w-8 h-8 text-brand-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {portableTextToPlain(name) || name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelTypesLazer;

