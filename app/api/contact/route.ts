import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, name, email, phone } = body;

    console.log("Contact form submission:", {
      subject,
      name,
      email,
      phone,
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "CT Studio <kundenservice@ct-studio.store>",
      to: "kundenservice@ct-studio.store",
      replyTo: isValidEmail ? email : undefined,
      subject: `Neue Anfrage: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #6b7280;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                margin-top: 5px;
                font-size: 16px;
                color: #111827;
              }
              .footer {
                background: #111827;
                color: #9ca3af;
                padding: 20px;
                border-radius: 0 0 10px 10px;
                text-align: center;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">von der CT Studio Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Betreff</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">E-Mail</div>
                  <div class="value"><a href="mailto:${email}" style="color: #a855f7; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Telefon</div>
                  <div class="value">${phone || "Nicht angegeben"}</div>
                </div>
              </div>
              <div class="footer">
                Diese Nachricht wurde über das Kontaktformular auf ct-studio.store gesendet.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
