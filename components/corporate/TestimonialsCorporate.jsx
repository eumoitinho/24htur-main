'use client'

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsCorporate = () => {
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
    },
    {
      name: 'Gabriela Vaz',
      text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] bg-[radial-gradient(circle_at_top_left,rgba(245,197,24,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_55%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
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
            O que nossos clientes{' '}
            <span className="text-brand-red">dizem sobre nós</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-white border border-slate-200/60 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Hover effect */}
              <div className="absolute -top-5 -left-5 h-20 w-20 bg-gradient-to-br from-brand-gold/30 to-brand-red/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Quote icon */}
              <div className="mb-6">
                <div className="h-12 w-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Quote className="h-6 w-6 text-brand-gold" strokeWidth={1.5} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              {/* Text */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-gold to-brand-red flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-brand-dark group-hover:text-brand-red transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">Cliente 24H</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCorporate;
