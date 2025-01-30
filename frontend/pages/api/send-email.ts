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

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const msg = {
      to: email,
      from: "info@eutopiaperfumes.com.au",
      subject: "Thank You for Contacting Us!",
      text: `Hi, ${name},\n\nWe appreciate you reaching out to us. We will contact you soon!\n\nCo. Eutopia`,
      html: `
        <p>Hi, <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us. We will contact you soon!</p>
        <p>Co. Eutopia</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
