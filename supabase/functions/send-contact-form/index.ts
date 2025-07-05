
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>&"']/g, (match) => {
      const htmlEntities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;'
      };
      return htmlEntities[match] || match;
    });
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};

const validateInput = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name ist erforderlich');
  } else if (data.name.length > 100) {
    errors.push('Name ist zu lang (max. 100 Zeichen)');
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push('E-Mail ist erforderlich');
  } else if (!validateEmail(data.email)) {
    errors.push('Ungültige E-Mail-Adresse');
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push('Nachricht ist erforderlich');
  } else if (data.message.length > 2000) {
    errors.push('Nachricht ist zu lang (max. 2000 Zeichen)');
  }

  if (data.subject && data.subject.length > 200) {
    errors.push('Betreff ist zu lang (max. 200 Zeichen)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

const checkRateLimit = (clientId: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per 15 minutes

  const clientData = rateLimitMap.get(clientId);
  
  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (clientData.count >= maxRequests) {
    return false;
  }

  clientData.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Rate limiting based on IP
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const rawData = await req.json();
    
    // Validate and sanitize input
    const validation = validateInput(rawData);
    if (!validation.isValid) {
      console.log("Validation errors:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validation.errors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const contactData: ContactFormData = {
      name: sanitizeInput(rawData.name),
      email: sanitizeInput(rawData.email),
      subject: sanitizeInput(rawData.subject || 'Kontaktanfrage'),
      message: sanitizeInput(rawData.message)
    };

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Store the form submission in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message
      });

    if (dbError) {
      console.error("Database error:", dbError);
      // Continue with email sending even if DB storage fails
    }

    const responseData = {
      success: true,
      emailSent: true,
      message: "Nachricht erfolgreich gesendet"
    };

    try {
      // Send email to site owner
      await resend.emails.send({
        from: "Kontaktformular <onboarding@resend.dev>",
        to: ["tankzeile@gmx.de"],
        subject: `Neue Nachricht: ${contactData.subject}`,
        html: `
          <h1>Neue Kontaktanfrage</h1>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Betreff:</strong> ${contactData.subject}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${contactData.message.replace(/\n/g, "<br/>")}</p>
        `,
        reply_to: contactData.email,
      });

      // Send confirmation email to the customer
      await resend.emails.send({
        from: "Tankzeile <onboarding@resend.dev>",
        to: [contactData.email],
        subject: "Deine Nachricht wurde erfolgreich gesendet",
        html: `
          <h1>Danke für deine Nachricht!</h1>
          <p>Hallo ${contactData.name},</p>
          <p>Ich habe deine Nachricht erhalten und werde mich so schnell wie möglich bei dir melden.</p>
          <p><strong>Betreff:</strong> ${contactData.subject}</p>
          <p>Mit freundlichen Grüßen,<br/>Tamara Hillmann<br/>Tankzeile</p>
        `,
      });

      console.log("Emails sent successfully for:", contactData.email);
    } catch (emailError: any) {
      console.error("Error sending emails:", emailError);
      responseData.emailSent = false;
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
