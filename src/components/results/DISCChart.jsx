import React from 'react';
import { motion } from 'framer-motion';
import { discDescriptions } from '../quiz/QuizData';

export default function DISCChart({ profile }) {
  const dimensions = [
    { key: 'D', color: 'from-red-400 to-rose-500', bgColor: 'bg-red-50', textColor: 'text-red-600' },
    { key: 'I', color: 'from-amber-400 to-orange-500', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
    { key: 'S', color: 'from-emerald-400 to-green-500', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
    { key: 'C', color: 'from-blue-400 to-indigo-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' }
  ];

  const maxScore = Math.max(profile.D, profile.I, profile.S, profile.C);
  const dominantProfile = dimensions.find(d => profile[d.key] === maxScore)?.key;

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">Seu Perfil DISC</h3>
      
      {/* Bars */}
      <div className="space-y-4 mb-8">
        {dimensions.map((dim, index) => (
          <div key={dim.key} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`font-medium ${dim.textColor}`}>
                {dim.key} - {discDescriptions[dim.key].name}
              </span>
              <span className="text-sm font-semibold text-slate-600">
                {profile[dim.key]}%
              </span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${dim.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${profile[dim.key]}%` }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Interpretation */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-700 text-lg mb-4">O que seu perfil DISC revela:</h4>
        
        {/* Destaque do perfil dominante */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-5 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{dominantProfile}</span>
            </div>
            <div>
              <h5 className="font-semibold text-teal-700 mb-1">
                Seu perfil dominante: {discDescriptions[dominantProfile].name}
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                {discDescriptions[dominantProfile].high}
              </p>
            </div>
          </div>
        </div>

        {/* Explicação detalhada de cada dimensão */}
        <div className="space-y-3">
          <p className="text-sm text-slate-600 italic">
            Cada dimensão do DISC representa um aspecto do seu comportamento profissional:
          </p>
          {dimensions.map((dim) => {
            const isHigh = profile[dim.key] >= 50;
            const description = isHigh 
              ? discDescriptions[dim.key].high 
              : discDescriptions[dim.key].low;
            
            if (profile[dim.key] < 25) return null;
            
            return (
              <div key={dim.key} className={`p-4 rounded-xl ${dim.bgColor} border border-${dim.key === dominantProfile ? dim.textColor.replace('text-', '') + '/30' : 'transparent'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-semibold ${dim.textColor} text-lg`}>
                    {dim.key}
                  </span>
                  <span className="text-slate-700 font-medium">
                    {discDescriptions[dim.key].name}
                  </span>
                  <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${dim.bgColor} ${dim.textColor}`}>
                    {profile[dim.key]}%
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isHigh ? '✓' : '○'} <span className="font-medium">{isHigh ? 'Alto:' : 'Moderado/Baixo:'}</span> {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}