import { NextResponse } from "next/server";
import { tmpdir } from "os";
import path from "path";
import { writeFile, unlink } from "fs/promises";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const fullName = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const message = formData.get("message");
    const resume = formData.get("resume");

    // Convert resume to buffer
    const buffer = Buffer.from(await resume.arrayBuffer());
    const filename = `${Date.now()}-${resume.name}`;
    const filePath = path.join(tmpdir(), filename);

    // Save to temp location
    await writeFile(filePath, buffer);

    // Convert to base64 for attachment
    const fileBase64 = buffer.toString("base64");

    // Fire-and-forget background email
    resend.emails
      .send({
        from: "onboarding@resend.dev", // Must be verified
        to: process.env.RESEND_TO,
        subject: `New Job Application from ${fullName}`,
        html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        attachments: [
          {
            filename: resume.name,
            content: fileBase64,
            type: resume.type,
          },
        ],
      })
      .then(() => unlink(filePath))
      .catch(console.error);

    // Respond instantly
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false });
  }
};

console.log("Sending to:", process.env.RESEND_TO);
console.log(
  "Using API Key:",
  process.env.RESEND_API_KEY ? "✔️ Set" : "❌ Missing"
);
