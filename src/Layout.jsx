import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FlaskConical } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            to={createPageUrl('Home')} 
            className="flex items-center gap-2 text-slate-800 hover:text-teal-600 transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
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
    </div>
  );
}