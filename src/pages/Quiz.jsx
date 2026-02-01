import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Loader2, User, Mail, Briefcase } from 'lucide-react';
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
  const [userInfo, setUserInfo] = useState({ name: '', email: '', currentArea: '' });
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

    // Calculate job matches
    const recommendedJobs = calculateJobMatch(discProfile, technicalScores)
      .slice(0, 5)
      .map(job => ({
        job_title: job.title,
        match_percentage: job.matchPercentage,
        salary_range: job.salary,
        description: job.description,
        disc_match: job.discMatch,
        tech_match: job.techMatch,
        keywords: job.keywords
      }));

    // Save to database
    const assessment = await base44.entities.Assessment.create({
      user_name: userInfo.name,
      user_email: userInfo.email,
      current_area: userInfo.currentArea,
      answers: finalAnswers,
      disc_profile: discProfile,
      technical_scores: technicalScores,
      recommended_jobs: recommendedJobs,
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