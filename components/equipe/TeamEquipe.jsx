'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useEquipePage } from '../../utils/hooks/useSanityData';

const TeamEquipe = () => {
  const { data: equipeData, loading, error } = useEquipePage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  // Garante que sempre seja um array
  const teamData = Array.isArray(equipeData?.team)
    ? equipeData.team
    : (equipeData?.team?.members && Array.isArray(equipeData.team.members))
      ? equipeData.team.members
      : (equipeData?.team?.items && Array.isArray(equipeData.team.items))
        ? equipeData.team.items
        : [
    {
      name: "Betinna Pavim",
      position: "CEO|COO",
      education: "Bacharel em Turismo com ênfase em Hotelaria",
      experience: "20 anos de experiência com agenciamento de viagens"
    },
    {
      name: "Liciane Rossetto",
      position: "CEO|CFO",
      education: "Doutora em Turismo",
      experience: "30 anos de experiência no setor turístico"
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {equipeData?.title || 'NOSSA EQUIPE'}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200/50"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-brand-dark">
                      {member.name ? member.name.split(' ').map(n => n[0]).join('') : ''}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brand-gold font-semibold mb-3">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Formação:</strong> {member.education}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Experiência:</strong> {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamEquipe;