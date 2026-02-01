import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, MapPin, DollarSign, Calendar, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function RealJobsSection() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRealJobs();
  }, []);

  const fetchRealJobs = async () => {
    try {
      setIsLoading(true);
      const response = await base44.functions.invoke('fetchRealJobs', {
        keywords: ['pesquisa clínica', 'clinical research']
      });
      
      if (response.data.jobs) {
        setJobs(response.data.jobs);
      }
    } catch (err) {
      setError(err.message);
      console.error('Erro ao buscar vagas:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 text-teal-600 animate-spin mr-2" />
        <span className="text-slate-600">Buscando vagas em tempo real...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-16 pt-12 border-t border-slate-200"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          💼 Vagas Reais de Pesquisa Clínica
        </h2>
        <p className="text-slate-600">
          Vagas em tempo real de plataformas de emprego alinhadas com seu perfil
        </p>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-amber-800">
            ⚠️ Usando dados de exemplo. Configure RAPIDAPI_KEY para vagas reais.
          </p>
        </div>
      )}

      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {job.source}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 font-medium">{job.company}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              {job.description}
            </p>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-teal-600" />
                {job.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                {job.salary}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-blue-600" />
                {job.posted ? formatDistanceToNow(new Date(job.posted), { 
                  addSuffix: true,
                  locale: ptBR 
                }) : 'Há pouco'}
              </div>
            </div>

            {/* Action Button */}
            <Button
              asChild
              className="w-full bg-teal-600 hover:bg-teal-700 text-white gap-2"
            >
              <a 
                href={job.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Vaga e Se Candidatar
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {jobs.length === 0 && !error && (
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <p className="text-slate-600">
            Nenhuma vaga encontrada no momento. Tente novamente mais tarde.
          </p>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-teal-50 rounded-lg p-4 mt-6 text-sm text-teal-800">
        <p className="font-semibold mb-2">📌 Dica:</p>
        <p>
          Para integração completa com LinkedIn e Vagas.com, configure as chaves de API nos settings do seu app. 
          As vagas serão filtradas automaticamente por relevância ao seu perfil.
        </p>
      </div>
    </motion.div>
  );
}