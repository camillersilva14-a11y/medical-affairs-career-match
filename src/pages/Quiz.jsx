import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Loader2, User, Mail, Briefcase, Target, MapPin, Building2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import SEO from '@/components/SEO';

import ProgressBar from '@/components/quiz/ProgressBar';
import QuestionCard from '@/components/quiz/QuestionCard';
import { quizQuestions, calculateJobMatch } from '@/components/quiz/QuizData';

export default function Quiz() {
  const navigate = useNavigate();
  const [step, setStep] = useState('intro'); // intro, quiz, processing
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInfo, setUserInfo] = useState({ 
    name: '', 
    email: '', 
    currentArea: '',
    careerGoals: '',
    relocationPreference: 'flexible',
    companyCulture: 'flexible'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartQuiz = () => {
    if (userInfo.name.trim()) {
      setStep('quiz');
    }
  };

  const handleSelectAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const question = quizQuestions[currentQuestion];
    const newAnswers = [...answers, {
      question_id: question.id,
      answer: question.options[selectedAnswer].text,
      score: question.options[selectedAnswer].score
    }];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      processResults(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevAnswer = answers[currentQuestion - 1];
      const question = quizQuestions[currentQuestion - 1];
      const answerIndex = question.options.findIndex(opt => opt.text === prevAnswer?.answer);
      setSelectedAnswer(answerIndex >= 0 ? answerIndex : null);
      setAnswers(answers.slice(0, -1));
    }
  };

  const processResults = async (finalAnswers) => {
    setStep('processing');
    setIsSubmitting(true);

    // Calculate DISC Profile
    const discScores = { D: 0, I: 0, S: 0, C: 0 };
    const technicalScores = {};

    finalAnswers.forEach(answer => {
      const score = answer.score;
      if (score.D !== undefined) discScores.D += score.D;
      if (score.I !== undefined) discScores.I += score.I;
      if (score.S !== undefined) discScores.S += score.S;
      if (score.C !== undefined) discScores.C += score.C;

      // Technical scores
      Object.keys(score).forEach(key => {
        if (!['D', 'I', 'S', 'C'].includes(key)) {
          technicalScores[key] = (technicalScores[key] || 0) + score[key];
        }
      });
    });

    // Normalize DISC to percentages
    const discTotal = discScores.D + discScores.I + discScores.S + discScores.C;
    const discProfile = {
      D: Math.round((discScores.D / discTotal) * 100),
      I: Math.round((discScores.I / discTotal) * 100),
      S: Math.round((discScores.S / discTotal) * 100),
      C: Math.round((discScores.C / discTotal) * 100)
    };

    // Normalize technical scores
    Object.keys(technicalScores).forEach(key => {
      technicalScores[key] = Math.min(4, technicalScores[key]);
    });

    // Calculate job matches with user preferences
    const recommendedJobs = calculateJobMatch(
      discProfile, 
      technicalScores,
      {
        careerGoals: userInfo.careerGoals,
        relocationPreference: userInfo.relocationPreference,
        companyCulture: userInfo.companyCulture
      },
      [] // No excluded jobs on first assessment
    )
      .slice(0, 5)
      .map(job => ({
        job_title: job.title,
        match_percentage: job.matchPercentage,
        salary_range: job.salary,
        description: job.description,
        disc_match: job.discMatch,
        tech_match: job.techMatch,
        keywords: job.keywords,
        feedback: 'none'
      }));

    // Buscar vagas reais do mercado
    let realMarketJobs = [];
    try {
      const jobSearchResponse = await base44.functions.invoke('searchClinicalResearchJobs', {
        userProfile: {
          user_name: userInfo.name,
          current_area: userInfo.currentArea,
          career_goals: userInfo.careerGoals,
          relocation_preference: userInfo.relocationPreference,
          company_culture: userInfo.companyCulture,
          disc_profile: discProfile
        },
        excludedJobs: []
      });

      if (jobSearchResponse.data?.success && jobSearchResponse.data.jobs?.length > 0) {
        realMarketJobs = jobSearchResponse.data.jobs.slice(0, 5).map(job => {
          // Calcular match baseado em alinhamento com objetivos
          let careerGoalBonus = 0;
          if (userInfo.careerGoals) {
            const goalsLower = userInfo.careerGoals.toLowerCase();
            const titleLower = job.title.toLowerCase();
            const descLower = job.description.toLowerCase();

            // Verificar alinhamento
            const keywords = ['gestão', 'liderança', 'dados', 'monitor', 'regulatório', 
                             'farmacovigilância', 'crescimento'];
            keywords.forEach(keyword => {
              if (goalsLower.includes(keyword) && 
                  (titleLower.includes(keyword) || descLower.includes(keyword))) {
                careerGoalBonus += 5;
              }
            });
          }

          // Bonus por cultura alinhada
          let cultureBonus = 0;
          if (userInfo.companyCulture !== 'flexible' && 
              job.company_culture === userInfo.companyCulture) {
            cultureBonus = 10;
          }

          const baseMatch = 75;
          const finalMatch = Math.min(100, baseMatch + careerGoalBonus + cultureBonus);

          return {
            job_title: job.title,
            company: job.company || 'Empresa não divulgada',
            match_percentage: finalMatch,
            salary_range: job.salary_range || 'A combinar',
            description: job.description,
            location: job.location,
            work_type: job.work_type || 'Presencial',
            company_culture: job.company_culture || 'flexible',
            career_growth: job.career_growth,
            job_url: job.job_url,
            disc_match: 70,
            tech_match: 80,
            career_goal_match: Math.min(100, 50 + careerGoalBonus * 2),
            keywords: ['vaga real', 'mercado atual'],
            feedback: 'none',
            is_real_job: true
          };
        });
      }
    } catch (error) {
      console.log('Não foi possível buscar vagas do mercado:', error);
    }

    // Combinar vagas calculadas com vagas reais do mercado
    const allRecommendedJobs = [...recommendedJobs, ...realMarketJobs];

    // Save to database
    const assessment = await base44.entities.Assessment.create({
      user_name: userInfo.name,
      user_email: userInfo.email,
      current_area: userInfo.currentArea,
      career_goals: userInfo.careerGoals,
      relocation_preference: userInfo.relocationPreference,
      company_culture: userInfo.companyCulture,
      answers: finalAnswers,
      disc_profile: discProfile,
      technical_scores: technicalScores,
      recommended_jobs: allRecommendedJobs,
      excluded_jobs: [],
      status: 'completed'
    });

    // Navigate to results
    setTimeout(() => {
      navigate(createPageUrl(`Results?id=${assessment.id}`));
    }, 2000);
  };

  if (step === 'intro') {
    return (
      <>
        <SEO 
          title="Avaliação de Carreira - Clinical Career Match"
          description="Responda 26 perguntas sobre seu perfil comportamental e aptidões técnicas. Receba recomendações personalizadas das melhores vagas na Pesquisa Clínica."
          keywords="teste DISC, avaliação de carreira, perfil comportamental, aptidões técnicas, quiz pesquisa clínica"
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              Vamos começar!
            </h1>
            <p className="text-slate-600">
              Primeiro, nos conte um pouco sobre você
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 border border-slate-100">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Seu nome *
                </Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome completo"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className="h-12 rounded-xl border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>



              <div className="space-y-2">
                <Label htmlFor="area" className="text-slate-700 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Área de formação (opcional)
                </Label>
                <Input
                  id="area"
                  placeholder="Ex: Enfermagem, Farmácia, Administração..."
                  value={userInfo.currentArea}
                  onChange={(e) => setUserInfo({ ...userInfo, currentArea: e.target.value })}
                  className="h-12 rounded-xl border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals" className="text-slate-700 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Objetivos de carreira (opcional)
                </Label>
                <Textarea
                  id="goals"
                  placeholder="Ex: Desejo trabalhar com gestão de projetos, busco crescimento rápido..."
                  value={userInfo.careerGoals}
                  onChange={(e) => setUserInfo({ ...userInfo, careerGoals: e.target.value })}
                  className="rounded-xl border-slate-200 focus:border-teal-500 focus:ring-teal-500 min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="culture" className="text-slate-700 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Cultura empresarial preferida
                </Label>
                <Select 
                  value={userInfo.companyCulture} 
                  onValueChange={(value) => setUserInfo({ ...userInfo, companyCulture: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Flexível</SelectItem>
                    <SelectItem value="startup">Startup/Inovação</SelectItem>
                    <SelectItem value="corporate">Corporativa/Estruturada</SelectItem>
                    <SelectItem value="research">Pesquisa/Acadêmica</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleStartQuiz}
                disabled={!userInfo.name.trim()}
                className="w-full h-12 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl shadow-lg shadow-teal-200 disabled:opacity-50"
              >
                Começar Avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            📋 26 perguntas • ⏱️ ~6 minutos
          </p>
        </motion.div>
      </div>
      </>
    );
  }

  if (step === 'processing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-white animate-spin" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Analisando seu perfil...
          </h2>
          <p className="text-slate-600">
            Estamos cruzando suas respostas com as vagas ideais
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-slate-600">
            Olá, <span className="font-medium text-teal-600">{userInfo.name}</span>!
          </p>
        </div>

        {/* Progress */}
        <ProgressBar current={currentQuestion + 1} total={quizQuestions.length} />

        {/* Question */}
        <QuestionCard
          question={quizQuestions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelect={handleSelectAnswer}
          questionNumber={currentQuestion + 1}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 shadow-lg shadow-teal-200 disabled:opacity-50"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Ver Resultados' : 'Próxima'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}