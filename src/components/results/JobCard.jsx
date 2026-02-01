import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Target, Users } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function JobCard({ job, rank, delay = 0 }) {
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
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
            <div className="flex items-center gap-1 text-emerald-600 mt-1">
              <span className="text-sm font-medium">{job.salary}</span>
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
      <div className="flex flex-wrap gap-2">
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
    </motion.div>
  );
}