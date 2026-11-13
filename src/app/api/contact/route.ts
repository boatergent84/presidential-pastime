import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const key = process.env.RESEND_API_KEY;

    if (!key) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !message.trim() ||
      name.length > 150 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 10000
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact information." },
        { status: 400 }
      );
    }

    const resend = new Resend(key);

    const { error } = await resend.emails.send({
      from: "Presidential Pastime <inquiries@presidentialpastime.com>",
      to: ["contact@presidentialpastime.com"],
      replyTo: email,
      subject: `Website Inquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to process inquiry." },
      { status: 500 }
    );
  }
}
