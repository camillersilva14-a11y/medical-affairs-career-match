import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Clinical Career Match - Descubra sua Carreira na Pesquisa Clínica",
  description = "Teste gratuito de avaliação comportamental DISC + análise de aptidões técnicas. Encontre as melhores vagas de entrada na Pesquisa Clínica em 5 minutos.",
  keywords = "pesquisa clínica, carreira pesquisa clínica, teste DISC, orientação profissional, vagas pesquisa clínica, CRA, monitor clínico, farmacovigilância, assuntos regulatórios",
  canonical,
  type = "website",
  image = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697f6e1c7c393db6e6f1476d/243e60f9c_Gemini_Generated_Image_qbu5f8qbu5f8qbu5.png"
}) {
  const siteName = "Clinical Career Match";
  const url = canonical || window.location.href;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="Clinical Career Match" />
      <meta httpEquiv="content-language" content="pt-BR" />
    </Helmet>
  );
}