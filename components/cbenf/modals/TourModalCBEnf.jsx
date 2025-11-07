'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Phone, Mail, User } from 'lucide-react';
import { resolveImage, portableTextToPlain } from '../../../utils/lib/sanity';
import Image from 'next/image';

const TourModalCBEnf = ({ tour, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enviar para API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          cidade: '',
          mensagem: `Interesse no passeio: ${portableTextToPlain(tour.name) || tour.name} - Preço: ${tour.price || 'R$ 0,00'}`,
          timestamp: new Date().toISOString(),
          origem: 'Passeio - Modal CBENF',
          evento: 'CBEnf 2025'
        })
      });

      if (response.ok) {
        // Abrir WhatsApp
        const whatsappMessage = `Olá, estou interessado no passeio ${portableTextToPlain(tour.name) || tour.name}. Meu nome é ${formData.nome}.`; 
        const whatsappNumber = '5551995240098';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        onClose();
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative overflow-hidden bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="relative h-64 overflow-hidden">
              {tour.image ? (
                <Image
                  src={resolveImage(tour.image, '/placeholder.jpg')}
                  alt={portableTextToPlain(tour.name) || tour.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{portableTextToPlain(tour.name) || tour.name}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-yellow-400">{tour.price || 'R$ 0,00'}</span>
                  <span className="text-sm">{tour.priceDetail || 'por pessoa'}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Detalhes */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Detalhes do Passeio</h4>
                <p className="text-gray-700 mb-4">{portableTextToPlain(tour.description) || tour.description}</p>
                {tour.minimum && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span>{portableTextToPlain(tour.minimum) || tour.minimum}</span>
                  </div>
                )}
              </div>

              {/* Formulário */}
              <div className="bg-gray-50 -mx-8 -mb-8 px-8 py-8 rounded-b-3xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Solicite sua Reserva</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        Enviar e Conversar no WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TourModalCBEnf;

