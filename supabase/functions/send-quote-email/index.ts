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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message }: QuoteEmailRequest = await req.json();
    
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
        <li><strong>Courriel :</strong> ${email || 'Non fourni'}</li>
        <li><strong>Message :</strong> ${message || 'Aucun message'}</li>
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
        to: ["boyanzhechev9@gmail.com"],
        subject: "Nouvelle demande de soumission – Aura Nettoyage",
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Resend API error: ${errorData}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
