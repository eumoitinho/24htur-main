'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Building2, User, AtSign, Send, CheckCircle2, RotateCw } from 'lucide-react';
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from '../utils/gtm';
import { initFormTracking, registerInteraction } from '../utils/tracking/engagement';
import { getSiteSettings } from '../utils/lib/sanity';

const Contact = () => {
  const [siteSettings, setSiteSettings] = useState(null);
  const [formData, setFormData] = useState({
    empresa: '',
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Proposta corporativa',
    pax: 'Até 10 viagens',
    interesses: [],
    mensagem: '',
    lgpd: false
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: ''
  });

  // Carregar settings do Sanity
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await getSiteSettings();
        setSiteSettings(settings);
      } catch (error) {
        console.warn('Usando dados fallback para o Contact:', error);
      }
    };

    loadSettings();
  }, []);

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
          empresa: formData.empresa,
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          assunto: formData.assunto,
          mensagem: formData.mensagem,
          source: 'form_corporate'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        trackFormSubmit('success', {
          assunto: formData.assunto,
          pax: formData.pax
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

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    // Capturar lead primeiro
    trackFormSubmit('success', {
      assunto: 'Agendamento Video Chamada',
      source: 'schedule_modal'
    });
    registerInteraction('schedule_lead');

    // Depois redirecionar para o Calendly (usa a constante calendlyUrl definida no escopo)
    const calendlyUrlFromSettings = siteSettings?.contactForm?.calendlyUrl || 'https://calendly.com/liciane-24h';
    window.open(calendlyUrlFromSettings, '_blank');
    setShowScheduleModal(false);
    setScheduleData({ nome: '', email: '', empresa: '', telefone: '' });
  };

  useEffect(() => {
    initFormTracking('#form-contato-principal');
  }, []);

  // Fallback data
  const fallbackInteressesOptions = [
    { value: 'aereo', label: 'Passagens aéreas' },
    { value: 'hospedagem', label: 'Hospedagem' },
    { value: 'transporte', label: 'Transporte terrestre' },
    { value: 'relatorios', label: 'Relatórios/BI' },
    { value: 'incentivo', label: 'Viagens de incentivo' },
    { value: 'outros', label: 'Outros' }
  ];

  // Dados do formulário do Sanity ou fallback
  const formConfig = siteSettings?.contactForm || {};
  const contactInfo = siteSettings?.contactInfo || {};

  const formTitle = formConfig.title || 'Consultoria e Gestão de Viagens Corporativas';
  const formSubtitle = formConfig.subtitle || 'Otimize processos, reduza custos e garanta a melhor experiência para colaboradores. Fale com nossos especialistas e receba uma proposta personalizada.';
  const interessesOptions = formConfig.interessesOptions || fallbackInteressesOptions;
  const assuntoOptions = formConfig.assuntoOptions || ['Proposta corporativa', 'Suporte operacional', 'Parcerias', 'Outros'];
  const lgpdText = formConfig.lgpdText || 'Concordo em ser contatado e autorizo o uso dos meus dados conforme a LGPD.';
  const submitButtonText = formConfig.submitButtonText || 'Enviar mensagem';
  const calendlyUrl = formConfig.calendlyUrl || 'https://calendly.com/liciane-24h';

  const mainPhone = contactInfo.mainPhone || '(51) 3516-0098';
  const mainEmail = contactInfo.mainEmail || 'contato@24h.tur.br';
  const offices = contactInfo.offices || [
    { city: 'Porto Alegre', state: 'RS', address: 'Av. Carlos Gomes 1672' },
    { city: 'Alphaville', state: 'SP', address: 'Alameda Rio Negro 503' },
    { city: 'Florianópolis', state: 'SC', address: 'Av. Luiz Boiteaux Piazza 1302' }
  ];

  // Labels dos campos
  const labels = formConfig.fields || {};
  const empresaLabel = labels.empresa?.label || 'Empresa';
  const empresaPlaceholder = labels.empresa?.placeholder || 'Nome da empresa';
  const nomeLabel = labels.nome?.label || 'Seu nome';
  const nomePlaceholder = labels.nome?.placeholder || 'Seu nome completo';
  const emailLabel = labels.email?.label || 'E-mail';
  const emailPlaceholder = labels.email?.placeholder || 'seuemail@empresa.com';
  const telefoneLabel = labels.telefone?.label || 'Telefone';
  const telefonePlaceholder = labels.telefone?.placeholder || '(00) 00000-0000';
  const assuntoLabel = labels.assunto?.label || 'Assunto';
  const mensagemLabel = labels.mensagem?.label || 'Mensagem';
  const mensagemPlaceholder = labels.mensagem?.placeholder || 'Conte um pouco sobre sua necessidade...';

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
            {formTitle.split('Viagens Corporativas').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-brand-gold">Viagens Corporativas</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            {formSubtitle}
          </p>
        </div>

        {/* Dark container based on template */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,197,24,.10),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,.10),transparent_55%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left info column */}
            <div className="p-6 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Por que escolher a 24H</p>
              <h3 className="mt-3 text-3xl sm:text-4xl text-white tracking-tight">Centralize e evolua sua gestão</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                Implementamos modelos inteligentes de controle, experiência e governança em viagens. Mais produtividade para sua equipe e decisões guiadas por dados reais.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {["Gestão ponta a ponta", "Relatórios e BI em tempo real", "Otimização de custos e compliance", "Suporte 24/7 especializado", "Incentivo e eventos corporativos"].map(item => (
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
                      {mainPhone}
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
                      {mainEmail}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-wide text-white/50 mb-2">Escritórios</div>
                <div className="space-y-2 text-[13px] font-medium text-white/80">
                  {offices.map((office, index) => (
                    <p key={index}>{office.city}, {office.state} – {office.address}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form column */}
            <form
              id="form-contato-principal"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 space-y-6"
              aria-label="Formulário de contato"
            >
              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 flex items-start gap-3 backdrop-blur-sm" role="status" aria-live="polite">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                  <div className="text-sm text-emerald-200">
                    <p className="font-semibold text-emerald-300">Mensagem enviada com sucesso!</p>
                    <p className="mt-1 leading-relaxed">Recebemos seus dados e entraremos em contato em breve.</p>
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
                      <label htmlFor="empresa" className="block text-xs font-semibold tracking-wide text-white/60">{empresaLabel}</label>
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
                          placeholder={empresaPlaceholder}
                        />
                        <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold tracking-wide text-white/60">{nomeLabel}</label>
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
                          placeholder={nomePlaceholder}
                        />
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-white/60">{emailLabel}</label>
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
                          placeholder={emailPlaceholder}
                        />
                        <AtSign className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-semibold tracking-wide text-white/60">{telefoneLabel}</label>
                      <div className="mt-1 relative">
                        <input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 pr-12 pl-3 text-sm"
                          placeholder={telefonePlaceholder}
                        />
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-xs font-semibold tracking-wide text-white/60">{assuntoLabel}</label>
                      <div className="mt-1 relative">
                        <select
                          id="assunto"
                          name="assunto"
                          value={formData.assunto}
                          onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                          disabled={status === 'submitting'}
                          className="w-full h-12 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white text-sm pl-3 pr-10"
                        >
                          {assuntoOptions.map((option, index) => (
                            <option key={index} className="bg-neutral-900">{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>

                  {/* Direct contact card */}
                  <div className="mt-7">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-800/70 p-5 sm:p-6 shadow-inner shadow-black/40">
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(245,197,24,0.18),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(220,38,38,0.18),transparent_60%)] opacity-60" />
                      <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-gold to-brand-red flex items-center justify-center ring-1 ring-white/15 shadow-lg shadow-black/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="16" rx="2" ry="2"/><path d="M17 22H7"/><path d="M12 16v6"/></svg>
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Video Call</p>
                            <p className="text-white font-semibold tracking-tight leading-snug">Agende uma<br/>video-chamada</p>
                          </div>
                        </div>
                        <div className="sm:ml-auto flex flex-col sm:items-end gap-3 min-w-[180px]">
                          <p className="text-xs text-white/50 max-w-[220px] leading-relaxed">Converse com nossa especialista e acelere sua implantação.</p>
                          <button
                            type="button"
                            disabled={!formData.empresa || !formData.nome || !formData.email || !formData.lgpd}
                            onClick={async () => {
                              if (!formData.empresa || !formData.nome || !formData.email || !formData.lgpd) return;
                              
                              try {
                                // Enviar lead para API route
                                await fetch('/api/leads', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    empresa: formData.empresa,
                                    nome: formData.nome,
                                    email: formData.email,
                                    telefone: formData.telefone,
                                    assunto: 'Agendamento Video Chamada',
                                    mensagem: 'Lead capturado via botão de agendamento',
                                    source: 'video_call_cta'
                                  })
                                });

                                // Tracking
                                trackFormSubmit('success', {
                                  assunto: 'Agendamento Video Chamada',
                                  source: 'video_call_cta',
                                  empresa: formData.empresa,
                                  nome: formData.nome,
                                  email: formData.email,
                                  telefone: formData.telefone
                                });
                                registerInteraction('video_call_cta_click');

                                // Redirecionar para Calendly
                                window.open(calendlyUrl, '_blank');
                              } catch (error) {
                                console.error('Erro ao capturar lead:', error);
                                // Mesmo com erro, redireciona (para não perder conversão)
                                window.open(calendlyUrl, '_blank');
                              }
                            }}
                            className={`inline-flex items-center gap-2 rounded-xl font-semibold text-xs tracking-wide px-4 py-2 shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold/60 focus-visible:ring-offset-neutral-800 ${
                              !formData.empresa || !formData.nome || !formData.email || !formData.lgpd
                                ? 'opacity-50 cursor-not-allowed bg-neutral-600 text-white/70'
                                : 'bg-gradient-to-r from-brand-gold to-brand-red text-neutral-900 shadow-brand-gold/20 hover:shadow-brand-red/30'
                            }`}
                            aria-label="Agendar video chamada 24H"
                          >
                            Agendar agora
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="mensagem" className="block text-xs font-semibold tracking-wide text-white/60">{mensagemLabel}</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      disabled={status === 'submitting'}
                      className="mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-brand-gold/30 text-white placeholder:text-white/30 text-sm"
                      placeholder={mensagemPlaceholder}
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
                      {lgpdText}
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
                          <span>{submitButtonText}</span>
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

      {/* Modal de Agendamento */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-brand-dark">Agendar Video Chamada</h3>
              <p className="text-sm text-slate-600 mt-2">
                Preencha seus dados para agendar uma conversa com nossa especialista.
              </p>
            </div>
            
            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome completo</label>
                <input
                  type="text"
                  required
                  value={scheduleData.nome}
                  onChange={(e) => setScheduleData({...scheduleData, nome: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">E-mail profissional</label>
                <input
                  type="email"
                  required
                  value={scheduleData.email}
                  onChange={(e) => setScheduleData({...scheduleData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                <input
                  type="text"
                  required
                  value={scheduleData.empresa}
                  onChange={(e) => setScheduleData({...scheduleData, empresa: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  required
                  value={scheduleData.telefone}
                  onChange={(e) => setScheduleData({...scheduleData, telefone: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-red text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Agendar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;