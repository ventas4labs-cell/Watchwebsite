import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, couponCode } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Timeless Watches <concierge@timelsswatches.com>', // Replace with verified domain if different
            to: email,
            subject: 'Bienvenido al Círculo Exclusivo',
            html: `
            <div style="background-color: #000000; color: #ffffff; font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; text-align: center;">
                <h1 style="color: #D4AF37; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">
                    Timeless Watches
                </h1>
                <div style="background-color: #111111; border: 1px solid #333333; padding: 40px; max-width: 600px; margin: 0 auto;">
                    <h2 style="font-size: 20px; font-weight: normal; margin-bottom: 30px;">
                        Welcome to the Timeless Circle, <span style="color: #D4AF37; font-style: italic;">${name || 'Member'}</span>.
                    </h2>
                    <p style="color: #cccccc; font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
                        Como agradecimiento por unirse a nuestra selecta comunidad, le obsequiamos este código único válido por las próximas <strong>48 horas</strong>, el cual le otorga un <strong>10% de inversión preferencial</strong> en su primera adquisición.
                    </p>
                    <div style="background-color: #000000; border: 1px dashed #D4AF37; padding: 20px; margin-bottom: 30px;">
                        <p style="color: #D4AF37; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">Su Código Confidencial</p>
                        <strong style="font-size: 24px; letter-spacing: 4px; font-family: monospace;">${couponCode || 'TIMELESS10'}</strong>
                    </div>
                    <p style="font-size: 12px; color: #666666;">
                        Este privilegio expirará pronto. Descubra nuestra colección ahora.
                    </p>
                    <a href="http://localhost:3000" style="display: inline-block; margin-top: 30px; padding: 15px 30px; background-color: #D4AF37; color: #000000; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
                        Ingresar a la Bóveda
                    </a>
                </div>
            </div>
            `
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
