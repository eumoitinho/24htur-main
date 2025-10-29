'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { useEventosPage } from '../../utils/hooks/useSanityData';
import { resolveImage, portableTextToPlain } from '../../utils/lib/sanity';

const AboutCBEnf = () => {
  const { data: eventosData } = useEventosPage();

  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 backdrop-blur-sm border border-amber-200 rounded-full py-2 px-4 mb-4">
            <span className="text-sm font-medium text-amber-700">{eventosData?.hero?.badgeText || 'SOBRE O EVENTO'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {portableTextToPlain(eventosData?.hero?.title) || (
              <>75º Congresso Brasileiro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">Enfermagem</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {eventosData?.hero?.subtitle || 'O maior evento da enfermagem brasileira está chegando a Porto Alegre'}
          </p>
        </motion.div>

        {/* Descrição e Imagem */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              O evento mais importante da enfermagem nacional
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              A Associação Brasileira de Enfermagem (ABEn) promove este encontro fundamental
              para profissionais, estudantes, pesquisadores e gestores de todo o país.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Uma oportunidade única de atualização científica, networking e desenvolvimento
              profissional em um ambiente de excelência acadêmica.
            </p>

            {/* Cards de Destaques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-200">
                <div className="text-2xl font-bold text-[#D38E17] mb-1">+5.000</div>
                <p className="text-xs text-gray-600">Participantes esperados</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-200">
                <div className="text-2xl font-bold text-[#D38E17] mb-1">75º</div>
                <p className="text-xs text-gray-600">Edição histórica</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto">
                <Image
                  src={resolveImage(eventosData?.hero?.image, '/cben.webp')}
                  alt="Congresso de Enfermagem"
                  width={1200}
                  height={700}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-bold">Eventos paralelos:</div>
                <div className="text-xs mt-1">7º CLAHEN • 8º SENABS</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cronograma Redesenhado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cronograma do{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
                Evento
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Pré-congresso */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-amber-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#D38E17]" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-gray-900">Pré-congresso</h4>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>22-23 de Novembro</span>
              </div>
              <p className="text-sm text-gray-500">
                Workshops e cursos preparatórios com especialistas renomados
              </p>
            </motion.div>

            {/* Card Evento Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#D38E17] to-[#F59E0B] rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-xl mb-2">Evento Principal</h4>
              <div className="flex items-center mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>23-26 de Novembro</span>
              </div>
              <p className="text-sm text-white/90">
                Palestras, painéis, apresentações de trabalhos e networking
              </p>
            </motion.div>

            {/* Card Local */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-2 border-amber-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#D38E17]" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-gray-900">Local do Evento</h4>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Campus PUCRS</span>
              </div>
              <p className="text-sm text-gray-500">
                Porto Alegre - RS<br />
                Estrutura completa e moderna
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Garanta sua participação neste evento histórico da enfermagem brasileira
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">QUERO PARTICIPAR</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCBEnf;