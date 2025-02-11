import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const customerEmail = {
      to: email,
      from: "info@eutopiaperfumes.com.au",
      subject: "Thank You for Contacting Us!",
      text: `Hi, ${name},\n\nWe appreciate you reaching out to us. We will contact you soon!\n\nCo. Eutopia`,
      html: `
        <p>Hi, <strong>${name}</strong>,</p>
        <p>We appreciate you reaching out to us. We will contact you soon!</p>
        <p>Co. Eutopia</p>
      `,
    };

    const staffEmail = {
      to: "info@eutopiaperfumes.com.au",
      from: "info@eutopiaperfumes.com.au",
      subject: "New Customer Inquiry Received",
      text: `A new inquiry has been submitted.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <p><strong>New Customer Inquiry</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send([customerEmail, staffEmail]);

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return res.status(500).json({ error: "Failed to send emails." });
  }
}
