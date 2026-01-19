import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Input validation
function validateInput(data: QuoteEmailRequest): { valid: boolean; error?: string } {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return { valid: false, error: 'Name is required' };
  }
  if (data.name.length > 100) {
    return { valid: false, error: 'Name must be less than 100 characters' };
  }
  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    return { valid: false, error: 'Phone is required' };
  }
  if (data.phone.length > 30) {
    return { valid: false, error: 'Phone must be less than 30 characters' };
  }
  if (data.email && (typeof data.email !== 'string' || data.email.length > 255)) {
    return { valid: false, error: 'Email must be less than 255 characters' };
  }
  if (data.message && (typeof data.message !== 'string' || data.message.length > 2000)) {
    return { valid: false, error: 'Message must be less than 2000 characters' };
  }
  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate inputs
    const validation = validateInput(rawData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs
    const name = escapeHtml(rawData.name.trim().slice(0, 100));
    const phone = escapeHtml(rawData.phone.trim().slice(0, 30));
    const email = rawData.email ? escapeHtml(rawData.email.trim().slice(0, 255)) : 'Non fourni';
    const message = rawData.message ? escapeHtml(rawData.message.trim().slice(0, 2000)) : 'Aucun message';
    
    const now = new Date();
    const dateTime = now.toLocaleString('fr-CA', { 
      timeZone: 'America/Montreal',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailHtml = `
      <h1>Nouvelle demande de soumission – Aura Nettoyage</h1>
      <p>Une nouvelle demande de soumission a été reçue via le formulaire de contact.</p>
      
      <h2>Informations du client :</h2>
      <ul>
        <li><strong>Nom complet :</strong> ${name}</li>
        <li><strong>Numéro de téléphone :</strong> ${phone}</li>
        <li><strong>Courriel :</strong> ${email}</li>
        <li><strong>Message :</strong> ${message}</li>
        <li><strong>Date et heure de soumission :</strong> ${dateTime}</li>
      </ul>
      
      <p>Veuillez contacter le client dans les plus brefs délais.</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aura Nettoyage <onboarding@resend.dev>",
        to: ["aiboyan27@gmail.com"],
        subject: "Nouvelle demande de soumission – Aura Nettoyage",
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    const data = await res.json();
    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
