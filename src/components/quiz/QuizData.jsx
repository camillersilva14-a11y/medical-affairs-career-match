// Dados das vagas com perfis ideais
export const jobsData = [
  {
    id: 1,
    title: "Assistente de Pesquisa Clínica (Centro)",
    salary: "R$ 2.400 - R$ 3.500",
    description: "Suporte operacional em centros de pesquisa, preenchimento de CRF, contato com participantes.",
    profile: { D: 20, I: 40, S: 70, C: 60 },
    skills: ["organizacao", "empatia", "suporte", "atencao_detalhes"],
    keywords: ["organização", "suporte", "preenchimento de CRF", "empatia"]
  },
  {
    id: 2,
    title: "Analista de Dados no Centro",
    salary: "R$ 3.000 - R$ 4.900",
    description: "Gestão e integridade de dados clínicos, análise e validação.",
    profile: { D: 30, I: 20, S: 50, C: 90 },
    skills: ["atencao_detalhes", "foco", "raciocinio_logico", "integridade"],
    keywords: ["atenção aos detalhes", "foco", "integridade de dados"]
  },
  {
    id: 3,
    title: "Coordenador de Projetos (Centro)",
    salary: "R$ 4.000 - R$ 8.000",
    description: "Gestão de estudos clínicos, liderança de equipe, interface com patrocinadores.",
    profile: { D: 70, I: 60, S: 40, C: 50 },
    skills: ["lideranca", "visao_sistemica", "comunicacao", "resiliencia", "gestao"],
    keywords: ["gestão", "visão sistêmica", "comunicação", "resiliência"]
  },
  {
    id: 4,
    title: "Farmacêutico de Pesquisa",
    salary: "R$ 4.000 - R$ 6.000",
    description: "Controle de medicamentos investigacionais, dispensação, compliance.",
    profile: { D: 30, I: 30, S: 60, C: 85 },
    skills: ["compliance", "atencao_detalhes", "controle", "tecnico"],
    keywords: ["controle de estoque", "compliance", "dispensação", "atenção técnica"]
  },
  {
    id: 5,
    title: "Analista de Pesquisa Clínica Jr (CTA)",
    salary: "R$ 4.000 - R$ 5.000",
    description: "Suporte operacional na indústria, gestão documental, conhecimento em GCP.",
    profile: { D: 35, I: 35, S: 55, C: 75 },
    skills: ["organizacao", "gcp", "documental", "suporte"],
    keywords: ["suporte operacional", "GCP", "organização documental"]
  },
  {
    id: 6,
    title: "Analista de Assuntos Regulatórios",
    salary: "R$ 4.000 - R$ 6.000",
    description: "Elaboração de dossiês, interface com ANVISA, conhecimento regulatório.",
    profile: { D: 40, I: 30, S: 45, C: 85 },
    skills: ["legislacao", "leitura_tecnica", "visao_sistemica", "documental"],
    keywords: ["legislação", "dossiês", "leitura técnica", "visão sistêmica"]
  },
  {
    id: 7,
    title: "Assistente de Farmacovigilância",
    salary: "R$ 3.500 - R$ 5.700",
    description: "Análise de eventos adversos, reporte de segurança, documentação.",
    profile: { D: 25, I: 25, S: 55, C: 80 },
    skills: ["analise", "seguranca", "ingles", "atencao_detalhes"],
    keywords: ["análise de segurança", "eventos adversos", "inglês"]
  },
  {
    id: 8,
    title: "Analista de Logística",
    salary: "R$ 3.800 - R$ 5.500",
    description: "Gestão de cadeia fria, importação de materiais, controle de prazos.",
    profile: { D: 55, I: 35, S: 45, C: 70 },
    skills: ["resolucao_problemas", "urgencia", "gestao", "prazos"],
    keywords: ["gestão de cadeia fria", "prazos", "resolução de problemas", "senso de urgência"]
  },
  {
    id: 9,
    title: "Analista de Dados Clínicos (CRO)",
    salary: "R$ 4.000 - R$ 6.000",
    description: "Design de banco de dados, validação, programação de CRF eletrônico.",
    profile: { D: 35, I: 20, S: 50, C: 90 },
    skills: ["raciocinio_logico", "banco_dados", "validacao", "tecnico"],
    keywords: ["design de banco de dados", "validação", "raciocínio lógico"]
  },
  {
    id: 10,
    title: "Monitor de Pesquisa Clínica (CRA)",
    salary: "R$ 6.000 - R$ 10.000",
    description: "Monitoramento de centros, viagens frequentes, supervisão de qualidade.",
    profile: { D: 65, I: 55, S: 35, C: 65 },
    skills: ["comunicacao", "pressao", "pensamento_critico", "viagens", "autonomia"],
    keywords: ["supervisão", "viagens", "comunicação assertiva", "pressão", "pensamento crítico"]
  },
  {
    id: 11,
    title: "Medical Writer",
    salary: "R$ 4.000 - R$ 6.000",
    description: "Redação científica, elaboração de protocolos e relatórios.",
    profile: { D: 30, I: 25, S: 60, C: 85 },
    skills: ["redacao", "ingles", "interpretacao", "isolamento", "tecnico"],
    keywords: ["redação científica", "inglês", "isolamento produtivo", "interpretação de textos"]
  }
];

