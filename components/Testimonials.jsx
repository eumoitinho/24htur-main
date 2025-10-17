'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const videoSrc = '/clientes/cliente.mp4';

// Componente isolado para encapsular a lógica de autoplay mudo em viewport e clique para reiniciar com áudio
const VideoTestimonialCard = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isAudible, setIsAudible] = useState(false);
  const [hasUserActivated, setHasUserActivated] = useState(false); // controla se o usuário já clicou
  const [isPlaying, setIsPlaying] = useState(false);

  // Observa viewport
  useEffect(() => {
    const el = containerRef.current;
    if(!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, { threshold: 0.55 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Controla reprodução em loop mudo enquanto visível
  useEffect(() => {
    const v = videoRef.current;
    if(!v) return;
    if(isIntersecting && !hasUserActivated){
      // garante estado silencioso e loop
      v.muted = true;
      v.loop = true;
      v.play().then(()=> setIsPlaying(true)).catch(()=>{});
    } else if(!hasUserActivated) {
      // pausa quando sai da viewport antes de interação do usuário
      v.pause();
      setIsPlaying(false);
    }
  }, [isIntersecting, hasUserActivated]);

  const handlePrimaryClick = () => {
    const v = videoRef.current;
    if(!v) return;
    // Ao primeiro clique: reinicia do zero, ativa áudio, remove loop e toca
    if(!hasUserActivated){
      setHasUserActivated(true);
      v.pause();
      v.currentTime = 0;
      v.muted = false;
      v.loop = false;
      v.play().then(()=> setIsPlaying(true)).catch(()=>{});
      setIsAudible(true);
      return;
    }
    // Após ativado, botão funciona como play/pause mantendo áudio
    if(v.paused){
      v.play().then(()=> setIsPlaying(true)).catch(()=>{});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    const v = videoRef.current;
    if(!v) return;
    v.muted = !v.muted;
    setIsAudible(!v.muted);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      viewport={{ once: true }}
      className="relative group rounded-3xl overflow-hidden ring-1 ring-brand-gold/15 bg-neutral-900 flex flex-col justify-between p-6 sm:p-8 shadow-[0_0_0_1px_rgba(245,197,24,0.2)] min-h-[520px] sm:min-h-[560px] lg:min-h-[640px]"
    >
      {/* Vídeo */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-100 scale-100 transition-transform duration-700 ease-out group-hover:scale-105"
        />
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/55 via-black/55 to-black/70 group-hover:from-black/45 group-hover:via-black/50 group-hover:to-black/65 transition-colors duration-500" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8 gap-2">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-brand-gold/25 backdrop-blur-sm flex items-center justify-center border border-brand-gold/40 group-hover:scale-105 transition-transform">
              <Quote className="h-6 w-6 text-brand-gold" />
            </div>
            <span className="text-xs px-3 py-1.5 bg-brand-gold/15 text-brand-gold rounded-full font-semibold tracking-wider">Experiência</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="relative inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10 transition"
              onClick={handlePrimaryClick}
              aria-label={hasUserActivated ? (isPlaying ? 'Pausar vídeo de depoimento' : 'Reproduzir vídeo de depoimento') : 'Iniciar vídeo com áudio'}
            >
              { !hasUserActivated ? <Play className="h-4 w-4" /> : (isPlaying ? <RotateCcw className="h-4 w-4" /> : <Play className="h-4 w-4" />) }
              { !hasUserActivated ? 'Assistir com áudio' : (isPlaying ? 'Reiniciar' : 'Reproduzir') }
            </button>
            { hasUserActivated && (
              <button
                onClick={toggleAudio}
                className="relative inline-flex items-center gap-2 text-brand-gold text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/10 transition"
                aria-label={isAudible ? 'Desativar áudio' : 'Ativar áudio'}
              >
                { isAudible ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" /> }
                { isAudible ? 'Áudio ligado' : 'Áudio desligado' }
              </button>
            )}
          </div>
        </div>
        <div className="mt-auto space-y-4">
          <p className="text-lg sm:text-xl text-white/90 font-medium leading-snug">
            Cuidamos de cada detalhe para que sua viagem seja produtiva, segura e tranquila.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Da emissão à gestão completa: suporte 24/7, curadoria de fornecedores e otimização de custos — sem surpresas.
          </p>
          <div className="flex items-center gap-2 pt-4 border-t border-white/10">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-brand-gold fill-brand-gold" />)}
            <span className="text-xs text-white/60 tracking-wide">Avaliação Máxima</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-red/30 mix-blend-overlay" />
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Christian Bittencourt',
      text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
      rating: 5
    },
    {
      name: 'Renato Saffi',
      text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-[radial-gradient(circle_at_top_left,rgba(245,197,24,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_55%)]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <Quote className="h-5 w-5 text-brand-dark" strokeWidth={1.5} />
            <span className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-dark">
              DEPOIMENTOS
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experiências reais de quem confia na <span className="text-brand-red">24H</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Relatos autênticos e uma imersão visual no cuidado que dedicamos a cada jornada.
          </motion.p>
        </motion.div>

        {/* 3-column layout: text - video - text */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-stretch">
          {/* Left testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            <div className="absolute -top-5 -left-5 h-20 w-20 bg-gradient-to-br from-brand-gold/30 to-brand-red/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-1 mb-5">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-1">
              &ldquo;{testimonials[0].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-red flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold text-lg">{testimonials[0].name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{testimonials[0].name}</div>
                <div className="text-sm text-slate-500">Cliente 24H</div>
              </div>
            </div>
          </motion.div>

          {/* Center video card (com lógica de viewport + áudio on-demand) */}
          <VideoTestimonialCard />

          {/* Right testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl bg-white border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-gradient-to-br from-brand-red/30 to-brand-gold/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-1 mb-5">
              {[...Array(testimonials[1].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-1">
              &ldquo;{testimonials[1].text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-red flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold text-lg">{testimonials[1].name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{testimonials[1].name}</div>
                <div className="text-sm text-slate-500">Cliente 24H</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;