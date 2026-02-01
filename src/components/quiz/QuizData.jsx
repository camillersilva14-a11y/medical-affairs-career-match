// Dados das vagas com perfis ideais
export const jobsData = [
  {
    id: 1,
    title: "Assistente de Pesquisa Clínica",
    salary: "R$ 3.000 - R$ 5.800",
    description: "Suporte operacional em centros de pesquisa clínica, preenchimento de CRF, contato com participantes.",
    profile: { D: 20, I: 40, S: 70, C: 60 },
    skills: ["organizacao", "empatia", "suporte", "atencao_detalhes"],
    keywords: ["organização", "suporte", "preenchimento de CRF", "empatia"]
  },
  {
    id: 2,
    title: "Analista de Dados Clínicos",
    salary: "R$ 3.500 - R$ 6.500",
    description: "Gestão e integridade de dados clínicos, análise e validação.",
    profile: { D: 30, I: 20, S: 50, C: 90 },
    skills: ["atencao_detalhes", "foco", "raciocinio_logico", "integridade"],
    keywords: ["atenção aos detalhes", "foco", "integridade de dados"]
  },
  {
    id: 3,
    title: "Coordenador de Projetos",
    salary: "R$ 4.400 - R$ 9.300",
    description: "Gestão de estudos clínicos, liderança de equipe, interface com patrocinadores.",
    profile: { D: 70, I: 60, S: 40, C: 50 },
    skills: ["lideranca", "visao_sistemica", "comunicacao", "resiliencia", "gestao"],
    keywords: ["gestão", "visão sistêmica", "comunicação", "resiliência"]
  },
  {
    id: 4,
    title: "Farmacêutico de Pesquisa",
    salary: "R$ 4.500 - R$ 7.000",
    description: "Controle de medicamentos investigacionais, dispensação, compliance.",
    profile: { D: 30, I: 30, S: 60, C: 85 },
    skills: ["compliance", "atencao_detalhes", "controle", "tecnico"],
    keywords: ["controle de estoque", "compliance", "dispensação", "atenção técnica"]
  },
  {
    id: 5,
    title: "Analista de Pesquisa Clínica Jr (CTA)",
    salary: "R$ 4.000 - R$ 6.000",
    description: "Suporte operacional na indústria, gestão documental, conhecimento em GCP.",
    profile: { D: 35, I: 35, S: 55, C: 75 },
    skills: ["organizacao", "gcp", "documental", "suporte"],
    keywords: ["suporte operacional", "GCP", "organização documental"]
  },
  {
    id: 6,
    title: "Analista de Assuntos Regulatórios",
    salary: "R$ 4.500 - R$ 7.500",
    description: "Elaboração de dossiês, interface com ANVISA, conhecimento regulatório.",
    profile: { D: 40, I: 30, S: 45, C: 85 },
    skills: ["legislacao", "leitura_tecnica", "visao_sistemica", "documental"],
    keywords: ["legislação", "dossiês", "leitura técnica", "visão sistêmica"]
  },
  {
    id: 7,
    title: "Assistente de Farmacovigilância",
    salary: "R$ 3.800 - R$ 6.200",
    description: "Análise de eventos adversos, reporte de segurança, documentação.",
    profile: { D: 25, I: 25, S: 55, C: 80 },
    skills: ["analise", "seguranca", "ingles", "atencao_detalhes"],
    keywords: ["análise de segurança", "eventos adversos", "inglês"]
  },
  {
    id: 8,
    title: "Analista de Logística",
    salary: "R$ 4.200 - R$ 6.500",
    description: "Gestão de cadeia fria, importação de materiais, controle de prazos.",
    profile: { D: 55, I: 35, S: 45, C: 70 },
    skills: ["resolucao_problemas", "urgencia", "gestao", "prazos"],
    keywords: ["gestão de cadeia fria", "prazos", "resolução de problemas", "senso de urgência"]
  },
  {
    id: 9,
    title: "Analista de Dados Clínicos (CRO)",
    salary: "R$ 4.500 - R$ 7.000",
    description: "Design de banco de dados, validação, programação de CRF eletrônico.",
    profile: { D: 35, I: 20, S: 50, C: 90 },
    skills: ["raciocinio_logico", "banco_dados", "validacao", "tecnico"],
    keywords: ["design de banco de dados", "validação", "raciocínio lógico"]
  },
  {
    id: 10,
    title: "Monitor de Pesquisa Clínica (CRA)",
    salary: "R$ 7.000 - R$ 12.000",
    description: "Monitoramento de centros de pesquisa clínica, viagens frequentes, supervisão de qualidade.",
    profile: { D: 65, I: 55, S: 35, C: 65 },
    skills: ["comunicacao", "pressao", "pensamento_critico", "viagens", "autonomia"],
    keywords: ["supervisão", "viagens", "comunicação assertiva", "pressão", "pensamento crítico"]
  },
  {
    id: 11,
    title: "Medical Writer",
    salary: "R$ 4.500 - R$ 7.500",
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
  // Novas perguntas DISC para maior precisão
  {
    id: 21,
    category: "disc",
    dimension: "D",
    text: "Diante de um prazo apertado e recursos limitados, você:",
    options: [
      { text: "Assume o controle, prioriza tarefas críticas e delega rapidamente", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Motiva a equipe e busca soluções criativas em conjunto", score: { D: 2, I: 4, S: 1, C: 1 } },
      { text: "Mantém a calma e trabalha de forma metódica para cumprir o prazo", score: { D: 0, I: 1, S: 4, C: 3 } },
      { text: "Analisa os riscos e cria um plano detalhado antes de agir", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 22,
    category: "disc",
    dimension: "I",
    text: "Em um projeto de equipe, você naturalmente:",
    options: [
      { text: "Define metas claras e cobra resultados da equipe", score: { D: 4, I: 1, S: 1, C: 2 } },
      { text: "Anima o grupo, facilita a colaboração e mantém o clima positivo", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Apoia os colegas e garante que todos se sintam incluídos", score: { D: 0, I: 2, S: 4, C: 1 } },
      { text: "Organiza informações, documenta processos e verifica a qualidade", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 23,
    category: "disc",
    dimension: "S",
    text: "Como você reage quando precisa trabalhar em múltiplos projetos simultâneos?",
    options: [
      { text: "Adoro o desafio! Consigo gerenciar várias frentes com energia", score: { D: 4, I: 3, S: 0, C: 1 } },
      { text: "Me adapto bem, gosto da variedade e interação entre projetos", score: { D: 2, I: 4, S: 1, C: 1 } },
      { text: "Prefiro foco em uma coisa por vez, mas me adapto se necessário", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Crio sistemas e checklists para garantir que nada seja esquecido", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 24,
    category: "disc",
    dimension: "C",
    text: "Ao executar uma tarefa, o que mais te preocupa?",
    options: [
      { text: "Entregar resultados rápidos que gerem impacto", score: { D: 4, I: 2, S: 0, C: 1 } },
      { text: "Fazer de forma que as pessoas apreciem e reconheçam", score: { D: 1, I: 4, S: 1, C: 0 } },
      { text: "Manter a harmonia da equipe e não causar problemas", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Garantir que está correto, seguindo todas as normas e padrões", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 25,
    category: "disc",
    dimension: "mixed",
    text: "Como você prefere receber instruções de trabalho?",
    options: [
      { text: "Objetivos claros e liberdade total para decidir como fazer", score: { D: 4, I: 1, S: 0, C: 1 } },
      { text: "Conversas abertas com espaço para ideias e sugestões", score: { D: 1, I: 4, S: 2, C: 0 } },
      { text: "Instruções claras e suporte contínuo durante a execução", score: { D: 0, I: 1, S: 4, C: 2 } },
      { text: "Documentação detalhada com todos os procedimentos e critérios", score: { D: 1, I: 0, S: 2, C: 4 } }
    ]
  },
  {
    id: 26,
    category: "disc",
    dimension: "mixed",
    text: "Seu estilo de liderança ou influência é mais:",
    options: [
      { text: "Diretivo - tomo decisões e espero que sejam seguidas", score: { D: 4, I: 1, S: 0, C: 2 } },
      { text: "Inspirador - motivo e engajo as pessoas através de entusiasmo", score: { D: 1, I: 4, S: 1, C: 0 } },
      { text: "Colaborativo - busco consenso e valorizo a opinião de todos", score: { D: 0, I: 2, S: 4, C: 1 } },
      { text: "Consultivo - apresento dados e análises para embasar decisões", score: { D: 1, I: 0, S: 2, C: 4 } }
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
export const calculateJobMatch = (discProfile, technicalScores, userFeedbackHistory = null) => {
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
    
    // Compatibilidade base
    let totalMatch = (discMatch * 0.6) + (techMatch * 0.4);
    
    // Ajuste baseado em feedback histórico (se houver)
    if (userFeedbackHistory) {
      const feedback = userFeedbackHistory[job.title];
      if (feedback === 'interested') {
        totalMatch *= 1.15; // Aumenta 15% para jobs que usuário demonstrou interesse
      } else if (feedback === 'not_interested') {
        totalMatch *= 0.85; // Reduz 15% para jobs que usuário não demonstrou interesse
      }
    }
    
    return {
      ...job,
      matchPercentage: Math.min(100, Math.max(0, Math.round(totalMatch))),
      discMatch: Math.round(discMatch),
      techMatch: Math.round(techMatch)
    };
  });
  
  return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
};

// Descrições detalhadas dos perfis DISC com múltiplos níveis
export const discDescriptions = {
  D: {
    name: "Dominância",
    subtitle: "Foco em resultados, ação e desafios",
    high: "Você é determinado(a), direto(a) e orientado(a) para resultados. Gosta de desafios e toma decisões com rapidez.",
    low: "Você é mais colaborativo(a) e prefere consenso antes de agir. Evita confrontos diretos.",
    levels: {
      veryHigh: {
        range: "75-100%",
        description: "Perfil altamente dominante e assertivo",
        workplace: "No trabalho, você é o(a) tomador(a) de decisões naturais. Assume liderança em situações de crise, não teme conflitos e busca constantemente novos desafios. Pode ser percebido(a) como autoritário(a), mas sua capacidade de agir rapidamente sob pressão é um grande diferencial. Ideal para cargos que exigem autonomia, resolução rápida de problemas e tomada de decisão estratégica."
      },
      high: {
        range: "50-74%",
        description: "Orientado(a) a resultados com bom equilíbrio",
        workplace: "Você demonstra forte orientação para resultados mantendo abertura para colaboração. Consegue liderar quando necessário, mas também trabalhar em equipe. Seu foco em eficiência e objetivos claros torna você valioso(a) em projetos que precisam de direcionamento, especialmente em funções de coordenação, gestão de projetos e supervisão de equipes."
      },
      moderate: {
        range: "25-49%",
        description: "Equilibrado entre assertividade e colaboração",
        workplace: "Você equilibra bem a busca por resultados com a consideração pelas pessoas. Prefere consenso, mas consegue ser assertivo(a) quando necessário. Essa flexibilidade é vantajosa em ambientes colaborativos onde é preciso mediar interesses, como em funções de suporte, facilitação e trabalho em equipe multidisciplinar."
      },
      low: {
        range: "0-24%",
        description: "Estilo colaborativo e conciliador",
        workplace: "Você prefere evitar confrontos diretos e buscar soluções harmoniosas. Tende a ser um(a) excelente mediador(a), ouvindo diferentes perspectivas antes de agir. Sua abordagem cautelosa e diplomática é ideal para funções que exigem construção de consenso, atendimento, suporte e trabalho em ambientes que valorizam a harmonia."
      }
    }
  },
  I: {
    name: "Influência",
    subtitle: "Foco em pessoas, comunicação e relacionamentos",
    high: "Você é comunicativo(a), entusiasta e persuasivo(a). Gosta de interagir com pessoas e criar conexões.",
    low: "Você é mais reservado(a) e prefere comunicações objetivas. Foca em fatos, não em emoções.",
    levels: {
      veryHigh: {
        range: "75-100%",
        description: "Altamente comunicativo(a) e carismático(a)",
        workplace: "Você é o(a) motivador(a) natural da equipe. Sua energia contagiante e facilidade de comunicação fazem você se destacar em situações que envolvem networking, apresentações e trabalho em equipe. Pode ter dificuldade com tarefas muito técnicas ou isoladas. Excelente para funções que exigem relacionamento interpessoal, engajamento de stakeholders, recrutamento e comunicação corporativa."
      },
      high: {
        range: "50-74%",
        description: "Sociável com boa capacidade de influência",
        workplace: "Você gosta de trabalhar com pessoas e tem facilidade para criar conexões. Consegue equilibrar a interação social com foco nas tarefas. Sua capacidade de persuasão e comunicação clara é um diferencial em funções que envolvem coordenação de equipes, interface com clientes/parceiros e apresentação de resultados."
      },
      moderate: {
        range: "25-49%",
        description: "Comunicação equilibrada e seletiva",
        workplace: "Você é seletivo(a) nas interações sociais, preferindo comunicações mais objetivas e focadas. Consegue trabalhar em equipe, mas também valoriza momentos de trabalho individual. Essa combinação é útil em funções que alternam entre interação social e trabalho técnico, como analista de projetos, suporte técnico e funções híbridas."
      },
      low: {
        range: "0-24%",
        description: "Reservado(a) e focado(a) em fatos",
        workplace: "Você prefere comunicação direta, objetiva e baseada em dados. Evita excessos sociais e se sente mais confortável com tarefas técnicas que não exigem muita interação. Sua abordagem é ideal para funções analíticas, trabalho individual, pesquisa, análise de dados e produção de conteúdo técnico onde o foco é qualidade e precisão, não networking."
      }
    }
  },
  S: {
    name: "Estabilidade",
    subtitle: "Foco em consistência, harmonia e lealdade",
    high: "Você valoriza harmonia, consistência e trabalho em equipe. É paciente e leal.",
    low: "Você se adapta bem a mudanças e prefere ambientes dinâmicos. Gosta de variedade.",
    levels: {
      veryHigh: {
        range: "75-100%",
        description: "Altamente estável e leal à equipe",
        workplace: "Você é o(a) pilar de estabilidade em qualquer equipe. Valoriza profundamente a harmonia, rotinas previsíveis e relações duradouras. Pode ter dificuldade com mudanças abruptas ou ambientes muito dinâmicos. Seu comprometimento e paciência são ideais para funções de suporte contínuo, processos padronizados, trabalho em equipes estáveis e ambientes que valorizam lealdade e consistência."
      },
      high: {
        range: "50-74%",
        description: "Busca equilíbrio e harmonia",
        workplace: "Você prefere ambientes estáveis mas consegue lidar com mudanças graduais. Valoriza o trabalho em equipe e contribui para manter um clima harmonioso. Sua paciência e colaboração são valiosas em funções que exigem relacionamento de longo prazo com colegas/clientes, processos estruturados e ambiente colaborativo."
      },
      moderate: {
        range: "25-49%",
        description: "Equilibrado entre estabilidade e mudança",
        workplace: "Você consegue alternar entre momentos de estabilidade e situações de mudança sem grande desconforto. Essa flexibilidade permite que você se adapte a diferentes contextos de trabalho, sendo útil em funções que alternam entre rotina e novidades, como implementação de projetos, transições e funções híbridas."
      },
      low: {
        range: "0-24%",
        description: "Orientado(a) a mudanças e variedade",
        workplace: "Você se entedia facilmente com rotinas e busca constantemente novos desafios. Ambientes dinâmicos e imprevisíveis são onde você brilha. Sua adaptabilidade rápida é ideal para funções que envolvem viagens frequentes, múltiplos projetos simultâneos, startups, consultoria e situações que exigem respostas rápidas a mudanças constantes."
      }
    }
  },
  C: {
    name: "Conformidade",
    subtitle: "Foco em qualidade, precisão e padrões",
    high: "Você preza por qualidade, precisão e seguir regras. É analítico(a) e detalhista.",
    low: "Você é mais flexível com regras e prefere liberdade para inovar. Foco em big picture.",
    levels: {
      veryHigh: {
        range: "75-100%",
        description: "Altamente analítico(a) e detalhista",
        workplace: "Você é meticuloso(a) e não aceita trabalho mal feito. Precisa de tempo para analisar antes de agir e valoriza processos bem definidos. Pode ser percebido(a) como perfeccionista ou inflexível. Seu rigor é essencial em funções que exigem conformidade regulatória, controle de qualidade, análise de dados, auditoria e qualquer atividade onde erros têm consequências significativas."
      },
      high: {
        range: "50-74%",
        description: "Focado(a) em qualidade e processos",
        workplace: "Você valoriza fazer as coisas corretamente, seguindo padrões e procedimentos. Consegue equilibrar qualidade com prazos, mas não abre mão de um nível mínimo de rigor. Seu perfil é ideal para funções técnicas que exigem atenção aos detalhes, documentação precisa, compliance e gestão da qualidade."
      },
      moderate: {
        range: "25-49%",
        description: "Equilibra qualidade com flexibilidade",
        workplace: "Você busca fazer um bom trabalho mas consegue ser flexível quando necessário. Não se prende excessivamente a regras e consegue priorizar o que realmente importa. Essa abordagem pragmática é vantajosa em funções que exigem equilíbrio entre qualidade e agilidade, como gestão de projetos, coordenação operacional e implementação de processos."
      },
      low: {
        range: "0-24%",
        description: "Flexível e orientado(a) à visão geral",
        workplace: "Você prefere ter liberdade para inovar e não se prende a regras rígidas. Foca no panorama geral e pode deixar passar detalhes menores. Sua flexibilidade e criatividade são ideais para ambientes de inovação, startups, brainstorming, funções estratégicas e situações que exigem pensar fora da caixa mais do que seguir processos estabelecidos."
      }
    }
  }
};