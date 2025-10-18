'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, ArrowRight } from 'lucide-react';

const PasseioModal = ({ passeio, onClose }) => {
  const handleContato = () => {
    onClose();
    const formSection = document.getElementById('formulario-contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={passeio.img}
              alt={passeio.nome}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-xl font-bold">{passeio.preco}</span>
              <span className="text-xs block">{passeio.detalhes}</span>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{passeio.nome}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{passeio.descricao}</p>

            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Users className="w-5 h-5" />
              <span>{passeio.minimo}</span>
            </div>

            <button
              onClick={handleContato}
              className="group relative overflow-hidden w-full bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">SOLICITAR RESERVA</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PasseioModal;