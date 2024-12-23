import { NextResponse } from "next/server";
import { ClientEmailData } from "@/src/types/collabForm.types";
import { Resend } from "resend";
import "dotenv/config";

export async function POST(request: Request) {
  try {
    const privateKey = process.env.RESEND_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!privateKey || !notificationEmail) {
      return NextResponse.json(
        {
          error: "Please contact me to fix the problem.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { clientEmail, clientName, description }: ClientEmailData = body;
    const resend = new Resend(privateKey);

    await resend.emails.send({
      from: "Fath Tech Web <onboarding@resend.dev>",
      to: notificationEmail,
      subject: `New Submission Received from ${clientName}`,
      text: `A new submission has been received:\n\nName: ${clientName}\nEmail: ${clientEmail}\nDescription: ${description}`,
    });

    return NextResponse.json(
      {
        message: "Emails sent successfully!",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error || "An error occurred while sending emails.",
      },
      { status: 500 },
    );
  }
}
