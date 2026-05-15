// ============================================================
// TRACKER — Clinical Career Match Analytics
// ============================================================

const WEBHOOK_URL =
  "https://api.base44.com/api/apps/prod/functions/receiveEvent?secret=saude-em-contexto-2026";

const APP_NAME = "Clinical Career Match";

async function sendEvent(payload) {
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app_name: APP_NAME,
        received_at: new Date().toISOString(),
        visitor_origin: getVisitorOrigin(),
        ...payload,
      }),
    });
  } catch (e) {
    // silencia erros de tracking para não afetar o app
  }
}

export function trackPageview(pageName, source) {
  sendEvent({
    event_type: "pageview",
    event_name: pageName || "page_loaded",
    source: source || getSource(),
  });
}

export function trackSession(source) {
  sendEvent({
    event_type: "session",
    event_name: "session_start",
    source: source || getSource(),
  });
}

export function trackCTA(eventName, section, source) {
  sendEvent({
    event_type: "cta_click",
    event_name: eventName,
    source: source || getSource(),
    metadata: JSON.stringify({ section }),
  });
}

export function trackQuizStart(userName, source) {
  sendEvent({
    event_type: "quiz",
    event_name: "quiz_start",
    user_name: userName,
    source: source || getSource(),
  });
}

export function trackQuizProgress(userName, sectionName, questionsAnswered, totalQuestions, source) {
  sendEvent({
    event_type: "quiz",
    event_name: "quiz_section_complete",
    user_name: userName,
    source: source || getSource(),
    metadata: JSON.stringify({
      section: sectionName,
      questions_answered: questionsAnswered,
      total_questions: totalQuestions,
      completion_pct: Math.round((questionsAnswered / totalQuestions) * 100),
    }),
  });
}

export function trackError(errorMessage, context, source) {
  sendEvent({
    event_type: "error",
    event_name: "assessment_error",
    source: source || getSource(),
    metadata: JSON.stringify({ error: errorMessage, context }),
  });
}

export function trackDISCResult(userName, discProfile, dominantDimension, source) {
  sendEvent({
    event_type: "assessment",
    event_name: "disc_result",
    user_name: userName,
    source: source || getSource(),
    metadata: JSON.stringify({
      disc_profile: discProfile,
      dominant_dimension: dominantDimension,
    }),
  });
}

export function trackQuizComplete(userName, topJob, matchPercentage, source) {
  sendEvent({
    event_type: "quiz",
    event_name: "quiz_complete",
    user_name: userName,
    source: source || getSource(),
    metadata: JSON.stringify({ top_job: topJob, match_percentage: matchPercentage }),
  });
}

export function trackLead(userName, userEmail, source) {
  sendEvent({
    event_type: "lead",
    event_name: "lead_captured",
    user_name: userName,
    user_email: userEmail,
    source: source || getSource(),
  });
}

function getSource() {
  if (typeof window === "undefined") return "Direto";
  const params = new URLSearchParams(window.location.search);

  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");

  if (utmSource) {
    const s = utmSource.toLowerCase();
    if (s.includes("instagram")) return "Instagram";
    if (s.includes("linkedin")) return "LinkedIn";
    if (s.includes("facebook") || s.includes("fb")) return "Facebook";
    if (s.includes("whatsapp") || s.includes("wpp")) return "WhatsApp";
    if (s.includes("youtube") || s.includes("yt")) return "YouTube";
    if (s.includes("tiktok")) return "TikTok";
    if (s.includes("twitter") || s.includes("x.com")) return "Twitter/X";
    if (s.includes("google")) return "Google";
    if (s.includes("email") || s.includes("newsletter")) return "Email";
    return utmSource.charAt(0).toUpperCase() + utmSource.slice(1);
  }

  if (utmMedium) {
    const m = utmMedium.toLowerCase();
    if (m === "social") return "Rede Social";
    if (m === "email" || m === "newsletter") return "Email";
    if (m === "cpc" || m === "paid") return "Anúncio Pago";
    if (m === "organic") return "Busca Orgânica";
    if (m === "whatsapp") return "WhatsApp";
  }

  const ref = document.referrer;
  if (!ref) return "Direto";
  if (ref.includes("instagram.com") || ref.includes("l.instagram.com")) return "Instagram";
  if (ref.includes("linkedin.com")) return "LinkedIn";
  if (ref.includes("facebook.com") || ref.includes("fb.com") || ref.includes("l.facebook.com")) return "Facebook";
  if (ref.includes("wa.me") || ref.includes("whatsapp.com")) return "WhatsApp";
  if (ref.includes("youtube.com") || ref.includes("youtu.be")) return "YouTube";
  if (ref.includes("tiktok.com")) return "TikTok";
  if (ref.includes("twitter.com") || ref.includes("t.co") || ref.includes("x.com")) return "Twitter/X";
  if (ref.includes("google.com") || ref.includes("google.com.br")) return "Google";
  if (ref.includes("bing.com")) return "Bing";
  if (ref.includes("base44.com")) return "Base44";

  return "Referência Externa";
}

function getVisitorOrigin() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || null,
    utm_medium: params.get("utm_medium") || null,
    utm_campaign: params.get("utm_campaign") || null,
    utm_content: params.get("utm_content") || null,
    referrer: document.referrer || null,
    landing_page: window.location.pathname + window.location.search,
  };
}