import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email, firstName } = await req.json();

        if (!email || !firstName) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Timeless Watches <concierge@tmlsswtchs.com>',
            to: [email],
            subject: 'Su pieza ha sido asegurada en su Bóveda 🔒 | Timeless Watches',
            html: `
                <div style="font-family: Arial, sans-serif; max-w-xl mx-auto; background-color: #000; color: #fff; padding: 40px; border: 1px solid #333 text-align: center;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #D4AF37; letter-spacing: 2px; text-transform: uppercase; font-size: 24px; margin: 0;">Timeless Watches</h1>
                        <p style="color: #888; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-top: 5px;">Digital Vault Registration</p>
                    </div>

                    <h2 style="font-size: 20px; font-weight: normal; margin-bottom: 20px;">Estimado/a ${firstName},</h2>

                    <p style="color: #ccc; line-height: 1.6; margin-bottom: 20px;">
                        Nos complace informarle que su reloj ha sido entregado exitosamente. 
                    </p>

                    <p style="color: #ccc; line-height: 1.6; margin-bottom: 30px;">
                        Como parte de nuestro compromiso con su legado relojero, hemos registrado digitalmente esta pieza en su <strong>Bóveda Personal</strong> (My Vault). Puede acceder a los detalles en cualquier momento iniciando sesión en nuestro portal.
                    </p>

                    <div style="background-color: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.2); padding: 20px; text-align: center; margin-bottom: 30px;">
                        <p style="color: #D4AF37; margin: 0; font-weight: bold; font-size: 14px; letter-spacing: 1px;">PIEZA ASEGURADA Y REGISTRADA</p>
                    </div>

                    <div style="text-align: center; margin-top: 40px;">
                        <a href="https://tmlsswtchs.com/portal" style="background-color: #D4AF37; color: #000; padding: 12px 30px; text-decoration: none; font-weight: bold; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
                            Acceder a mi Bóveda
                        </a>
                    </div>

                    <div style="margin-top: 50px; text-align: center; border-top: 1px solid #333; padding-top: 20px;">
                        <p style="color: #666; font-size: 11px; margin-bottom: 5px;">Atentamente,</p>
                        <p style="color: #D4AF37; font-size: 11px; margin: 0; text-transform: uppercase;">Concierge • Timeless Watches</p>
                    </div>
                </div>
            `
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending order delivered email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
