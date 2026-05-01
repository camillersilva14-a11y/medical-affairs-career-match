import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function FeedbackStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function load() {
      const assessments = await base44.entities.Assessment.filter({ status: 'completed' });
      const withFeedback = assessments.filter(a => a.tool_feedback?.rating);
      if (withFeedback.length === 0) return;
      const avg = withFeedback.reduce((sum, a) => sum + a.tool_feedback.rating, 0) / withFeedback.length;
      setStats({ avg: avg.toFixed(1), count: withFeedback.length, total: assessments.length });
    }
    load();
  }, []);

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="mt-16 flex flex-col items-center gap-3"
    >
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`w-6 h-6 ${star <= Math.round(parseFloat(stats.avg)) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
          />
        ))}
        <span className="text-2xl font-bold text-slate-800 ml-2">{stats.avg}</span>
        <span className="text-slate-500 text-sm">/ 5</span>
      </div>
      <p className="text-sm text-slate-500">
        Avaliado por <span className="font-semibold text-slate-700">{stats.count}</span> usuário{stats.count !== 1 ? 's' : ''} •{' '}
        <span className="font-semibold text-slate-700">{stats.total}</span> avaliações realizadas
      </p>
    </motion.div>
  );
}