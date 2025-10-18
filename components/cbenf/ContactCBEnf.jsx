'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, User, AtSign, Send, CheckCircle2, RotateCw, Calendar, Users } from 'lucide-react';
import { trackFormSubmit } from '../../utils/gtm';
import { initFormTracking, registerInteraction } from '../../utils/tracking/engagement';

const ContactCBEnf = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    profissao: 'Enfermeiro(a)',
    instituicao: '',
    pacote: 'Pacote Básico - Hospedagem + Transfer',
    periodo: 'Todo o evento (4 dias)',
    pessoas: '1 pessoa',
    observacoes: '',
    lgpd: false
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          profissao: formData.profissao,
          instituicao: formData.instituicao,
          pacote: formData.pacote,
          periodo: formData.periodo,
          pessoas: formData.pessoas,
          observacoes: formData.observacoes,
          source: 'form_cbenf',
          evento: 'CBEnf 2024'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          evento: 'CBEnf 2024',
          pacote: formData.pacote
        });
        registerInteraction('form_submit');
        setFormData(prev => ({
          ...prev,
          email: '',
          telefone: '',
          observacoes: '',
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
    initFormTracking('#form-contato-cbenf');
  }, []);

  return (
    <section id="formulario-contato" className="relative py-24 sm:py-28 bg-gradient-to-b from-brand-dark via-brand-dark to-black overflow-hidden">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_30%_25%,rgba(245,197,24,0.12),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(220,38,38,0.12),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-5 py-2 ring-1 ring-inset ring-brand-gold/30">
            <Mail className="h-4 w-4 text-brand-gold" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">Reserve sua vaga</span>
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Garanta sua participação no <span className="text-brand-gold">CBEnf 2024</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Preencha o formulário e receba uma proposta personalizada para sua viagem ao Congresso Brasileiro de Enfermagem em Goiânia.
          </p>
        </div>

        {/* Dark container */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,.10),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,.10),transparent_55%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left info column */}
            <div className="p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">CBEnf 2024 - Goiânia</p>
              <h3 className="mt-3 text-3xl sm:text-4xl text-white tracking-tight">Pacotes exclusivos para congressistas</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                Oferecemos soluções completas para sua participação no maior evento de enfermagem do Brasil, com hospedagem estratégica e suporte especializado.
              </p>

              <ul className="mt-8 space-y-3 text-[15px]">
                {[
                  "Hospedagem próxima ao convention center",
                  "Transfer aeroporto-hotel-evento",
                  "Suporte presencial durante o congresso",
                  "Tarifas especiais para grupos",
                  "City tour opcional em Goiânia"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_0_3px_rgba(245,197,24,0.25)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Event info */}
              <div className="mt-10 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-semibold">Informações do Evento</span>
                </div>
                <div className="space-y-1 text-sm text-white/80">
                  <p><span className="text-white/60">Data:</span> 12 a 15 de Novembro de 2024</p>
                  <p><span className="text-white/60">Local:</span> Goiânia Convention Center</p>
                  <p><span className="text-white/60">Esperados:</span> 15.000+ profissionais</p>
                </div>
              </div>

              {/* Contact info */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                      eventos@24h.tur.br
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <form
              id="form-contato-cbenf"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6"
              aria-label="Formulário de reserva CBEnf 2024"
            >
              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                  <div className="text-sm text-emerald-200">
                    <p className="font-semibold text-emerald-300">Solicitação enviada com sucesso!</p>
                    <p className="mt-1 leading-relaxed">Recebemos seus dados e entraremos em contato em breve com uma proposta personalizada para o CBEnf 2024.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 inline-flex items-center gap-1 text-emerald-300 hover:underline"
                    >
                      <RotateCw className="h-4 w-4" /> Nova solicitação
                    </button>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="text-sm text-red-200">
                    <p className="font-semibold text-red-300">Erro ao enviar solicitação</p>
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
                      <label htmlFor="nome" className="block text-xs font-semibold tracking-wide text-white/60">Nome completo</label>
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
                      <label htmlFor="profissao" className="block text-xs font-semibold tracking-wide text-white/60">Profissão</label>
                      <div className="mt-1 relative">
                        <select
                          id="profissao"
                          name="profissao"
                          value={formData.profissao}
                          onChange={(e) => setFormData({ ...formData, profissao: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Enfermeiro(a)</option>
                          <option className="bg-neutral-900">Técnico(a) em Enfermagem</option>
                          <option className="bg-neutral-900">Auxiliar de Enfermagem</option>
                          <option className="bg-neutral-900">Estudante de Enfermagem</option>
                          <option className="bg-neutral-900">Coordenador(a) de Enfermagem</option>
                          <option className="bg-neutral-900">Outros</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="instituicao" className="block text-xs font-semibold tracking-wide text-white/60">Instituição</label>
                      <div className="mt-1 relative">
                        <input
                          id="instituicao"
                          name="instituicao"
                          type="text"
                          value={formData.instituicao}
                          onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pl-3 text-sm"
                          placeholder="Hospital, clínica, universidade..."
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="pacote" className="block text-xs font-semibold tracking-wide text-white/60">Pacote de interesse</label>
                      <div className="mt-1 relative">
                        <select
                          id="pacote"
                          name="pacote"
                          value={formData.pacote}
                          onChange={(e) => setFormData({ ...formData, pacote: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Pacote Básico - Hospedagem + Transfer</option>
                          <option className="bg-neutral-900">Pacote Completo - Aéreo + Hospedagem + Transfer</option>
                          <option className="bg-neutral-900">Pacote Premium - Completo + City Tour</option>
                          <option className="bg-neutral-900">Personalizado</option>
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
                          <option className="bg-neutral-900">1 pessoa</option>
                          <option className="bg-neutral-900">2 pessoas</option>
                          <option className="bg-neutral-900">3-5 pessoas</option>
                          <option className="bg-neutral-900">6-10 pessoas</option>
                          <option className="bg-neutral-900">Mais de 10 pessoas</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="observacoes" className="block text-xs font-semibold tracking-wide text-white/60">Observações adicionais</label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      rows={4}
                      value={formData.observacoes}
                      onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                      disabled={status === 'submitting'}
                      className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 text-sm"
                      placeholder="Necessidades especiais, preferências de hospedagem, etc."
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
                          <span>Solicitar Proposta CBEnf 2024</span>
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

export default ContactCBEnf;