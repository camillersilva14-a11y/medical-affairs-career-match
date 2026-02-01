import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FlaskConical } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Simple Header */}
      <header className="bg-slate-50/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
          <Link
            to={createPageUrl('Home')}
            className="flex items-center gap-2 text-slate-800 hover:text-teal-600 transition-colors">

            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f6e1c7c393db6e6f1476d/7acad2786_Gemini_Generated_Image_2rll5m2rll5m2rll1.png"
              alt="Clinical Career Match" className="w-24 h-24 object-contain rounded-full" />


            <span className="font-semibold text-lg hidden sm:block">
              Clinical Career Match
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            © 2024 Clinical Career Match • Especialista em Recrutamento para Pesquisa Clínica
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Metodologia DISC + Análise de Aptidões Técnicas
          </p>
        </div>
      </footer>
    </div>);

}