'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Building2, User, AtSign, Send, CheckCircle2, RotateCw } from 'lucide-react';
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from '../../utils/gtm';
import { initFormTracking, registerInteraction } from '../../utils/tracking/engagement';

const ContactLazer = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Viagem de lazer',
    destino: '',
    periodo: 'Até 3 meses',
    orcamento: 'Até R$ 5.000',
    pessoas: '1-2 pessoas',
    mensagem: '',
    lgpd: false
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      // Enviar para API route que se comunica com Google Sheets
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          assunto: formData.assunto,
          destino: formData.destino,
          periodo: formData.periodo,
          orcamento: formData.orcamento,
          pessoas: formData.pessoas,
          mensagem: formData.mensagem,
          source: 'form_lazer'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          assunto: formData.assunto,
          destino: formData.destino
        });
        registerInteraction('form_submit');
        setFormData(prev => ({
          ...prev,
          email: '',
          telefone: '',
          mensagem: '',
          lgpd: false
        }));
      } else {
        throw new Error(result.error || 'Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  useEffect(() => {
    initFormTracking('#form-contato-lazer');
  }, []);

  return (
    <section id="contato" className="relative py-24 sm:py-28 bg-gradient-to-b from-brand-dark via-brand-dark to-black overflow-hidden">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_30%_25%,rgba(245,197,24,0.12),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(220,38,38,0.12),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-5 py-2 ring-1 ring-inset ring-brand-gold/30">
            <Mail className="h-4 w-4 text-brand-gold" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">Contato</span>
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Planeje sua próxima <span className="text-brand-gold">Viagem de Lazer</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Roteiros personalizados, experiências únicas e momentos inesquecíveis. Conte com nossa expertise para criar a viagem perfeita para você e sua família.
          </p>
        </div>

        {/* Dark container */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,.10),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,.10),transparent_55%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left info column */}
            <div className="p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Por que escolher a 24H</p>
              <h3 className="mt-3 text-3xl sm:text-4xl text-white tracking-tight">Viagens que marcam a vida</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                Criamos experiências únicas e memoráveis, cuidando de cada detalhe para que você só precise se preocupar em aproveitar cada momento.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {["Roteiros personalizados", "Suporte 24/7 durante a viagem", "Parcerias exclusivas", "Experiências locais autênticas", "Planejamento completo"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_0_3px_rgba(245,197,24,0.25)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Direct contact */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 ring-1 ring-brand-gold/40">
                    <Phone className="h-5 w-5 text-brand-gold" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/50">Telefone</div>
                    <span className="text-[15px] font-semibold text-white/90">
                      (51) 3516-0098
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 ring-1 ring-brand-gold/40">
                    <Mail className="h-5 w-5 text-brand-gold" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/50">E-mail</div>
                    <span className="text-[15px] font-semibold text-white/90">
                      lazer@24h.tur.br
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-wide text-white/50 mb-2">Escritórios</div>
                <div className="space-y-2 text-[13px] font-medium text-white/80">
                  <p>Porto Alegre, RS – Av. Carlos Gomes 1672</p>
                  <p>Alphaville, SP – Alameda Rio Negro 503</p>
                  <p>Florianópolis, SC – Av. Luiz Boiteaux Piazza 1302</p>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <form
              id="form-contato-lazer"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6"
              aria-label="Formulário de contato para viagens de lazer"
            >
              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                  <div className="text-sm text-emerald-200">
                    <p className="font-semibold text-emerald-300">Mensagem enviada com sucesso!</p>
                    <p className="mt-1 leading-relaxed">Recebemos seus dados e entraremos em contato em breve para planejar sua viagem.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 inline-flex items-center gap-1 text-emerald-300 hover:underline"
                    >
                      <RotateCw className="h-4 w-4" /> Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="text-sm text-red-200">
                    <p className="font-semibold text-red-300">Erro ao enviar mensagem</p>
                    <p className="mt-1 leading-relaxed">Ocorreu um erro temporário. Tente novamente.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 inline-flex items-center gap-1 text-red-300 hover:underline"
                    >
                      <RotateCw className="h-4 w-4" /> Tentar novamente
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold tracking-wide text-white/60">Seu nome</label>
                      <div className="mt-1 relative">
                        <input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="Seu nome completo"
                        />
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-white/60">E-mail</label>
                      <div className="mt-1 relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="seuemail@email.com"
                        />
                        <AtSign className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-semibold tracking-wide text-white/60">Telefone</label>
                      <div className="mt-1 relative">
                        <input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="(00) 00000-0000"
                        />
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="destino" className="block text-xs font-semibold tracking-wide text-white/60">Destino de interesse</label>
                      <div className="mt-1 relative">
                        <input
                          id="destino"
                          name="destino"
                          type="text"
                          value={formData.destino}
                          onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="Ex: Europa, Caribe, Brasil..."
                        />
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="periodo" className="block text-xs font-semibold tracking-wide text-white/60">Quando pretende viajar</label>
                      <div className="mt-1 relative">
                        <select
                          id="periodo"
                          name="periodo"
                          value={formData.periodo}
                          onChange={(e) => setFormData({ ...formData, periodo: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Até 3 meses</option>
                          <option className="bg-neutral-900">3 a 6 meses</option>
                          <option className="bg-neutral-900">6 a 12 meses</option>
                          <option className="bg-neutral-900">Mais de 1 ano</option>
                          <option className="bg-neutral-900">Ainda não sei</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="orcamento" className="block text-xs font-semibold tracking-wide text-white/60">Orçamento estimado</label>
                      <div className="mt-1 relative">
                        <select
                          id="orcamento"
                          name="orcamento"
                          value={formData.orcamento}
                          onChange={(e) => setFormData({ ...formData, orcamento: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Até R$ 5.000</option>
                          <option className="bg-neutral-900">R$ 5.000 - R$ 10.000</option>
                          <option className="bg-neutral-900">R$ 10.000 - R$ 20.000</option>
                          <option className="bg-neutral-900">R$ 20.000 - R$ 50.000</option>
                          <option className="bg-neutral-900">Acima de R$ 50.000</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="pessoas" className="block text-xs font-semibold tracking-wide text-white/60">Quantas pessoas</label>
                      <div className="mt-1 relative">
                        <select
                          id="pessoas"
                          name="pessoas"
                          value={formData.pessoas}
                          onChange={(e) => setFormData({ ...formData, pessoas: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">1-2 pessoas</option>
                          <option className="bg-neutral-900">3-4 pessoas</option>
                          <option className="bg-neutral-900">5-8 pessoas</option>
                          <option className="bg-neutral-900">Mais de 8 pessoas</option>
                        </select>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="mensagem" className="block text-xs font-semibold tracking-wide text-white/60">Conte mais sobre sua viagem dos sonhos</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      disabled={status === 'submitting'}
                      className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 text-sm"
                      placeholder="Descreva o tipo de experiência que você busca, atividades de interesse, preferências de hospedagem..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="lgpd"
                      type="checkbox"
                      required
                      checked={formData.lgpd}
                      onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                      disabled={status === 'submitting'}
                      className="mt-1 rounded text-brand-gold focus:ring-brand-gold/40 bg-neutral-800 border-white/20"
                    />
                    <label htmlFor="lgpd" className="text-[13px] leading-relaxed text-white/60">
                      Concordo em ser contatado e autorizo o uso dos meus dados conforme a LGPD.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting' || !formData.nome || !formData.email || !formData.lgpd}
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white tracking-wide transition shadow-lg shadow-brand-red/10 ring-1 ring-brand-red/40 bg-gradient-to-b from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-neutral-900 ${
                        status === 'submitting' || !formData.nome || !formData.email || !formData.lgpd
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <RotateCw className="h-4 w-4 animate-spin" strokeWidth={1.5} />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" strokeWidth={1.5} />
                          <span>Quero receber minha proposta</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLazer;