import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  services_interested?: string[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const submission: ContactSubmission = await req.json();
    const RESEND_API_KEY = 're_NiRWhsLq_3GRoLyT4gkdCMJbPLQGu2eHf';

    const servicesText = submission.services_interested && submission.services_interested.length > 0
      ? submission.services_interested.join(', ')
      : 'None selected';

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>Technocrat Inc.</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${submission.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${submission.email}">${submission.email}</a></div>
      </div>
      ${submission.company ? `
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">${submission.company}</div>
      </div>
      ` : ''}
      ${submission.phone ? `
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${submission.phone}">${submission.phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Services Interested In:</div>
        <div class="value">${servicesText}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${submission.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        Submitted at: ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
New Contact Form Submission
============================

Name: ${submission.name}
Email: ${submission.email}
Company: ${submission.company || 'N/A'}
Phone: ${submission.phone || 'N/A'}

Services Interested In:
${servicesText}

Message:
${submission.message}

---
Submitted at: ${new Date().toLocaleString()}
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Technocrat Contact Form <hire@technocratinc.co.uk>',
        to: ['hire@technocratinc.co.uk'],
        reply_to: submission.email,
        subject: `New Contact Form Submission from ${submission.name}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const emailResult = await resendResponse.json();

    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResult.id
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact submission:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});