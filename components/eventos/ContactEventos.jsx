'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Building2, User, AtSign, Send, CheckCircle2, RotateCw, Calendar } from 'lucide-react';
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from '../../utils/gtm';
import { initFormTracking, registerInteraction } from '../../utils/tracking/engagement';
import { useEventosPage } from '../../utils/hooks/useSanityData';
import { portableTextToPlain } from '../../utils/lib/sanity';

const ContactEventos = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: 'Congresso/Conferência',
    participantes: 'Até 20 pessoas',
    orcamento: 'Até R$ 50.000',
    destino: '',
    dataEvento: '',
    mensagem: '',
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
          empresa: formData.empresa,
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          tipoEvento: formData.tipoEvento,
          participantes: formData.participantes,
          orcamento: formData.orcamento,
          destino: formData.destino,
          dataEvento: formData.dataEvento,
          mensagem: formData.mensagem,
          source: 'form_eventos'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          tipoEvento: formData.tipoEvento,
          participantes: formData.participantes
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
    initFormTracking('#form-contato-eventos');
  }, []);

  const { data: eventosData } = useEventosPage();

  const contact = eventosData?.contact || {
    badge: 'Contato',
    title: 'Planejamento completo para Eventos Corporativos',
    paragraph: 'Organizamos viagens para congressos, conferências, treinamentos e eventos corporativos. Cuidamos de cada detalhe para que sua equipe aproveite ao máximo.',
    features: ["Hospedagem próxima aos locais de evento", "Gestão completa de grupos", "Transfer e logística personalizada", "Suporte local durante o evento", "Relatórios detalhados de custos"],
    phone: '(51) 3516-0098',
    email: 'eventos@24h.tur.br',
    offices: ['Porto Alegre, RS – Av. Carlos Gomes 1672', 'Alphaville, SP – Alameda Rio Negro 503', 'Florianópolis, SC – Av. Luiz Boiteaux Piazza 1302']
  };

  const badgeText = portableTextToPlain(contact.badge) || contact.badge;
  const titleText = portableTextToPlain(contact.title) || contact.title;
  const paragraphText = portableTextToPlain(contact.paragraph) || contact.paragraph;
  const features = Array.isArray(contact.features) ? contact.features : [];
  const phoneNumber = eventosData?.contact?.phone || contact.phone;
  const emailAddress = eventosData?.contact?.email || contact.email;
  const offices = Array.isArray(contact.offices) ? contact.offices : contact.offices ? [contact.offices] : [];

  return (
    <section id="contato" className="relative py-24 sm:py-28 bg-gradient-to-b from-brand-dark via-brand-dark to-black overflow-hidden">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_30%_25%,rgba(245,197,24,0.12),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(220,38,38,0.12),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-5 py-2 ring-1 ring-inset ring-brand-gold/30">
            <Mail className="h-4 w-4 text-brand-gold" strokeWidth={1.5} />
            <span className="text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">{badgeText}</span>
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            {titleText.split(' ').slice(0, -2).join(' ')} <span className="text-brand-gold">{titleText.split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            {paragraphText}
          </p>
        </div>

        {/* Dark container */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,.10),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,.10),transparent_55%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left info column */}
            <div className="p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Por que escolher a 24H</p>
              <h3 className="mt-3 text-3xl sm:text-4xl text-white tracking-tight">Especialistas em eventos corporativos</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                Mais de 15 anos organizando viagens para eventos corporativos, congressos e conferências. Garantimos que sua equipe chegue descansada e pronta para o evento.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_0_3px_rgba(245,197,24,0.25)]" />
                    <span>{portableTextToPlain(item) || item}</span>
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
                    <span className="text-[15px] font-semibold text-white/90">{phoneNumber}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 ring-1 ring-brand-gold/40">
                    <Mail className="h-5 w-5 text-brand-gold" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/50">E-mail</div>
                    <span className="text-[15px] font-semibold text-white/90">{emailAddress}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-wide text-white/50 mb-2">Escritórios</div>
                <div className="space-y-2 text-[13px] font-medium text-white/80">
                  {offices.map((o, i) => (
                    <p key={i}>{portableTextToPlain(o) || o}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form column */}
            <form
              id="form-contato-eventos"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6"
              aria-label="Formulário de contato para eventos corporativos"
            >
              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                  <div className="text-sm text-emerald-200">
                    <p className="font-semibold text-emerald-300">Mensagem enviada com sucesso!</p>
                    <p className="mt-1 leading-relaxed">Recebemos seus dados e entraremos em contato em breve para organizar seu evento.</p>
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
                      <label htmlFor="empresa" className="block text-xs font-semibold tracking-wide text-white/60">Empresa</label>
                      <div className="mt-1 relative">
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="Nome da empresa"
                        />
                        <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
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
                          placeholder="seuemail@empresa.com"
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
                      <label htmlFor="tipoEvento" className="block text-xs font-semibold tracking-wide text-white/60">Tipo de evento</label>
                      <div className="mt-1 relative">
                        <select
                          id="tipoEvento"
                          name="tipoEvento"
                          value={formData.tipoEvento}
                          onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Congresso/Conferência</option>
                          <option className="bg-neutral-900">Treinamento corporativo</option>
                          <option className="bg-neutral-900">Feira/Exposição</option>
                          <option className="bg-neutral-900">Evento de incentivo</option>
                          <option className="bg-neutral-900">Outro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="participantes" className="block text-xs font-semibold tracking-wide text-white/60">Número de participantes</label>
                      <div className="mt-1 relative">
                        <select
                          id="participantes"
                          name="participantes"
                          value={formData.participantes}
                          onChange={(e) => setFormData({ ...formData, participantes: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          <option className="bg-neutral-900">Até 20 pessoas</option>
                          <option className="bg-neutral-900">21-50 pessoas</option>
                          <option className="bg-neutral-900">51-100 pessoas</option>
                          <option className="bg-neutral-900">Mais de 100 pessoas</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="destino" className="block text-xs font-semibold tracking-wide text-white/60">Destino do evento</label>
                      <div className="mt-1 relative">
                        <input
                          id="destino"
                          name="destino"
                          type="text"
                          value={formData.destino}
                          onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder="Cidade do evento"
                        />
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="dataEvento" className="block text-xs font-semibold tracking-wide text-white/60">Data do evento</label>
                      <div className="mt-1 relative">
                        <input
                          id="dataEvento"
                          name="dataEvento"
                          type="date"
                          value={formData.dataEvento}
                          onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="mensagem" className="block text-xs font-semibold tracking-wide text-white/60">Detalhes do evento</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      disabled={status === 'submitting'}
                      className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 text-sm"
                      placeholder="Conte mais sobre o evento, necessidades especiais, preferências..."
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
                      disabled={status === 'submitting' || !formData.empresa || !formData.nome || !formData.email || !formData.lgpd}
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white tracking-wide transition shadow-lg shadow-brand-red/10 ring-1 ring-brand-red/40 bg-gradient-to-b from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-neutral-900 ${
                        status === 'submitting' || !formData.empresa || !formData.nome || !formData.email || !formData.lgpd
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
                          <span>Solicitar Proposta para Evento</span>
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

export default ContactEventos;