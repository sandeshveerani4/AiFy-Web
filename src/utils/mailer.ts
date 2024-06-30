import nodemailer, { TransportOptions } from "nodemailer";
export async function send365Email(
  from: string,
  to: string,
  subject: string,
  html: string,
  text: string
) {
  try {
    const mailTransport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: "587",
      auth: { user: from, pass: process.env.EMAIL_PASS },
      secureConnection: true,
      tls: { ciphers: "SSLv3" },
    } as TransportOptions);

    await mailTransport.sendMail({
      from,
      to,
      replyTo: from,
      subject,
      html,
      text,
    });
  } catch (err) {
    console.error(`send365Email: An error occurred:`, err);
  }
}
