import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from 'lucide-react';

export default function ProfileComparison({ userProfile, jobs }) {
  const [expandedJob, setExpandedJob] = useState(null);

  const getDimensionDifference = (userScore, jobScore) => {
    const diff = Math.abs(userScore - jobScore);
    if (diff <= 10) return { level: 'Excelente', color: 'text-emerald-600 bg-emerald-50', emoji: '✓' };
    if (diff <= 20) return { level: 'Bom', color: 'text-teal-600 bg-teal-50', emoji: '◐' };
    if (diff <= 30) return { level: 'Moderado', color: 'text-amber-600 bg-amber-50', emoji: '◑' };
    return { level: 'Diferente', color: 'text-slate-600 bg-slate-50', emoji: '◯' };
  };

  const dimensions = ['D', 'I', 'S', 'C'];
  const dimensionNames = { D: 'Dominância', I: 'Influência', S: 'Estabilidade', C: 'Conformidade' };

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Compatibilidade de Perfil</h3>
      <p className="text-sm text-slate-600 mb-6">
        Veja como seu perfil DISC se alinha com os perfis ideais de cada vaga
      </p>

      <div className="space-y-3">
        {jobs.slice(0, 5).map((job, index) => {
          const isExpanded = expandedJob === index;

          return (
            <motion.div
              key={index}
              layout
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedJob(isExpanded ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-slate-800">{job.title}</h4>
                  <div className="flex gap-2 mt-2">
                    {dimensions.map(dim => {
                      const userScore = userProfile[dim];
                      const jobScore = job.profile[dim];
                      const { level, color } = getDimensionDifference(userScore, jobScore);
                      
                      return (
                        <Badge key={dim} className={`text-xs ${color}`}>
                          {dim}: {Math.abs(userScore - jobScore)}%
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-slate-200 bg-slate-50"
                  >
                    <div className="p-5 space-y-4">
                      {dimensions.map(dim => {
                        const userScore = userProfile[dim];
                        const jobScore = job.profile[dim];
                        const { level, color, emoji } = getDimensionDifference(userScore, jobScore);

                        return (
                          <div key={dim} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-slate-700">{dimensionNames[dim]} ({dim})</span>
                              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}>
                                {emoji} {level}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-slate-500 text-xs mb-1">Seu perfil</p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-teal-500"
                                      style={{ width: `${userScore}%` }}
                                    />
                                  </div>
                                  <span className="font-semibold text-slate-700 w-8">{userScore}%</span>
                                </div>
                              </div>
                              <div>
                                <p className="text-slate-500 text-xs mb-1">Ideal para vaga</p>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-slate-400"
                                      style={{ width: `${jobScore}%` }}
                                    />
                                  </div>
                                  <span className="font-semibold text-slate-700 w-8">{jobScore}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <p className="text-xs text-slate-500 mt-6 text-center">
        Compatibilidade perfeita não é necessária - você pode ser bem-sucedido em qualquer vaga com dedicação
      </p>
    </div>
  );
}