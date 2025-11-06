'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const TeamSection = () => {
  const { data: homepageData, loading, error } = useHomepage();
  
  // Debug: log dos dados recebidos
  React.useEffect(() => {
    console.log('👥 TeamSection - Homepage data:', homepageData);
    console.log('👥 TeamSection - Team data:', homepageData?.team);
    console.log('👥 TeamSection - Members:', homepageData?.team?.members);
    console.log('👥 TeamSection - Members length:', homepageData?.team?.members?.length || 0);
  }, [homepageData]);
  
  // Garante que sempre seja um array
  const teamData = homepageData?.team?.members || [];

  return (
    <section className="py-14 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {portableTextToPlain(homepageData?.team?.title) || 'NOSSA EQUIPE'}
          </h2>
        </div>

        {teamData.length > 0 ? (
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
                    {member.education && (
                      <p className="text-sm text-slate-600 mb-2">
                        {member.education}
                      </p>
                    )}
                    {member.experience && (
                      <p className="text-sm text-slate-600">
                        {member.experience}
                      </p>
                    )}
                    {member.description && !member.education && (
                      <p className="text-sm text-slate-600 whitespace-pre-line">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center mb-12">
            <p className="text-slate-600">Nenhum membro da equipe encontrado. Verifique os dados no Sanity Dashboard.</p>
          </div>
        )}

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/equipe"
              className="inline-flex items-center text-brand-dark font-semibold hover:text-brand-gold transition-colors duration-300"
            >
              {portableTextToPlain(homepageData?.team?.ctaText) || 'CONHEÇA NOSSA EQUIPE COMPLETA'}
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;