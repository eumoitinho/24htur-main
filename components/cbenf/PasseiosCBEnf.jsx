'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Clock, ArrowRight, Car, Star } from 'lucide-react';
import PasseioModal from './PasseioModal';

const PasseiosCBEnf = () => {
  const [selectedPasseio, setSelectedPasseio] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const passeios = [
    {
      id: 1,
      nome: 'City tour meio turno com café ao fim da tarde e jantar italiano',
      img: '/carbonara-do-sacristao.jpg',
      preco: 'R$ 665,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Conheça os principais pontos turísticos de Porto Alegre com parada para café e jantar em restaurante italiano tradicional'
    },
    {
      id: 2,
      nome: 'City tour meio turno com café/happy hour e tempo livre no Cais',
      img: '/instagramCais.jpeg',
      preco: 'R$ 431,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Tour pela cidade com parada para happy hour e tempo livre no Cais Embarcadero'
    },
    {
      id: 3,
      nome: 'Bate e volta de Porto Alegre para dois dias em Gramado e Canela',
      img: '/gramado-no-rio-grande-do-sul-2113024.jpg',
      preco: 'R$ 1.025,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Dois dias completos conhecendo as cidades serranas mais famosas do Sul'
    },
    {
      id: 4,
      nome: 'Bate e volta de Porto Alegre para dois dias no Vale dos Vinhedos',
      img: '/valedosvinhedos.jpg',
      preco: 'R$ 1.025,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Experiência completa no Vale dos Vinhedos com degustação e visita às vinícolas'
    },
    {
      id: 5,
      nome: 'Bate e volta de Porto Alegre para dois dias em Bento Gonçalves e Gramado',
      img: '/Locomotiva_estacao_bento_goncalves.jpg',
      preco: 'R$ 1.025,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Combinação perfeita entre vinhos e chocolate em dois dias inesquecíveis'
    },
    {
      id: 6,
      nome: 'City tour meio turno com almoço italiano e tempo livre no Cais',
      img: '/italiano.webp',
      preco: 'R$ 665,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Tour cultural com almoço em cantina italiana e passeio livre pelo Cais'
    },
    {
      id: 7,
      nome: 'City tour de meio turno com almoço churrasco mais tradicional da cidade',
      img: '/churrasco.jpg',
      preco: 'R$ 665,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Conheça Porto Alegre e saboreie o autêntico churrasco gaúcho'
    },
    {
      id: 8,
      nome: 'Linha turismo e barco Cisne Branco com happy hour e tempo livre no Cais',
      img: '/caisPorto.jpg',
      preco: 'R$ 324,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Passeio de barco pelo Guaíba com happy hour e tempo livre'
    },
    {
      id: 9,
      nome: 'Combo linha turismo + barco Cisne Branco',
      img: '/navegando-pelo-guaiba.jpg',
      preco: 'R$ 192,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Percurso: Centro Histórico e ilhas'
    },
    {
      id: 10,
      nome: 'City tour meio turno com happy hour italiano',
      img: '/italiano2.jpg',
      preco: 'R$ 560,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Passeio cultural com happy hour em cantina italiana'
    },
    {
      id: 11,
      nome: 'City tour meio turno com café a tarde e jantar com vinhos e cachaças gaúchas',
      img: '/MG_1137-credito-RHSPhotos-1-1.webp',
      preco: 'R$ 748,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Experiência gastronômica completa com bebidas típicas gaúchas'
    },
    {
      id: 12,
      nome: 'Bate e volta Porto Alegre para Nova Petrópolis com city tour',
      img: '/novapetropolis.jpg',
      preco: 'R$ 722,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Conheça a cidade mais alemã do Brasil em um dia completo'
    },
    {
      id: 13,
      nome: 'Bate e volta Porto Alegre para Gramado e Canela com city tour',
      img: '/Catedral_de_Pedra,_Canela_RS.jpg',
      preco: 'R$ 722,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Tour completo pelas cidades serranas em um dia'
    },
    {
      id: 14,
      nome: 'Bate e volta de Porto Alegre para Bento Gonçalves com city tour',
      img: '/gd_1nmkp3.jpg',
      preco: 'R$ 722,00',
      detalhes: 'por pessoa',
      minimo: 'Saída com mínimo de duas pessoas',
      descricao: 'Dia completo na capital do vinho brasileiro'
    }
  ];

  const displayedPasseios = showAll ? passeios : passeios.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D38E17] font-semibold text-sm uppercase tracking-wider">
            Passeios exclusivos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Aproveite sua estadia para conhecer o melhor de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D38E17] to-[#F59E0B]">
              Porto Alegre e região
            </span>{' '}
            com nossos tours privativos.
          </h2>
        </motion.div>

        {/* Informações importantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 border border-gray-200"
        >
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start gap-2">
              <span className="text-[#D38E17] mt-1">•</span>
              <span>Experiências privativas com mínimo de duas pessoas.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#D38E17] mt-1">•</span>
              <span>Veículos compatíveis com número de passageiros.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#D38E17] mt-1">•</span>
              <span>City tours incluem parques, igrejas, museus, centros culturais e pontos turísticos (acesso gratuito).</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#D38E17] mt-1">•</span>
              <span>Menores devem estar acompanhados de pais ou responsável.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[#D38E17] mt-1">•</span>
              <span>Cafés e restaurantes podem ser substituídos por equivalentes em caso de fechamento permanente ou temporário da casa.</span>
            </p>
          </div>
        </motion.div>

        {/* Passeios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedPasseios.map((passeio, index) => (
            <motion.div
              key={passeio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={passeio.img}
                  alt={passeio.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D38E17] via-[#F59E0B] to-[#D38E17] backdrop-blur-md border border-amber-300/50 px-4 py-2 rounded-full text-white shadow-2xl">
                  <span className="text-xl font-black drop-shadow-lg">{passeio.preco}</span>
                  <span className="text-xs block font-bold drop-shadow-md">{passeio.detalhes}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {passeio.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {passeio.descricao}
                </p>
                <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {passeio.minimo}
                </p>

                <button
                  onClick={() => setSelectedPasseio(passeio)}
                  className="group relative overflow-hidden w-full bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white font-bold py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  <span className="relative z-10">RESERVAR PASSEIO</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver mais/menos */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#D38E17] to-[#F59E0B] text-white border-2 border-[#D38E17] font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">{showAll ? 'Ver menos' : 'Ver todos os 14 passeios'}</span>
          </button>
        </div>

      </div>

      {selectedPasseio && (
        <PasseioModal
          passeio={selectedPasseio}
          onClose={() => setSelectedPasseio(null)}
        />
      )}
    </section>
  );
};

export default PasseiosCBEnf;