import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    const fullName = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const message = formData.get("message") || "";
    const resume = formData.get("resume");

    // ✅ Basic validation
    if (!fullName || !email || !phone || !position) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    let attachments = [];

    // ✅ Handle resume safely (optional)
    if (resume && typeof resume.arrayBuffer === "function") {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: resume.name,
        content: buffer.toString("base64"),
        type: resume.type,
      });
    }

    // 🚀 Send email (non-blocking)
    resend.emails
      .send({
        from: "onboarding@resend.dev", // must be verified
        to: process.env.RESEND_TO,
        subject: `New Job Application — ${fullName}`,
        html: `
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "—"}</p>
        `,
        attachments,
      })
      .catch((err) => {
        console.error("Resend failed:", err);
      });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
};
