import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

// Esta função busca vagas reais de pesquisa clínica
// Você pode configurar diferentes APIs de emprego aqui
// Exemplos: JSearch (RapidAPI), Indeed, LinkedIn Jobs API, Vagas.com API

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const keywords = req.method === 'POST' 
      ? (await req.json()).keywords || ['pesquisa clínica', 'research']
      : ['pesquisa clínica', 'research'];

    // Exemplo: Usando JSearch API (RapidAPI)
    // Você precisará:
    // 1. Ir em https://rapidapi.com/liteapi-dev/api/job-search-api
    // 2. Copiar sua chave de API
    // 3. Adicionar como variável de ambiente: RAPIDAPI_KEY
    
    const apiKey = Deno.env.get('RAPIDAPI_KEY');
    
    if (!apiKey) {
      // Retorna vagas de exemplo se nenhuma API está configurada
      return Response.json({
        jobs: getMockJobs(keywords),
        message: 'Usando dados de exemplo. Configure RAPIDAPI_KEY para dados reais.'
      });
    }

    // Fazer requisição para API real (exemplo com JSearch)
    const searchQuery = keywords.join(' OR ');
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'job-search-api.p.rapidapi.com'
      }
    };

    const response = await fetch(
      `https://job-search-api.p.rapidapi.com/search?q=${encodeURIComponent(searchQuery)}&location=Brasil&country=BR&limit=10`,
      options
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Mapear resposta para o formato esperado
    const mappedJobs = (data.data || []).map(job => ({
      id: job.job_id,
      title: job.job_title,
      company: job.employer_name,
      location: job.job_location || 'Brasil',
      salary: job.job_salary_range?.min 
        ? `R$ ${job.job_salary_range.min} - R$ ${job.job_salary_range.max}`
        : 'A combinar',
      description: job.job_description?.substring(0, 200) || job.job_title,
      url: job.job_apply_link || job.job_google_link,
      source: 'RapidAPI',
      posted: job.job_posted_at_timestamp
    }));

    return Response.json({ jobs: mappedJobs });
  } catch (error) {
    return Response.json(
      { 
        error: error.message,
        jobs: getMockJobs(['pesquisa clínica'])
      }, 
      { status: 200 }
    );
  }
});

// Dados de exemplo para demonstração
function getMockJobs(keywords) {
  return [
    {
      id: 'mock-1',
      title: 'Monitor de Pesquisa Clínica - CRA',
      company: 'PAREXEL',
      location: 'São Paulo, SP',
      salary: 'R$ 8.000 - R$ 12.000',
      description: 'Procuramos Monitor de Pesquisa Clínica (CRA) para trabalhar com monitoramento de sites de pesquisa clínica. Experiência mínima de 2 anos.',
      url: 'https://www.linkedin.com/jobs/search/?keywords=monitor%20pesquisa%20cl%C3%ADnica',
      source: 'LinkedIn',
      posted: new Date().toISOString()
    },
    {
      id: 'mock-2',
      title: 'Analista de Dados Clínicos',
      company: 'Allergan',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 6.000 - R$ 8.500',
      description: 'Buscamos Analista de Dados Clínicos para gerenciar integridade de dados em estudos multicêntricos. Conhecimento em SAS e SQL essencial.',
      url: 'https://www.linkedin.com/jobs/search/?keywords=analista%20dados%20cl%C3%ADnicos',
      source: 'LinkedIn',
      posted: new Date().toISOString()
    },
    {
      id: 'mock-3',
      title: 'Coordenador de Projetos Clínicos',
      company: 'Labcorp Drug Development',
      location: 'Curitiba, PR',
      salary: 'R$ 7.500 - R$ 10.000',
      description: 'Procura-se Coordenador de Projetos para supervisionar estudos fase II e III. Experiência com GCP e conhecimento de protocolos.',
      url: 'https://www.linkedin.com/jobs/search/?keywords=coordenador%20pesquisa%20cl%C3%ADnica',
      source: 'LinkedIn',
      posted: new Date().toISOString()
    }
  ];
}