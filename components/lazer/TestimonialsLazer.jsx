'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLazerPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const TestimonialsLazer = () => {
  const { data: lazerData } = useLazerPage();

  const defaultTestimonials = [
    {
      text: 'Escritório sempre atento às necessidades dos clientes, e muito proativo nas resoluções de toda e qualquer situação.',
      author: 'Christian Bittencourt',
      rating: 5
    },
    {
      text: 'Já fiz várias viagens com a 24H. Sempre excelentes no atendimento, realizaram nossos sonhos de viagens e passeios com conforto e tranquilidade.',
      author: 'Renato Saffi',
      rating: 5
    },
    {
      text: 'Os pacotes foram de excelente custo-benefício. Ficamos em ótimos hotéis e os passeios propostos foram excelentes pedidas.',
      author: 'Gabriela Vaz',
      rating: 5
    }
  ];

  // Garante que sempre seja um array
  const testimonials = Array.isArray(lazerData?.testimonials?.items)
    ? lazerData.testimonials.items
    : (lazerData?.testimonials && !Array.isArray(lazerData.testimonials) && lazerData.testimonials.items)
      ? lazerData.testimonials.items
      : defaultTestimonials;

  const title = lazerData?.testimonials?.title || 'DEPOIMENTOS';
  const subtitle = lazerData?.testimonials?.subtitle || 'O que nossos clientes dizem sobre nós';

  return (
    <section className="py-14 sm:py-16 lg:py-18 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {portableTextToPlain(title) || title}
          </h2>
          <p className="text-lg text-slate-600">
            {portableTextToPlain(subtitle) || subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const text = testimonial.text || testimonial.name || '';
            const author = testimonial.author || testimonial.name || '';
            const rating = testimonial.rating || 5;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  &ldquo;{portableTextToPlain(text)}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-dark">
                      {author ? author.split(' ').map(n => n[0]).join('') : ''}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {portableTextToPlain(author)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsLazer;

