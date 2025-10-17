'use client'

import React, { useState, useEffect } from 'react';
import {
  Search, Filter, Download, Trash2, Calendar, Mail, Phone,
  Building2, MessageSquare, MapPin, Clock, User, Lock,
  ChevronLeft, ChevronRight, X, LogOut, RefreshCw, CheckCircle
} from 'lucide-react';

const AdminPanel = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const leadsPerPage = 12;

  // Verificar autenticação ao carregar
  useEffect(() => {
    const isAuth = sessionStorage.getItem('adminAuthenticated');
    if (isAuth === 'true') {
      setAuthenticated(true);
      fetchLeads();
    }
  }, []);

  // Filtrar leads quando mudar busca ou filtro
  useEffect(() => {
    filterLeads();
  }, [searchTerm, selectedFilter, leads]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const response = await fetch(`/api/leads?password=${encodeURIComponent(password)}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setAuthenticated(true);
        sessionStorage.setItem('adminAuthenticated', 'true');
        setLeads(data.leads || []);
        setPassword('');
      } else {
        setAuthError('Senha incorreta');
      }
    } catch (error) {
      setAuthError('Erro ao autenticar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const savedPassword = sessionStorage.getItem('adminPassword') || password;
      const response = await fetch(`/api/leads?password=${encodeURIComponent(savedPassword)}`);
      const data = await response.json();

      if (data.success) {
        setLeads(data.leads || []);
        // Salvar senha temporariamente para refresh
        if (password) {
          sessionStorage.setItem('adminPassword', password);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    // Aplicar filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.empresa?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.telefone?.includes(searchTerm)
      );
    }

    // Aplicar filtro de categoria
    if (selectedFilter !== 'all') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const week = new Date(today);
      week.setDate(week.getDate() - 7);
      const month = new Date(today);
      month.setMonth(month.getMonth() - 1);

      filtered = filtered.filter(lead => {
        const leadDate = new Date(lead.timestamp || lead['Data/Hora']);
        switch (selectedFilter) {
          case 'today':
            return leadDate >= today;
          case 'week':
            return leadDate >= week;
          case 'month':
            return leadDate >= month;
          default:
            return true;
        }
      });
    }

    setFilteredLeads(filtered);
    setCurrentPage(1);
  };

  const handleDelete = async (index) => {
    setLoading(true);
    try {
      const savedPassword = sessionStorage.getItem('adminPassword');
      const response = await fetch('/api/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: savedPassword,
          index: index + 2 // +2 porque linha 1 é cabeçalho
        })
      });

      if (response.ok) {
        setLeads(leads.filter((_, i) => i !== index));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Erro ao deletar lead:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Data/Hora', 'Empresa', 'Nome', 'Email', 'Telefone', 'Assunto', 'Mensagem', 'Origem'];
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => [
        new Date(lead.timestamp || lead['Data/Hora']).toLocaleString('pt-BR'),
        lead.empresa || '',
        lead.nome || '',
        lead.email || '',
        lead.telefone || '',
        lead.assunto || '',
        `"${(lead.mensagem || '').replace(/"/g, '""')}"`,
        lead.origem || lead.source || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_24h_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminPassword');
    setLeads([]);
    setPassword('');
  };

  // Paginação
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  // Tela de login
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-dark via-brand-dark to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-neutral-900 rounded-3xl p-8 shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center justify-center mb-8">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-red flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">Painel Administrativo</h1>
            <p className="text-white/60 text-center text-sm mb-8">24H Viagens Corporativas</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-white/60 mb-2">
                  Senha de Acesso
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-neutral-800 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 text-white placeholder:text-white/30 px-4"
                  placeholder="Digite a senha administrativa"
                />
              </div>

              {authError && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-gold to-brand-red text-brand-dark font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    Autenticando...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    Acessar Painel
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Painel principal
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-dark via-brand-dark to-black">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Painel de Leads</h1>
              <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-semibold">
                {filteredLeads.length} leads
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white/70 hover:text-white transition"
              >
                <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={exportToCSV}
                disabled={filteredLeads.length === 0}
                className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="h-4 w-4" />
                Exportar CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filtros */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome, email, empresa ou telefone..."
                className="w-full h-12 pl-10 pr-4 rounded-xl bg-neutral-900 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 text-white placeholder:text-white/40"
              />
            </div>

            <div className="flex gap-2">
              {[
                { value: 'all', label: 'Todos' },
                { value: 'today', label: 'Hoje' },
                { value: 'week', label: '7 dias' },
                { value: 'month', label: '30 dias' }
              ].map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl font-medium transition ${
                    selectedFilter === filter.value
                      ? 'bg-brand-gold/20 text-brand-gold ring-1 ring-brand-gold/30'
                      : 'bg-neutral-900 text-white/60 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Leads */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <RefreshCw className="h-8 w-8 text-brand-gold animate-spin" />
          </div>
        ) : currentLeads.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-neutral-900 mb-4">
              <Search className="h-10 w-10 text-white/40" />
            </div>
            <p className="text-white/60 text-lg">Nenhum lead encontrado</p>
            <p className="text-white/40 text-sm mt-2">Tente ajustar seus filtros de busca</p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {currentLeads.map((lead, index) => {
                const actualIndex = indexOfFirstLead + index;
                const leadDate = new Date(lead.timestamp || lead['Data/Hora']);

                return (
                  <div
                    key={actualIndex}
                    className="relative group bg-neutral-900 rounded-2xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition cursor-pointer"
                    onClick={() => setSelectedLead(lead)}
                  >
                    {/* Badge de origem */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 rounded-lg bg-brand-gold/20 text-brand-gold text-xs font-semibold">
                        {lead.source || lead.origem || 'Website'}
                      </span>
                    </div>

                    {/* Informações do Lead */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {lead.nome || 'Sem nome'}
                        </h3>
                        <p className="text-sm text-white/60 flex items-center gap-1">
                          <Building2 className="h-3.5 w-3.5" />
                          {lead.empresa || 'Empresa não informada'}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {lead.email && (
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <Mail className="h-4 w-4 text-white/40" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                        )}

                        {lead.telefone && (
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <Phone className="h-4 w-4 text-white/40" />
                            <span>{lead.telefone}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Clock className="h-4 w-4 text-white/40" />
                          <span>
                            {leadDate.toLocaleDateString('pt-BR')} às {leadDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>

                      {lead.assunto && (
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-xs text-white/50 mb-1">Assunto</p>
                          <p className="text-sm text-white/90">{lead.assunto}</p>
                        </div>
                      )}

                      {lead.mensagem && (
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-xs text-white/50 mb-1">Mensagem</p>
                          <p className="text-sm text-white/70 line-clamp-2">{lead.mensagem}</p>
                        </div>
                      )}
                    </div>

                    {/* Botão de deletar */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteConfirm(actualIndex);
                      }}
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-neutral-900 text-white/60 hover:text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page => {
                      if (totalPages <= 7) return true;
                      if (page === 1 || page === totalPages) return true;
                      if (Math.abs(page - currentPage) <= 1) return true;
                      if (currentPage <= 3 && page <= 4) return true;
                      if (currentPage >= totalPages - 2 && page >= totalPages - 3) return true;
                      return false;
                    })
                    .map((page, index, array) => (
                      <React.Fragment key={page}>
                        {index > 0 && array[index - 1] !== page - 1 && (
                          <span className="px-2 text-white/40">...</span>
                        )}
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition ${
                            currentPage === page
                              ? 'bg-brand-gold/20 text-brand-gold'
                              : 'bg-neutral-900 text-white/60 hover:text-white hover:bg-neutral-800'
                          }`}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    ))}
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-neutral-900 text-white/60 hover:text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal de Detalhes do Lead */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-neutral-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ring-1 ring-white/10">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Detalhes do Lead</h2>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white/70 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Nome</p>
                  <p className="text-white">{selectedLead.nome || 'Não informado'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Empresa</p>
                  <p className="text-white">{selectedLead.empresa || 'Não informada'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Email</p>
                  <p className="text-white">{selectedLead.email || 'Não informado'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Telefone</p>
                  <p className="text-white">{selectedLead.telefone || 'Não informado'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Assunto</p>
                  <p className="text-white">{selectedLead.assunto || 'Não informado'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Origem</p>
                  <p className="text-white">{selectedLead.source || selectedLead.origem || 'Website'}</p>
                </div>
              </div>

              {selectedLead.mensagem && (
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Mensagem</p>
                  <div className="rounded-xl bg-neutral-800 p-4">
                    <p className="text-white whitespace-pre-wrap">{selectedLead.mensagem}</p>
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold tracking-wide text-white/50 mb-2">Data/Hora</p>
                <p className="text-white">
                  {new Date(selectedLead.timestamp || selectedLead['Data/Hora']).toLocaleString('pt-BR', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                {selectedLead.email && (
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="flex-1 px-4 py-2 rounded-xl bg-brand-gold/20 text-brand-gold hover:bg-brand-gold/30 transition flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Enviar Email
                  </a>
                )}
                {selectedLead.telefone && (
                  <a
                    href={`tel:${selectedLead.telefone}`}
                    className="flex-1 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Ligar
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Delete */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-neutral-900 rounded-2xl p-6 max-w-sm w-full ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Confirmar exclusão</h3>
            <p className="text-white/60 text-sm mb-6">
              Tem certeza que deseja excluir este lead? Esta ação não pode ser desfeita.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={loading}
                className="flex-1 px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    Excluir
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;