// Quiz de 20 perguntas - 12 DISC + 8 Técnicas
export const quizQuestions = [
  // DISC - Dominância (D)
  {
    id: 1,
    category: "disc",
    dimension: "D",
    text: "Quando surge um problema urgente no trabalho, você geralmente:",
    options: [
      { text: "Assume a liderança e toma decisões rápidas", score: { D: 4, I: 1, S: 0, C: 1 } },
      { text: "Reúne a equipe para discutir soluções em conjunto", score: { D: 1, I: 4, S: 2, C: 1 } },
      { text: "Analisa calmamente antes de agir, mesmo sob pressão", score: { D: 1, I: 1, S: 3, C: 3 } },
      { text: "Busca dados e informações antes de qualquer decisão", score: { D: 0, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 2,
    category: "disc",
    dimension: "D",
    text: "Em relação a metas e resultados, você se considera:",
    options: [
      { text: "Altamente competitivo(a) e orientado(a) para superar objetivos", score: { D: 4, I: 2, S: 0, C: 1 } },
      { text: "Motivado(a) por reconhecimento e trabalho em equipe", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Satisfeito(a) com progresso constante e estável", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Focado(a) em qualidade e precisão, mesmo que leve mais tempo", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  // DISC - Influência (I)
  {
    id: 3,
    category: "disc",
    dimension: "I",
    text: "Em reuniões ou encontros profissionais, você tende a:",
    options: [
      { text: "Direcionar a conversa e definir os próximos passos", score: { D: 4, I: 2, S: 0, C: 1 } },
      { text: "Participar ativamente, compartilhando ideias e animando o grupo", score: { D: 1, I: 4, S: 1, C: 0 } },
      { text: "Ouvir atentamente e contribuir quando solicitado", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Observar, anotar e analisar os pontos discutidos", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 4,
    category: "disc",
    dimension: "I",
    text: "Ao conhecer pessoas novas no ambiente de trabalho, você:",
    options: [
      { text: "Avalia rapidamente se podem ser úteis para seus objetivos", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Se aproxima com facilidade e busca criar conexões", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "É cordial mas prefere conhecer aos poucos", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Observa antes de se aproximar, sendo mais reservado(a)", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  // DISC - Estabilidade (S)
  {
    id: 5,
    category: "disc",
    dimension: "S",
    text: "Como você reage a mudanças inesperadas na rotina de trabalho?",
    options: [
      { text: "Vejo como oportunidade e me adapto rapidamente", score: { D: 4, I: 3, S: 0, C: 1 } },
      { text: "Fico animado(a) com a novidade e envolvo outros na mudança", score: { D: 2, I: 4, S: 0, C: 1 } },
      { text: "Preciso de tempo para me ajustar, prefiro estabilidade", score: { D: 0, I: 0, S: 4, C: 2 } },
      { text: "Questiono a necessidade e analiso os impactos primeiro", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 6,
    category: "disc",
    dimension: "S",
    text: "Qual ambiente de trabalho te faz sentir mais produtivo(a)?",
    options: [
      { text: "Dinâmico, com desafios constantes e autonomia total", score: { D: 4, I: 2, S: 0, C: 1 } },
      { text: "Colaborativo, com interação frequente com colegas", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Harmonioso, com rotinas previsíveis e equipe unida", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Organizado, com processos claros e tempo para análise", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  // DISC - Conformidade (C)
  {
    id: 7,
    category: "disc",
    dimension: "C",
    text: "Ao executar uma tarefa importante, você prioriza:",
    options: [
      { text: "Velocidade e entrega rápida de resultados", score: { D: 4, I: 2, S: 1, C: 0 } },
      { text: "Criatividade e impacto positivo nas pessoas", score: { D: 1, I: 4, S: 1, C: 1 } },
      { text: "Consistência e fazer da forma que sempre funcionou", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Precisão e qualidade, seguindo todos os padrões", score: { D: 1, I: 0, S: 1, C: 4 } }
    ]
  },
  {
    id: 8,
    category: "disc",
    dimension: "C",
    text: "Quando recebe um feedback crítico sobre seu trabalho, você:",
    options: [
      { text: "Defende seu ponto de vista e argumenta se discorda", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Agradece e busca entender o ponto de vista do outro", score: { D: 1, I: 4, S: 2, C: 1 } },
      { text: "Aceita e tenta melhorar, mesmo que internamente discorde", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Analisa detalhadamente se o feedback é justo e preciso", score: { D: 1, I: 0, S: 1, C: 4 } }
    ]
  },
  // Mais DISC
  {
    id: 9,
    category: "disc",
    dimension: "mixed",
    text: "Em situações de conflito no trabalho, você geralmente:",
    options: [
      { text: "Enfrenta diretamente e busca resolver rapidamente", score: { D: 4, I: 1, S: 0, C: 1 } },
      { text: "Media a situação tentando manter todos satisfeitos", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Evita o confronto e busca manter a harmonia", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Analisa os fatos objetivamente antes de se posicionar", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 10,
    category: "disc",
    dimension: "mixed",
    text: "O que mais te motiva no trabalho?",
    options: [
      { text: "Conquistar resultados e superar desafios", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Reconhecimento e interação com pessoas", score: { D: 1, I: 4, S: 1, C: 0 } },
      { text: "Segurança, estabilidade e fazer parte de uma equipe", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Aprendizado técnico e fazer as coisas corretamente", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 11,
    category: "disc",
    dimension: "mixed",
    text: "Como você descreveria seu estilo de comunicação?",
    options: [
      { text: "Direto, objetivo e focado em resultados", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Entusiasta, expressivo e persuasivo", score: { D: 1, I: 4, S: 0, C: 1 } },
      { text: "Calmo, paciente e bom ouvinte", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Detalhado, preciso e baseado em fatos", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 12,
    category: "disc",
    dimension: "mixed",
    text: "Quando precisa tomar uma decisão importante, você:",
    options: [
      { text: "Decide rapidamente confiando em sua intuição", score: { D: 4, I: 2, S: 0, C: 1 } },
      { text: "Consulta pessoas de confiança para ouvir opiniões", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Pondera com calma e evita decisões precipitadas", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Pesquisa exaustivamente antes de concluir", score: { D: 1, I: 0, S: 1, C: 4 } }
    ]
  },
  // Perguntas Técnicas/Aptidão
  {
    id: 13,
    category: "technical",
    skill: "atencao_detalhes",
    text: "Ao revisar um documento extenso, você:",
    options: [
      { text: "Faz uma leitura rápida focando nos pontos principais", score: { atencao_detalhes: 1, foco: 2 } },
      { text: "Lê completamente mas pode deixar passar pequenos erros", score: { atencao_detalhes: 2, foco: 2 } },
      { text: "Revisa metodicamente, identificando a maioria dos erros", score: { atencao_detalhes: 3, foco: 3 } },
      { text: "Examina minuciosamente cada detalhe, não deixa nada passar", score: { atencao_detalhes: 4, foco: 4 } }
    ]
  },
  {
    id: 14,
    category: "technical",
    skill: "comunicacao",
    text: "Qual sua experiência com comunicação em ambientes profissionais?",
    options: [
      { text: "Prefiro comunicação escrita e evito apresentações", score: { comunicacao: 1, empatia: 2 } },
      { text: "Me comunico bem em pequenos grupos, mas evito grandes públicos", score: { comunicacao: 2, empatia: 3 } },
      { text: "Tenho facilidade para me expressar em diferentes contextos", score: { comunicacao: 3, empatia: 3 } },
      { text: "Sou excelente comunicador(a), inclusive em inglês", score: { comunicacao: 4, ingles: 3 } }
    ]
  },
  {
    id: 15,
    category: "technical",
    skill: "ingles",
    text: "Qual seu nível de inglês para ambiente profissional?",
    options: [
      { text: "Básico - leio com dificuldade, não falo", score: { ingles: 1 } },
      { text: "Intermediário - leio bem, falo com dificuldade", score: { ingles: 2 } },
      { text: "Avançado - leio, escrevo e falo com desenvoltura", score: { ingles: 3 } },
      { text: "Fluente - domínio completo, inclusive técnico", score: { ingles: 4 } }
    ]
  },
  {
    id: 16,
    category: "technical",
    skill: "raciocinio_logico",
    text: "Como você se sente trabalhando com dados e planilhas?",
    options: [
      { text: "Evito ao máximo, não é meu forte", score: { raciocinio_logico: 1, banco_dados: 1 } },
      { text: "Consigo fazer o básico quando necessário", score: { raciocinio_logico: 2, banco_dados: 2 } },
      { text: "Tenho facilidade e gosto de organizar informações", score: { raciocinio_logico: 3, banco_dados: 3 } },
      { text: "Adoro! Crio fórmulas complexas e analiso dados com prazer", score: { raciocinio_logico: 4, banco_dados: 4 } }
    ]
  },
  {
    id: 17,
    category: "technical",
    skill: "pressao",
    text: "Como você lida com prazos apertados e pressão?",
    options: [
      { text: "Fico muito ansioso(a) e meu desempenho cai", score: { pressao: 1, resiliencia: 1 } },
      { text: "Sinto desconforto mas consigo entregar", score: { pressao: 2, resiliencia: 2 } },
      { text: "Me adapto bem e mantenho a qualidade", score: { pressao: 3, resiliencia: 3 } },
      { text: "Funciono melhor sob pressão, me motiva", score: { pressao: 4, resiliencia: 4 } }
    ]
  },
  {
    id: 18,
    category: "technical",
    skill: "viagens",
    text: "Como você se sente em relação a viagens frequentes a trabalho?",
    options: [
      { text: "Não posso/quero viajar, preciso de estabilidade local", score: { viagens: 1, autonomia: 2 } },
      { text: "Viagens ocasionais são aceitáveis (1-2x/mês)", score: { viagens: 2, autonomia: 2 } },
      { text: "Gosto de viajar e tenho flexibilidade para isso", score: { viagens: 3, autonomia: 3 } },
      { text: "Adoro viajar! Quanto mais mobilidade, melhor", score: { viagens: 4, autonomia: 4 } }
    ]
  },
  {
    id: 19,
    category: "technical",
    skill: "redacao",
    text: "Sobre redação e produção de textos técnicos/científicos:",
    options: [
      { text: "Tenho muita dificuldade, não é minha habilidade", score: { redacao: 1, interpretacao: 1 } },
      { text: "Escrevo o necessário mas não é meu forte", score: { redacao: 2, interpretacao: 2 } },
      { text: "Tenho boa escrita e produzo textos de qualidade", score: { redacao: 3, interpretacao: 3 } },
      { text: "Excelente! Adoro escrever e tenho facilidade com textos complexos", score: { redacao: 4, interpretacao: 4 } }
    ]
  },
  {
    id: 20,
    category: "technical",
    skill: "trabalho_isolado",
    text: "Você prefere trabalhar de forma:",
    options: [
      { text: "Sempre em equipe, não gosto de trabalhar sozinho(a)", score: { isolamento: 1, empatia: 4 } },
      { text: "Majoritariamente em equipe, com momentos individuais", score: { isolamento: 2, empatia: 3 } },
      { text: "Equilíbrio entre trabalho individual e em grupo", score: { isolamento: 3, empatia: 2 } },
      { text: "Prefiro trabalho individual, me concentro melhor sozinho(a)", score: { isolamento: 4, foco: 4 } }
    ]
  }
];

// Função para calcular compatibilidade
export const calculateJobMatch = (discProfile, technicalScores) => {
  const results = jobsData.map(job => {
    // Calcular compatibilidade DISC (peso 60%)
    const discMatch = 100 - (
      Math.abs(job.profile.D - discProfile.D) +
      Math.abs(job.profile.I - discProfile.I) +
      Math.abs(job.profile.S - discProfile.S) +
      Math.abs(job.profile.C - discProfile.C)
    ) / 4;
    
    // Calcular compatibilidade técnica (peso 40%)
    let skillMatch = 0;
    let skillCount = 0;
    job.skills.forEach(skill => {
      if (technicalScores[skill]) {
        skillMatch += (technicalScores[skill] / 4) * 100;
        skillCount++;
      }
    });
    const techMatch = skillCount > 0 ? skillMatch / skillCount : 50;
    
    // Compatibilidade final
    const totalMatch = Math.round((discMatch * 0.6) + (techMatch * 0.4));
    
    return {
      ...job,
      matchPercentage: Math.min(100, Math.max(0, totalMatch)),
      discMatch: Math.round(discMatch),
      techMatch: Math.round(techMatch)
    };
  });
  
  return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
};

// Descrições dos perfis DISC
export const discDescriptions = {
  D: {
    name: "Dominância",
    high: "Você é determinado(a), direto(a) e orientado(a) para resultados. Gosta de desafios e toma decisões com rapidez.",
    low: "Você é mais colaborativo(a) e prefere consenso antes de agir. Evita confrontos diretos."
  },
  I: {
    name: "Influência", 
    high: "Você é comunicativo(a), entusiasta e persuasivo(a). Gosta de interagir com pessoas e criar conexões.",
    low: "Você é mais reservado(a) e prefere comunicações objetivas. Foca em fatos, não em emoções."
  },
  S: {
    name: "Estabilidade",
    high: "Você valoriza harmonia, consistência e trabalho em equipe. É paciente e leal.",
    low: "Você se adapta bem a mudanças e prefere ambientes dinâmicos. Gosta de variedade."
  },
  C: {
    name: "Conformidade",
    high: "Você preza por qualidade, precisão e seguir regras. É analítico(a) e detalhista.",
    low: "Você é mais flexível com regras e prefere liberdade para inovar. Foco em big picture."
  }
};