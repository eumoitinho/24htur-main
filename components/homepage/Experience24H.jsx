'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useHomepage } from '../../utils/hooks/useSanityData';
import { resolveImage } from '../../utils/lib/sanity';

const Experience24H = () => {
  const { data: homepageData } = useHomepage();
  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-brand-beige to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              {homepageData?.experience?.title || 'Viva a experiência 24H'}
            </h2>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed">
                {homepageData?.experience?.description || 'Na 24H, transformamos cada viagem em uma experiência única e sem preocupações. Seja a trabalho, lazer ou para um evento especial, somos sua consultoria estratégica completa em gestão de viagens.'}
              </p>

              <p className="leading-relaxed">
                {homepageData?.experience?.subtitle || 'Conte com a nossa ampla rede de fornecedores e a expertise da nossa equipe especializada para garantir excelência em cada etapa da sua viagem.'}
              </p>
            </div>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-brand-gold to-[#F59E0B] px-8 py-4 text-[15px] font-semibold text-brand-dark shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {homepageData?.experience?.ctaText || 'FALE COM UM ESPECIALISTA!'}
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={2} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold/10 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={resolveImage(homepageData?.experience?.image, '/experience-24h.jpg')}
                  alt="Experiência 24H"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience24H;