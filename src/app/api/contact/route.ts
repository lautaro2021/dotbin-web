import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { name, email, businessName, message } = await request.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        if (!name || !email || !businessName) {
            return NextResponse.json(
                { error: 'Faltan campos requeridos.' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'Dotbin Web <onboarding@resend.dev>',
            to: process.env.EMAIL_TO || 'support@dotbin.app',
            replyTo: email,
            subject: `Nuevo contacto: ${name} - ${businessName}`,
            html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Negocio:</strong> ${businessName}</p>
                ${message ? `<p><strong>Mensaje:</strong></p><p>${message}</p>` : '<p><em>Sin mensaje adicional</em></p>'}
            `,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
            { status: 500 }
        );
    }
}
