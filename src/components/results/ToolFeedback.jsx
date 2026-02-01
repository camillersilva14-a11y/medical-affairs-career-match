import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ToolFeedback({ assessmentId }) {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!rating) return;

    setIsLoading(true);
    try {
      await base44.functions.invoke('submitToolFeedback', {
        assessmentId,
        rating,
        feedback: feedback.trim() || null
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 p-6 bg-white rounded-xl border border-slate-200 shadow-md"
    >
      <div className="flex items-start gap-3 mb-4">
        <MessageCircle className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
        <div>
          <h3 className="font-semibold text-slate-800">Avalie a ferramenta</h3>
          <p className="text-sm text-slate-600">Sua opinião nos ajuda a melhorar</p>
        </div>
      </div>

      {submitted && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-700 text-sm">
          <CheckCircle2 className="w-4 h-4" />
          Obrigado pelo feedback!
        </div>
      )}

      {/* Rating Stars */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-2xl transition-transform hover:scale-110 ${
              rating && star <= rating ? 'text-yellow-400' : 'text-slate-300'
            }`}
            disabled={isLoading}
          >
            ★
          </button>
        ))}
      </div>

      {/* Optional Text */}
      {rating && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4"
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Comentário opcional..."
            maxLength={200}
            className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            rows={2}
            disabled={isLoading}
          />
          <p className="text-xs text-slate-400 mt-1">
            {feedback.length}/200
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      {rating && (
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-teal-600 hover:bg-teal-700"
        >
          {isLoading ? 'Enviando...' : 'Enviar Avaliação'}
        </Button>
      )}
    </motion.div>
  );
}