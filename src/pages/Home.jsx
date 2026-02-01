import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Brain, 
  Target, 
  Briefcase, 
  CheckCircle2,
  Sparkles,
  Users,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Análise DISC",
      description: "Metodologia científica para mapear seu perfil comportamental"
    },
    {
      icon: Target,
      title: "Match Preciso",
      description: "Cruzamento inteligente entre seu perfil e as vagas do mercado"
    },
    {
      icon: Briefcase,
      title: "Carreiras reais",
      description: "Vagas reais do mercado de Pesquisa Clínica com faixas salariais"
    }
  ];

  const steps = [
    "Responda 20 perguntas sobre seu comportamento e habilidades",
    "Nosso algoritmo analisa seu perfil DISC e aptidões técnicas",
    "Receba recomendações personalizadas das melhores vagas para você"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-12 md:pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full text-teal-700 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Especialista em Recrutamento para Pesquisa Clínica
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Descubra as áreas de atuação que mais combinam com você na{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Pesquisa Clínica
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Faça o teste de avaliação comportamental + análise de aptidões técnicas e encontre as melhores vagas para você
          </p>

          {/* CTA Button */}
          <Link to={createPageUrl('Quiz')}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-teal-200 hover:shadow-xl transition-all duration-300"
            >
              Iniciar Avaliação Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <p className="text-sm text-slate-500 mt-4">
            ⏱️ Apenas 5 minutos • 🔒 100% confidencial
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12">
            Como funciona?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.15 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "11", label: "Vagas Mapeadas" },
            { value: "R$ 2.4k", label: "Salário Inicial" },
            { value: "R$ 10k", label: "Salário Máximo" },
            { value: "20", label: "Perguntas" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}