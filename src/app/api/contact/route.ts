import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const emailHtml = `
            <div style="font-family: sans-serif; border: 1px solid #d4af37; padding: 20px; color: #050505;">
                <h2 style="color: #d4af37;">Nova Mensagem de Contato</h2>
                <p><strong>De:</strong> ${name} (${email})</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid rgba(212,175,55,0.2); margin: 20px 0;" />
                <p><strong>Mensagem:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
        `;

        await sendEmail(
            process.env.ADMIN_EMAIL!,
            `Contato do Portal: ${subject}`,
            emailHtml
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json({ error: "Error submitting form. Try again later." }, { status: 500 });
    }
}
