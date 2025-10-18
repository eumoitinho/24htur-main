'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const HospedagemCBEnf = () => {
  const [showAll, setShowAll] = useState(false);

  const hoteis = [
    {
      id: 1,
      nome: 'Charlie Connect PUC',
      distancia: '750 metros da PUCRS',
      precoBase: 'R$ 320,00',
      img: '/24H Fachadas/01 - Charlie.png',
      badge: 'Mais Próximo',
      detalhes: [
        'Studio casal 27m²: R$ 320,00 a diária',
        'Studio casal 40m²: R$ 354,00 a diária',
        'Taxa de limpeza obrigatória: R$ 140,00',
        'Check-in: 15:00 | Check-out: 11:00'
      ]
    },
    {
      id: 2,
      nome: 'Pousada São Lourenço',
      distancia: '3,5 km da PUCRS',
      precoBase: 'R$ 159,00',
      img: '/24H Fachadas/02 - Hotel Pousada São Lourenço.png',
      badge: 'Econômico',
      detalhes: [
        'Apartamentos: single, duplos, triplos, quádruplos e quíntuplos',
        'Sem ar condicionado: R$ 159,00 por pessoa/diária',
        'Com ar condicionado: R$ 182,00 por pessoa/diária',
        'Incluso: café da manhã, estacionamento, Wi-Fi e segurança 24h',
        'Check-in: 14:00 | Check-out: 11:30'
      ]
    },
    {
      id: 3,
      nome: 'Coral Trade',
      distancia: '3,8 km da PUCRS',
      precoBase: 'R$ 331,00',
      img: '/24H Fachadas/03 - Coral Trade.png',
      detalhes: [
        'Apartamento duplo casal classic: R$ 331,00 a diária',
        'Apartamento duplo solteiro superior: R$ 331,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 4,
      nome: 'Master Porto Alegre',
      distancia: '4,6 km da PUCRS',
      precoBase: 'R$ 354,00',
      img: '/24H Fachadas/04 - Master POA.png',
      detalhes: [
        'Apartamento single standard: R$ 354,00 a diária',
        'Apartamento duplo standard: R$ 399,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 5,
      nome: 'Master Express Moinhos de Vento',
      distancia: '5,9 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/05 - Master - Moinhos de Vento.png',
      detalhes: [
        'Apartamento single classic: R$ 228,00 a diária',
        'Apartamento duplo classic: R$ 274,00 a diária',
        'Apartamento triplo classic: R$ 320,00 a diária',
        'Apartamento família superior (1 casal + 1 solteiro): R$ 354,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 6,
      nome: 'Intercity Piazza Navona',
      distancia: '6 km da PUCRS',
      precoBase: 'R$ 379,00',
      img: '/24H Fachadas/06 - Intercity Piaza Navona.png',
      detalhes: [
        'Apartamento single: R$ 379,00 + 5% a diária',
        'Apartamento duplo: R$ 434,00 + 5% a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 7,
      nome: 'Charlie Porto Alegre Moinhos',
      distancia: '6 km da PUCRS',
      precoBase: 'R$ 308,00',
      img: '/24H Fachadas/07 - Charlie Moinhos.png',
      detalhes: [
        'Studio standard casal: R$ 308,00 a diária',
        'Studio superior casal: R$ 332,00 a diária',
        'Studio deluxe casal 26m²: R$ 342,00 a diária',
        'Studio deluxe casal 33m²: R$ 377,00 a diária',
        'Taxa de limpeza obrigatória: R$ 140,00',
        'Check-in: 15:00 | Check-out: 11:00'
      ]
    },
    {
      id: 8,
      nome: 'Coral Express',
      distancia: '6,3 km da PUCRS',
      precoBase: 'R$ 234,00',
      img: '/24H Fachadas/08 - Coral Express.png',
      detalhes: [
        'Apartamento single standard: R$ 234,00 a diária',
        'Apartamento duplo standard: R$ 280,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 9,
      nome: 'Ibis Styles Porto Alegre Moinhos de Vento',
      distancia: '6,4 km da PUCRS',
      precoBase: 'R$ 425,00',
      img: '/24H Fachadas/09 - Ibis Style.png',
      badge: 'Premium',
      detalhes: [
        'Apartamento single standard: R$ 425,00 + 5% ISS a diária',
        'Apartamento duplo standard: R$ 496,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 12:00 | Check-out: 12:00'
      ]
    },
    {
      id: 10,
      nome: 'Master Express Cidade Baixa',
      distancia: '6,5 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/10 - Master Express Cidade Baixa.png',
      detalhes: [
        'Apartamento single standard: R$ 228,00 a diária',
        'Apartamento duplo standard: R$ 274,00 a diária',
        'Apartamento triplo standard: R$ 320,00 a diária',
        'Apartamento duplex (4 camas de solteiro): R$ 377,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 11,
      nome: 'Açores Premium Hotel',
      distancia: '6,5 km da PUCRS',
      precoBase: 'R$ 239,00',
      img: '/24H Fachadas/11 - Açores Premium Hotel.png',
      detalhes: [
        'Apartamento single standard: R$ 239,00 a diária',
        'Apartamento duplo standard: R$ 273,00 a diária',
        'Apartamento triplo standard: R$ 376,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 12,
      nome: 'Garibaldi Business Hotel',
      distancia: '6,6 km da PUCRS',
      precoBase: 'R$ 312,00',
      img: '/24H Fachadas/12 - Garibaldi.png',
      detalhes: [
        'Apartamento single standard: R$ 312,00 + 5% ISS a diária',
        'Apartamento duplo standard: R$ 384,00 + 5% ISS a diária',
        'Apartamento triplo standard: R$ 479,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 13,
      nome: 'Master Cosmopolitan',
      distancia: '6,7 km da PUCRS',
      precoBase: 'R$ 331,00',
      img: '/24H Fachadas/13 - Master Cosmopolitan.png',
      detalhes: [
        'Apartamento duplo classic (2 camas de solteiro): R$ 331,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 14,
      nome: 'Umbu Hotel',
      distancia: '6,9 km da PUCRS',
      precoBase: 'R$ 341,00',
      img: '/24H Fachadas/14 - Umbu.png',
      detalhes: [
        'Apartamento duplo solteiro executivo: R$ 341,00 a diária',
        'Apartamento triplo executivo (com beliche): R$ 398,00 a diária',
        'Apartamento triplo executivo: R$ 433,00 a diária',
        'Apartamento quádruplo executivo: R$ 455,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 15,
      nome: 'Master Alberto Bins',
      distancia: '6,9 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/15 - Master Alberto.png',
      detalhes: [
        'Apartamento single classic: R$ 228,00 a diária',
        'Apartamento duplo classic: R$ 274,00 a diária',
        'Apartamento triplo classic (3 camas): R$ 320,00 a diária',
        'Apartamento família classic (1 casal + 1 solteiro): R$ 354,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 16,
      nome: 'Continental Business',
      distancia: '6,9 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/16 - Continental.jpg',
      detalhes: [
        'Apartamento single standard: R$ 228,00 a diária',
        'Apartamento duplo standard: R$ 274,00 a diária',
        'Apartamento triplo superior: R$ 320,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 17,
      nome: 'Nacional Inn Porto Alegre',
      distancia: '7 km da PUCRS',
      precoBase: 'R$ 206,00',
      img: '/24H Fachadas/16 - Hotel Nacional Inn.png',
      detalhes: [
        'Apartamento single standard: R$ 206,00 + 5% ISS a diária',
        'Apartamento duplo standard: R$ 240,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 18,
      nome: 'Park Plaza Porto Alegre',
      distancia: '7 km da PUCRS',
      precoBase: 'R$ 462,00',
      img: '/24H Fachadas/17 - Park Plaza.png',
      badge: 'Luxo',
      detalhes: [
        'Apartamento single superior: R$ 462,00 + 5% ISS a diária',
        'Apartamento duplo superior: R$ 411,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 19,
      nome: 'Master Express Dom Pedro II',
      distancia: '7 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/18 - Master Express Dom Pedro.png',
      detalhes: [
        'Apartamento single classic: R$ 228,00 a diária',
        'Apartamento duplo classic: R$ 274,00 a diária',
        'Apartamento triplo classic: R$ 320,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 20,
      nome: 'Hotel Embaixador',
      distancia: '7,2 km da PUCRS',
      precoBase: 'R$ 251,00',
      img: '/24H Fachadas/19 - Hotel Embaixador.png',
      detalhes: [
        'Apartamento single standard: R$ 251,00 a diária',
        'Apartamento duplo standard: R$ 285,00 a diária',
        'Incluso: café da manhã, lavanderia self service, espaço coliving com academia, churrasqueira e cozinha compartilhada e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 21,
      nome: 'Dan Inn Express Porto Alegre',
      distancia: '7,2 km da PUCRS',
      precoBase: 'R$ 216,60',
      img: '/24H Fachadas/20 - Hotel Dan Inn.png',
      detalhes: [
        'Apartamento single econômico: R$ 216,60 + 5% ISS a diária',
        'Apartamento duplo econômico: R$ 216,60 + 5% ISS a diária',
        'Apartamento duplo standard: R$ 216,60 + 5% ISS a diária',
        'Apartamento triplo standard: R$ 319,20 + 5% ISS a diária',
        'Apartamento quádruplo standard: R$ 353,40 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 22,
      nome: 'Ritter Hotéis',
      distancia: '7,2 km da PUCRS',
      precoBase: 'R$ 263,00',
      img: '/24H Fachadas/21 - Ritter Hoteis.png',
      detalhes: [
        'Apartamento single luxo: R$ 263,00 a diária',
        'Apartamento duplo luxo: R$ 308,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 23,
      nome: 'Intercity Praia de Belas',
      distancia: '7,4 km da PUCRS',
      precoBase: 'R$ 379,00',
      img: '/24H Fachadas/22 - Intercity.png',
      detalhes: [
        'Apartamento single luxo superior: R$ 379,00 + 5% ISS a diária',
        'Apartamento duplo luxo superior: R$ 431,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 24,
      nome: 'Blue Tree Towers Millenium',
      distancia: '7,5 km da PUCRS',
      precoBase: 'R$ 342,00',
      img: '/24H Fachadas/23 - Blue Tree Towers.png',
      badge: 'Premium',
      detalhes: [
        'Apartamento single superior: R$ 342,00 + 5% ISS a diária',
        'Apartamento duplo superior: R$ 388,00 + 5% ISS a diária',
        'Apartamento single luxo: R$ 377,00 + 5% ISS a diária',
        'Apartamento duplo luxo: R$ 422,00 + 5% ISS a diária',
        'Apartamento single suíte luxo: R$ 468,00 + 5% ISS a diária',
        'Apartamento duplo suíte luxo: R$ 536,00 + 5% ISS a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 25,
      nome: 'Plaza São Rafael',
      distancia: '7,7 km da PUCRS',
      precoBase: 'R$ 387,00',
      img: '/24H Fachadas/24 - Hotel Plaza São Rafael.png',
      detalhes: [
        'Apartamento single standard: R$ 387,00 a diária',
        'Apartamento duplo standard: R$ 433,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 26,
      nome: 'Hotel Lancaster POA',
      distancia: '7,9 km da PUCRS',
      precoBase: 'R$ 171,00',
      img: '/24H Fachadas/25 - Hotel Lancaster.png',
      badge: 'Econômico',
      detalhes: [
        'Apartamento single: R$ 171,00 a diária',
        'Apartamento duplo solteiro: R$ 206,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 27,
      nome: 'Master Express Grande Hotel',
      distancia: '8,4 km da PUCRS',
      precoBase: 'R$ 228,00',
      img: '/24H Fachadas/26 - Master Express Grande Hotel.png',
      detalhes: [
        'Apartamento single classic: R$ 228,00 a diária',
        'Apartamento duplo classic: R$ 274,00 a diária',
        'Apartamento triplo classic (3 camas): R$ 320,00 a diária',
        'Apartamento família classic (1 casal + 1 solteiro): R$ 354,00 a diária',
        'Incluso: café da manhã e Wi-Fi',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    },
    {
      id: 28,
      nome: 'Fast 10 City Hotel',
      distancia: '8,4 km da PUCRS',
      precoBase: 'R$ 251,00',
      img: '/24H Fachadas/27 - Fast10 City Hotel.png',
      detalhes: [
        'Apartamento single: R$ 251,00 a diária',
        'Apartamento duplo: R$ 285,00 a diária',
        'Incluso: café da manhã, Wi-Fi, lavanderia self service e espaço coliving com academia, churrasqueira e cozinha compartilhada',
        'Check-in: 14:00 | Check-out: 12:00'
      ]
    }
  ];

  const displayedHotels = showAll ? hoteis : hoteis.slice(0, 8);

  return (
    <section id="hospedagem" className="py-20 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-red-50/30 z-0"></div>
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 backdrop-blur-sm border border-red-200 rounded-full py-2 px-4 mb-4">
            <span className="text-sm font-medium text-red-700">HOSPEDAGEM ESTRATÉGICA</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Hospedagem com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae2724] to-[#DC2626]">
              localização estratégica
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Selecionamos as melhores opções de hospedagem com diferentes perfis e orçamentos,
            todas com fácil acesso ao evento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayedHotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden transition-all duration-300 h-[28rem] group"
            >
              {/* Foto de fundo */}
              <div className="absolute inset-0 w-full h-full bg-gray-400">
                <img
                  src={hotel.img}
                  alt={hotel.nome}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Overlay gradiente - cobrindo a área do texto */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#D38E17] via-[#D38E17]/90 to-transparent"></div>

              {/* Badge */}
              {hotel.badge && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white font-semibold text-sm rounded-full py-2 px-4 border border-white/20">
                  {hotel.badge}
                </div>
              )}

              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Glass Card com as informações */}
                <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-2xl">
                  <div className="space-y-3 text-[#B8860B]">
                    {/* Nome e localização */}
                    <div>
                      <h3 className="text-xl font-black mb-1 leading-tight drop-shadow-lg text-[#B8860B]">{hotel.nome}</h3>
                      <div className="flex items-center text-[#B8860B] text-sm mb-2 font-semibold">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0 drop-shadow-md" />
                        <span className="drop-shadow-md">{hotel.distancia}</span>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-2xl font-black drop-shadow-lg text-[#B8860B]">{hotel.precoBase}</div>
                        <div className="text-[#B8860B]/80 text-xs font-bold drop-shadow-md">por diária</div>
                      </div>
                    </div>

                    {/* Botão */}
                    <button
                      onClick={() => document.getElementById('formulario-contato')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group/button relative overflow-hidden w-full bg-[#B8860B]/20 backdrop-blur-sm hover:bg-[#B8860B] hover:text-white text-[#B8860B] font-black rounded-xl py-2.5 transition-all duration-300 flex items-center justify-center gap-2 border border-[#B8860B]/40 text-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-[#B8860B]/0 group-hover/button:bg-[#B8860B] transition-colors duration-300"></div>
                      <span className="relative z-10 drop-shadow-md">Reserve Agora</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover/button:translate-x-1 transition-transform drop-shadow-md" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold px-8 py-3 rounded-full border-2 border-[#ae2724] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">Ver todos os 28 hotéis</span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ae2724] to-[#8B1F1C] text-white font-bold px-8 py-3 rounded-full border-2 border-[#ae2724] transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10">Ver menos</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HospedagemCBEnf;