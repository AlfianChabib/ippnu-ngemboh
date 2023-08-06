import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

// export const smtpEmail = process.env.GOOGLE_EMAIL;
// export const smtpPassword = process.env.GOOGLE_PASSWORD;

export const transporter = nodemailer.createTransport(
  SMPTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: "alfianchabib109@gmail.com",
      pass: "mfctconbdnrjoqpj",
    },
  })
);
