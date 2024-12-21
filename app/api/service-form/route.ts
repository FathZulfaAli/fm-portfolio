import { NextResponse } from "next/server";
import { ClientEmailData } from "@/src/types/collabForm.types";
import { Resend } from "resend";
import "dotenv/config";

export async function POST(request: Request) {
  try {
    const privateKey = process.env.RESEND_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!privateKey || !notificationEmail) {
      return NextResponse.json({
        status: 500,
        error: "Please contact me to fix the problem.",
      });
    }

    const body = await request.json();
    const { clientEmail, clientName, description }: ClientEmailData = body;
    const resend = new Resend(privateKey);

    resend.emails.send({
      from: "Fath Tech Web <onboarding@resend.dev>",
      to: notificationEmail,
      subject: `New Submission Received from ${clientName}`,
      text: `A new submission has been received:\n\nName: ${clientName}\nEmail: ${clientEmail}\nDescription: ${description}`,
    });

    return NextResponse.json({
      status: 200,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error || "An error occurred while sending emails.",
    });
  }
}
