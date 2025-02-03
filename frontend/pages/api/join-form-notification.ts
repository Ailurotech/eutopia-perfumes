import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

const STAFF_EMAIL = "info@eutopiaperfumes.com.au";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { formData } = req.body;
  const {
    "First Name": firstName,
    "Last Name": lastName,
    Email,
    Comments,
    "Business Type": businessType,
  } = formData;

  if (!firstName || !lastName || !Email || !Comments) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const customerEmail = {
      to: Email,
      from: "info@eutopiaperfumes.com.au",
      subject: "Thank You for Joining Us!",
      text: `Hi ${firstName},\n\nThank you for your interest in joining us. We will get back to you soon!\n\nCo. Eutopia`,
      html: `
        <p>Hi, <strong>${firstName}</strong>,</p>
        <p>Thank you for your interest in joining us. We will get back to you soon!</p>
        <p>Co. Eutopia</p>
      `,
    };

    const staffEmail = {
      to: "info@eutopiaperfumes.com.au",
      from: "info@eutopiaperfumes.com.au",
      subject: "New Join Inquiry Received",
      text: `A new join inquiry has been submitted.\n\nName: ${firstName} ${lastName}\nEmail: ${Email}\nBusiness Type: ${businessType}\nComments: ${Comments}`,
      html: `
        <p><strong>New Join Inquiry</strong></p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Business Type:</strong> ${businessType || "N/A"}</p>
        <p><strong>Comments:</strong> ${Comments}</p>
      `,
    };

    await sgMail.send([customerEmail, staffEmail]);

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return res.status(500).json({ error: "Failed to send emails." });
  }
}
