import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { userProfile, excludedJobs = [] } = await req.json();

        // Construir prompt baseado no perfil do usuário
        const profileDescription = `
Perfil profissional:
- Nome: ${userProfile.user_name}
- Área: ${userProfile.current_area || 'Não especificada'}
- Objetivos: ${userProfile.career_goals || 'Entrar na pesquisa clínica'}
- Preferência de localização: ${userProfile.relocation_preference || 'Flexível'}
- Cultura preferida: ${userProfile.company_culture || 'Flexível'}

Perfil DISC:
- Dominância: ${userProfile.disc_profile?.D}%
- Influência: ${userProfile.disc_profile?.I}%
- Estabilidade: ${userProfile.disc_profile?.S}%
- Conformidade: ${userProfile.disc_profile?.C}%
`;

        const excludedList = excludedJobs.length > 0 
            ? `\nExcluir vagas com os seguintes títulos: ${excludedJobs.join(', ')}`
            : '';

        // Buscar vagas reais usando LLM com contexto da internet
        const response = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: `Busque vagas REAIS e ATUAIS de entrada na área de Pesquisa Clínica no Brasil (sites como LinkedIn, Indeed, Catho, Vagas.com).

${profileDescription}

Requisitos:
1. Apenas vagas de ENTRADA/JÚNIOR na área de pesquisa clínica
2. Vagas REAIS e ATUAIS disponíveis no mercado brasileiro
3. Retornar 5-8 vagas diferentes das já analisadas
${excludedList}

Para cada vaga encontrada, forneça:
- título exato da vaga
- empresa (se disponível)
- faixa salarial (se disponível, ou estimativa baseada no mercado)
- descrição resumida (2-3 linhas)
- localização
- tipo (presencial/remoto/híbrido)
- link da vaga (se disponível)

Se não encontrar vagas específicas atuais, sugira 5-8 títulos de vagas COMUNS de entrada na pesquisa clínica com descrições realistas baseadas no mercado brasileiro.`,
            add_context_from_internet: true,
            response_json_schema: {
                type: "object",
                properties: {
                    jobs: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                title: { type: "string" },
                                company: { type: "string" },
                                salary_range: { type: "string" },
                                description: { type: "string" },
                                location: { type: "string" },
                                work_type: { type: "string" },
                                job_url: { type: "string" }
                            },
                            required: ["title", "description", "location"]
                        }
                    },
                    search_date: { type: "string" }
                },
                required: ["jobs"]
            }
        });

        return Response.json({
            success: true,
            jobs: response.jobs || [],
            search_date: response.search_date || new Date().toISOString()
        });

    } catch (error) {
        console.error('Error searching jobs:', error);
        return Response.json({ 
            success: false,
            error: error.message,
            jobs: []
        }, { status: 500 });
    }
});