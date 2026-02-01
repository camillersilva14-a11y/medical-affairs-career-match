import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { assessmentId, rating, feedback } = await req.json();

    if (!assessmentId || !rating) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Update assessment with feedback
    await base44.entities.Assessment.update(assessmentId, {
      tool_feedback: {
        rating,
        feedback,
        submitted_at: new Date().toISOString()
      }
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});