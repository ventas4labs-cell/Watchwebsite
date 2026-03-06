import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is missing from environment variables');
        return NextResponse.json(
            { error: 'Server misconfiguration: RESEND_API_KEY is missing.' },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const body = await req.json();
        const { customerName, email, trackingNumber, items, total, address, phone, origin } = body;
        const siteUrl = origin || process.env.NEXT_PUBLIC_SITE_URL || 'https://chronos-co.vercel.app';

        if (!email || !customerName || !items || !trackingNumber) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const itemsHtml = items.map((item: any) => `
            <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #333333; color: #ffffff;">
                    <strong>${item.brand}</strong><br/>
                    <span style="color: #888888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">${item.model}</span>
                </td>
                <td style="padding: 16px 0; border-bottom: 1px solid #333333; color: #D4AF37; text-align: center; font-weight: bold;">
                    x${item.quantity}
                </td>
                <td style="padding: 16px 0; border-bottom: 1px solid #333333; color: #ffffff; text-align: right;">
                    $${(item.price * item.quantity).toLocaleString()}
                </td>
            </tr>
        `).join('');

        const htmlContent = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Order Confirmation</title>
                </head>
                <body style="margin: 0; padding: 0; background-color: #000000; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #000000;">
                        <tr>
                            <td align="center" style="padding: 40px 20px;">
                                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #111111; border: 1px solid #333333; border-radius: 4px;">
                                    <!-- Header -->
                                    <tr>
                                        <td align="center" style="padding: 40px 0 20px 0; border-bottom: 1px solid #333333;">
                                            <h1 style="color: #D4AF37; margin: 0; font-size: 24px; letter-spacing: 4px; text-transform: uppercase;">Timeless Watches</h1>
                                            <p style="color: #888888; letter-spacing: 2px; text-transform: uppercase; font-size: 10px; margin-top: 10px;">Exclusive Timepieces</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 40px;">
                                            <h2 style="color: #ffffff; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 30px;">Orden Recibida</h2>
                                            <p style="color: #cccccc; font-size: 14px; line-height: 1.6;">Estimado/a <strong>${customerName}</strong>,</p>
                                            <p style="color: #cccccc; font-size: 14px; line-height: 1.6;">Gracias por confiar en Timeless Watches. Hemos recibido su pedido exitosamente y nuestro equipo ya está trabajando para asegurar su pieza.</p>
                                            
                                            <div style="background-color: #0a0a0a; border: 1px solid #333333; padding: 20px; margin: 30px 0; text-align: center;">
                                                <p style="color: #888888; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px 0;">Número de Rastreo</p>
                                                <p style="color: #D4AF37; font-size: 18px; font-weight: bold; letter-spacing: 1px; margin: 0;">${trackingNumber}</p>
                                            </div>

                                            <p style="text-align: center; margin: 40px 0;">
                                                <a href="${siteUrl}/track?id=${trackingNumber}" style="background-color: #D4AF37; color: #000000; text-decoration: none; padding: 15px 30px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; border-radius: 2px; display: inline-block;">Rastrear en Vivo</a>
                                            </p>

                                            <h3 style="color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 40px; margin-bottom: 20px; border-bottom: 1px solid #333333; padding-bottom: 10px;">Resumen del Pedido</h3>
                                            
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                ${itemsHtml}
                                                <tr>
                                                    <td colspan="2" style="padding: 20px 0 0 0; color: #888888; text-transform: uppercase; letter-spacing: 1px; font-size: 12px;">Total de Inversión</td>
                                                    <td style="padding: 20px 0 0 0; color: #D4AF37; text-align: right; font-size: 18px; font-weight: bold;">$${total.toLocaleString()}</td>
                                                </tr>
                                            </table>

                                            <h3 style="color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 40px; margin-bottom: 20px; border-bottom: 1px solid #333333; padding-bottom: 10px;">Detalles de Entrega</h3>
                                            <p style="color: #cccccc; font-size: 12px; margin: 5px 0;"><strong>Contacto:</strong> ${email} | ${phone}</p>
                                            ${address ? `<p style="color: #cccccc; font-size: 12px; margin: 5px 0;"><strong>Dirección:</strong> ${address}</p>` : ''}

                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center" style="padding: 30px 40px; background-color: #0a0a0a; border-top: 1px solid #333333;">
                                            <p style="color: #666666; font-size: 10px; line-height: 1.5; margin: 0;">Este es un mensaje automático generado por Timeless Watches.<br/>Para asistencia personalizada, responda a este correo o contacte a su asesor asignado.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `;

        const { data, error } = await resend.emails.send({
            from: 'Timeless Watches <orders@tmlsswtchs.com>',
            to: [email],
            subject: `Confirmación de Pedido - ${trackingNumber}`,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend SDK returned an error:', JSON.stringify(error, null, 2));
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err: any) {
        console.error('Server side exception throwing confirmation email:', err);
        return NextResponse.json({ error: err.message || 'Failed to send email' }, { status: 500 });
    }
}
