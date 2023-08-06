import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter } from "../../utils/nodemailer";
import { Email } from "../../components/Email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: "alfianchabib109@gmail.com",
    to: "alfianchabib109@gmail.com",
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
