'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCBEnfPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';
import Image from 'next/image';

const About24HCBEnf = () => {
  const { data: cbenfData } = useCBEnfPage();

  const handleFalarEspecialista = () => {
    const formSection = document.getElementById('contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const about24H = cbenfData?.about24H || {};
  const title = portableTextToPlain(about24H.title) || 'Soluções completas para sua viagem de lazer ou negócios';
  const description = about24H.description || [];
  const foundedYear = about24H.foundedYear || '2015';
  const ctaText = about24H.ctaText || 'FALE COM UM ESPECIALISTA!';

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D38E17] font-semibold text-sm uppercase tracking-wider">
            SOBRE A 24H
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {about24H.image ? (
                <Image
                  src={resolveImage(about24H.image, '/2025-03-27-Liciane-e-Betinna-24H-75.jpg')}
                  alt="Equipe 24H"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl w-full"
                />
              ) : (
                <img 
                  src="/2025-03-27-Liciane-e-Betinna-24H-75.jpg" 
                  alt="Equipe 24H"
                  className="rounded-3xl shadow-2xl w-full"
                />
              )}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">{foundedYear}</div>
                <div className="text-sm font-semibold">Desde</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {Array.isArray(description) && description.length > 0 ? (
              <div className="space-y-6 mb-8">
                {description.map((block, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {portableTextToPlain(block)}
                  </p>
                ))}
              </div>
            ) : (
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fundada em 2015, a <strong className="text-white">24H Escritório de Viagens</strong> nasceu 
                  com uma proposta clara: oferecer soluções completas para viagens de lazer e corporativas. 
                  Nosso nome reflete exatamente nossa filosofia de trabalho - estar disponível quando você 
                  precisar, combinando a praticidade de um escritório de viagens com o profissionalismo que 
                  grandes eventos exigem.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nossa equipe é majoritariamente composta por mulheres com mais de 20 anos de expertise 
                  no agenciamento de viagens, o que nos proporciona uma visão única sobre as necessidades 
                  dos viajantes e a sensibilidade necessária para cuidar de cada detalhe da sua experiência.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Trabalhamos com uma ampla gama de fornecedores estratégicos que nos permitem oferecer 
                  desde serviços avulsos como passagens aéreas, seguros, locação de veículos, hospedagem, 
                  vistos e câmbio, até a personalização completa de pacotes sob medida.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Quando você escolhe a 24H, está optando por uma parceria com experiência comprovada, 
                  relacionamentos sólidos no mercado e uma reputação construída dia após dia através 
                  da satisfação de nossos clientes.
                </p>
              </div>
            )}

            <button
              onClick={handleFalarEspecialista}
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About24HCBEnf;

