'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

const HeroCBEnf = () => {
  const handleCTAClick = () => {
    const formSection = document.getElementById('formulario-contato');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="/image.jpeg"
          alt="75º CBEn"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D38E17] from-10% via-[#D38E17]/80 via-50% to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/selo-vermelho.png"
              alt="24H Escritório de Viagens"
              className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            />
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full py-2 px-4 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#D38E17] shadow-lg"></span>
              <span className="text-xs md:text-sm font-bold text-white drop-shadow-lg">75º Congresso Brasileiro de Enfermagem</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            Sua participação no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae2724] to-[#DC2626]">
              75º CBEn
            </span>{" "}
            <span className="text-white">sem complicações!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
            Esqueça o estresse de organizar hospedagem, passagens e passeios. A 24H Escritório de Viagens cuida de tudo para você focar
            no que realmente importa: o conhecimento e networking do maior congresso de enfermagem do Brasil.
          </p>

          <button
            className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold rounded-full px-8 py-4 text-base transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
            onClick={handleCTAClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">QUERO MEU PACOTE EXCLUSIVO!</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-500 shadow-2xl hover:shadow-red-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Calendar className="w-14 h-14 text-white mb-4 mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-black mb-2 text-white drop-shadow-lg">Datas do Evento</h3>
            <p className="text-sm text-white/90 leading-relaxed drop-shadow-md font-semibold">
              <strong>Pré-congresso:</strong> 22-23 Nov<br />
              <strong>Evento:</strong> 23-26 Nov 2025
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ae2724] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-500 shadow-2xl hover:shadow-red-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <MapPin className="w-14 h-14 text-white mb-4 mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-black mb-2 text-white drop-shadow-lg">Local</h3>
            <p className="text-sm text-white/90 leading-relaxed drop-shadow-md font-semibold">
              <strong>Campus da PUCRS</strong><br />
              Porto Alegre - RS
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ae2724] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-500 shadow-2xl hover:shadow-red-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Users className="w-14 h-14 text-white mb-4 mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-black mb-2 text-white drop-shadow-lg">Participantes</h3>
            <p className="text-sm text-white/90 leading-relaxed drop-shadow-md font-semibold">
              <strong>Profissionais e estudantes</strong><br />
              de todo o Brasil
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ae2724] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCBEnf;