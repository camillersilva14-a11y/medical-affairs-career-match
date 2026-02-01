import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, Users, ThumbsUp, ThumbsDown, ExternalLink, Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function JobCard({ job, rank, delay = 0, onFeedback, jobIndex }) {
  const [feedback, setFeedback] = useState(job.feedback || 'none');
  const getRankStyle = (rank) => {
    switch(rank) {
      case 1:
        return "border-orange-400 bg-gradient-to-br from-orange-100 to-orange-50";
      case 2:
        return "border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50";
      case 3:
        return "border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50";
      default:
        return "border-slate-200 bg-white";
    }
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 80) return "text-emerald-600 bg-emerald-50";
    if (percentage >= 60) return "text-teal-600 bg-teal-50";
    if (percentage >= 40) return "text-amber-600 bg-amber-50";
    return "text-slate-600 bg-slate-50";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl border-2 p-6 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-shadow",
        getRankStyle(rank)
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {rank <= 3 && (
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg",
              rank === 1 && "bg-orange-500 text-white",
              rank === 2 && "bg-orange-400 text-white",
              rank === 3 && "bg-orange-300 text-white"
            )}>
              {rank}º
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
              {job.isRealJob && (
                <Badge className="bg-purple-100 text-purple-700 text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Vaga Real
                </Badge>
              )}
            </div>
            {job.company && (
              <p className="text-sm text-slate-500 mt-0.5">{job.company}</p>
            )}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium text-emerald-600">{job.salary}</span>
              {job.location && (
                <span className="text-xs text-slate-400">• {job.location}</span>
              )}
              {job.workType && (
                <span className="text-xs text-slate-400">• {job.workType}</span>
              )}
            </div>
          </div>
        </div>
        <div className={cn(
          "px-4 py-2 rounded-full font-bold text-lg",
          getMatchColor(job.matchPercentage)
        )}>
          {job.matchPercentage}%
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {job.description}
      </p>

      {/* Match Breakdown */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-lg">
          <Users className="w-4 h-4 text-indigo-500" />
          <div>
            <span className="text-xs text-slate-500 block">Perfil DISC</span>
            <span className="text-sm font-semibold text-indigo-600">{job.discMatch}%</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-white/80 rounded-lg">
          <Target className="w-4 h-4 text-teal-500" />
          <div>
            <span className="text-xs text-slate-500 block">Aptidão Técnica</span>
            <span className="text-sm font-semibold text-teal-600">{job.techMatch}%</span>
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.keywords.map((keyword, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="bg-white/80 text-slate-600 font-normal text-xs"
          >
            {keyword}
          </Badge>
        ))}
      </div>

      {/* Job URL for real jobs */}
      {job.jobUrl && (
        <a 
          href={job.jobUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 mb-4"
        >
          <ExternalLink className="w-4 h-4" />
          Ver vaga completa
        </a>
      )}

      {/* Feedback Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        <span className="text-xs text-slate-500 font-medium">Esta vaga te interessa?</span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={feedback === 'interested' ? 'default' : 'outline'}
            onClick={() => {
              setFeedback('interested');
              onFeedback?.(jobIndex, 'interested');
            }}
            className={cn(
              "gap-1.5 h-8",
              feedback === 'interested' && "bg-emerald-600 hover:bg-emerald-700 text-white"
            )}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            Sim
          </Button>
          <Button
            size="sm"
            variant={feedback === 'not_interested' ? 'default' : 'outline'}
            onClick={() => {
              setFeedback('not_interested');
              onFeedback?.(jobIndex, 'not_interested');
            }}
            className={cn(
              "gap-1.5 h-8",
              feedback === 'not_interested' && "bg-slate-600 hover:bg-slate-700 text-white"
            )}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            Não
          </Button>
        </div>
      </div>
    </motion.div>
  );
}