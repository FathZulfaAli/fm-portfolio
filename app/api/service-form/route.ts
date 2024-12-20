import { NextResponse } from "next/server";
import { transporter } from "./nodemailer.config";
import { ClientEmailData } from "@/src/types/nodemailer.types";
import "dotenv/config";
import path from "path";
import { readFileSync } from "fs";
import Handlebars from "handlebars";

const myEmail = process.env.SMTP_USER?.toString();
const VIPEmail = process.env.NOTIFICATION_EMAIL?.toString();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const { clientEmail, clientName, description }: ClientEmailData = body;

    // access email template
    const templateMail = path.join(
      process.cwd(),
      "/src/emails",
      "clientConfirmationEmail.hbs",
    );
    const templateSource = readFileSync(templateMail, "utf-8");
    const complileTemplate = Handlebars.compile(templateSource);

    // Send confirmation email to the client
    await transporter.sendMail({
      from: myEmail,
      to: clientEmail,
      subject: "We've Received Your Email!",
      html: complileTemplate({ clientName: clientName }), // Use the generated HTML
    });

    // Send notification email to yourself
    await transporter.sendMail({
      from: myEmail,
      to: VIPEmail,
      subject: "New Service Form Submission",
      text: `A new submission has been received:\n\nName: ${clientName}\nEmail: ${clientEmail}\nDescription: ${description}`,
    });

    return NextResponse.json({
      status: 200,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({
      status: 500,
      error: error || "An error occurred while sending emails.",
    });
  }
}
