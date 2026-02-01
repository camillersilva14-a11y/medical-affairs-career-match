import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-500">
          Pergunta {current} de {total}
        </span>
        <span className="text-sm font-medium text-teal-600">
          {Math.round(percentage)}% concluído
        </span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}