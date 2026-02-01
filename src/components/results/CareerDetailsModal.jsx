import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Target, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CareerDetailsModal({ isOpen, job, onClose }) {
  if (!isOpen || !job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
                <p className="text-teal-100">{job.salary}</p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Sobre a Função</h3>
                <p className="text-slate-600 leading-relaxed">{job.fullDescription}</p>
              </div>

              {/* Requirements */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-slate-800">Requisitos</h3>
                </div>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-semibold text-slate-800">Dicas para Ingressar</h3>
                </div>
                <ul className="space-y-2">
                  {job.tips.map((tip, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-semibold shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Palavras-chave</h3>
                <div className="flex flex-wrap gap-2">
                  {job.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <Button
                  onClick={onClose}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Entendi, fechar
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}