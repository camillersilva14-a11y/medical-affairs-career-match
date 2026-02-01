import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

export default function QuestionCard({ question, selectedAnswer, onSelect, questionNumber }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 border border-slate-100">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              question.category === 'disc' 
                ? "bg-indigo-50 text-indigo-600" 
                : "bg-teal-50 text-teal-600"
            )}>
              {question.category === 'disc' ? 'Comportamental' : 'Aptidão Técnica'}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-relaxed">
            {question.text}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => onSelect(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all duration-300",
                  "border-2 hover:border-teal-300 hover:bg-teal-50/50",
                  selectedAnswer === index
                    ? "border-teal-500 bg-teal-50 shadow-md shadow-teal-100"
                    : "border-slate-200 bg-white"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium shrink-0 mt-0.5 transition-colors",
                    selectedAnswer === index
                      ? "bg-teal-500 text-white"
                      : "bg-slate-100 text-slate-500"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={cn(
                    "text-base transition-colors",
                    selectedAnswer === index ? "text-slate-800 font-medium" : "text-slate-600"
                  )}>
                    {option.text}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}