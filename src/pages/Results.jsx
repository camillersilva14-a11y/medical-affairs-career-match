import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  RefreshCw, 
  Trophy,
  Sparkles,
  Loader2
} from 'lucide-react';
import { base44 } from '@/api/base44Client';

import JobCard from '@/components/results/JobCard';
import DISCChart from '@/components/results/DISCChart';

export default function Results() {
  const [assessment, setAssessment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAssessment();
  }, []);

  const loadAssessment = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
      const assessments = await base44.entities.Assessment.filter({ id });
      if (assessments.length > 0) {
        setAssessment(assessments[0]);
      }
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Resultado não encontrado
          </h2>
          <Link to={createPageUrl('Quiz')}>
            <Button className="bg-teal-600 hover:bg-teal-700">
              Fazer nova avaliação
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const topJob = assessment.recommended_jobs?.[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Avaliação Concluída
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Parabéns, {assessment.user_name}!
          </h1>
          <p className="text-lg text-slate-600">
            Analisamos seu perfil e encontramos as melhores oportunidades para você
          </p>
        </motion.div>

        {/* Top Match Highlight */}
        {topJob && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-6 md:p-8 text-white mb-10 shadow-xl shadow-teal-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <p className="text-teal-100 text-sm mb-1">Sua melhor compatibilidade</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{topJob.job_title}</h2>
                <p className="text-teal-100 mb-4">{topJob.salary_range}</p>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-2xl font-bold">{topJob.match_percentage}%</span>
                    <span className="text-sm ml-1">compatível</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* DISC Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <DISCChart profile={assessment.disc_profile} />
        </motion.div>

        {/* All Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Suas Top 5 Vagas Recomendadas
            </h2>
            <p className="text-slate-600 text-sm">
              💼 Vagas de entrada para iniciar sua carreira em Pesquisa Clínica
            </p>
          </div>
          <div className="grid gap-4">
            {assessment.recommended_jobs?.map((job, index) => (
              <JobCard
                key={index}
                job={{
                  title: job.job_title,
                  salary: job.salary_range,
                  description: job.description,
                  matchPercentage: job.match_percentage,
                  discMatch: job.disc_match,
                  techMatch: job.tech_match,
                  keywords: job.keywords || []
                }}
                rank={index + 1}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to={createPageUrl('Quiz')}>
            <Button variant="outline" className="w-full sm:w-auto">
              <RefreshCw className="mr-2 w-4 h-4" />
              Refazer Avaliação
            </Button>
          </Link>
          <Link to={createPageUrl('Home')}>
            <Button variant="ghost" className="w-full sm:w-auto text-slate-600">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          Esta avaliação é uma ferramenta de orientação. As faixas salariais são baseadas em dados do mercado brasileiro atualizados em janeiro de 2026.
        </motion.p>
      </div>
    </div>
    </>
  );
}