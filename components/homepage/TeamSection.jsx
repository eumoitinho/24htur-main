'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const TeamSection = () => {
  const { data: homepageData, loading, error } = useHomepage();
  
  // Fallback para dados estáticos caso não carregue do Sanity
  // Garante que sempre seja um array
  const teamData = Array.isArray(homepageData?.team) 
    ? homepageData.team 
    : (homepageData?.team?.items || homepageData?.team?.members || [
    {
      name: 'Betinna Pavim',
      role: 'CEO|COO',
      education: 'Bacharel em Turismo com ênfase em Hotelaria',
      experience: '20 anos de experiência com agenciamento de viagens'
    },
    {
      name: 'Liciane Rossetto',
      role: 'CEO|CFO',
      education: 'Doutora em Turismo',
      experience: '30 anos de experiência no setor turístico'
    }
  ]);

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {portableTextToPlain(homepageData?.team?.title) || 'NOSSA EQUIPE'}
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-gold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      {member.education}
                    </p>
                    <p className="text-sm text-slate-600">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/equipe" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-gold transition-colors duration-300"
            >
              {portableTextToPlain(homepageData?.team?.ctaText) || 'CONHEÇA NOSSA EQUIPE COMPLETA'}
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;