import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp, BookOpen } from 'lucide-react';

export default function CareerTips({ discProfile }) {
  const dimensions = [
    { key: 'D', name: 'Dominância', icon: Target },
    { key: 'I', name: 'Influência', icon: TrendingUp },
    { key: 'S', name: 'Estabilidade', icon: BookOpen },
    { key: 'C', name: 'Conformidade', icon: Lightbulb }
  ];

  const getTips = (dimension, score) => {
    const baseKey = dimension;
    
    const tipMap = {
      D: {
        high: [
          "Procure por oportunidades que ofereçam desafios e autonomia",
          "Desenvolva habilidades de delegação e empatia com o time",
          "Busque projetos onde você possa impactar resultados rapidamente"
        ],
        low: [
          "Trabalhe em ambientes colaborativos e de consenso",
          "Desenvolva confiança para tomar decisões mais assertivas",
          "Aproveite sua capacidade de mediar conflitos"
        ]
      },
      I: {
        high: [
          "Explore funções que envolvem networking e relacionamento",
          "Desenvolva comunicação escrita para equilibrar a oral",
          "Use seu carisma para influenciar positivamente resultados"
        ],
        low: [
          "Valorize seu foco técnico e capacidade analítica",
          "Trabalhe em funções especializadas que valorizam profundidade",
          "Desenvolva comunicação 1-a-1 mais que apresentações em grupo"
        ]
      },
      S: {
        high: [
          "Procure por ambientes com rotina previsível e equipe estável",
          "Aprenda a lidar melhor com mudanças graduais",
          "Seu comprometimento é um ativo valioso - valorize isso"
        ],
        low: [
          "Busque projetos dinâmicos com múltiplos desafios",
          "Trabalhe em startups ou áreas de inovação",
          "Sua adaptabilidade é um diferencial competitivo"
        ]
      },
      C: {
        high: [
          "Procure por funções que exigem precisão e conformidade",
          "Considere especializações técnicas e certificações",
          "Sua atenção aos detalhes é crítica em pesquisa clínica"
        ],
        low: [
          "Explore funções estratégicas e inovadoras",
          "Trabalhe em ambientes que valorizam criatividade",
          "Desenvolva habilidades de pensamento sistêmico"
        ]
      }
    };

    const tips = tipMap[baseKey];
    return score >= 50 ? tips.high : tips.low;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-amber-500" />
        <h3 className="text-xl font-semibold text-slate-800">Dicas para Seu Desenvolvimento Profissional</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {dimensions.map((dim, idx) => {
          const score = discProfile[dim.key];
          const tips = getTips(dim.key, score);
          const Icon = dim.icon;

          return (
            <motion.div
              key={dim.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{dim.name}</h4>
                  <p className="text-xs text-slate-500">Seu score: {score}%</p>
                </div>
              </div>

              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="text-sm text-slate-700 flex gap-2">
                    <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}