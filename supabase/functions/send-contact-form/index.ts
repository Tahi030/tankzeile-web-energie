
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    // Store the form data in a variable to return even if email sending fails
    const responseData = {
      success: true,
      emailSent: true,
      formData: { name, email, subject, message }
    };

    try {
      // Send email to site owner with reply-to set to customer's email
      await resend.emails.send({
        from: "Kontaktformular <onboarding@resend.dev>",
        to: ["onboarding@resend.dev"], // Send to your verified Resend email first
        subject: `Neue Nachricht: ${subject}`,
        html: `
          <h1>Neue Kontaktanfrage</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Betreff:</strong> ${subject}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <p>Diese Nachricht wurde an tankzeile@gmx.de gesendet, aber da Sie die Domain noch nicht bei Resend verifiziert haben,
          wurde sie an Ihre verifizierte E-Mail Adresse weitergeleitet.</p>
        `,
        reply_to: email,
      });

      // Send confirmation email to the customer
      await resend.emails.send({
        from: "Tankzeile <onboarding@resend.dev>",
        to: [email],
        subject: "Deine Nachricht wurde erfolgreich gesendet",
        html: `
          <h1>Danke für deine Nachricht!</h1>
          <p>Hallo ${name},</p>
          <p>Ich habe deine Nachricht erhalten und werde mich so schnell wie möglich bei dir melden.</p>
          <p>Betreff: ${subject}</p>
          <p>Mit freundlichen Grüßen,<br/>Tamara Hillmann<br/>Tankzeile</p>
        `,
      });
    } catch (emailError: any) {
      console.error("Error sending emails:", emailError);
      responseData.emailSent = false;
    }

    console.log("Contact form submission processed:", responseData);

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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
