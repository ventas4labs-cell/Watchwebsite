'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(email: string, name: string, orderId: string) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set');
        return { success: false, error: 'API Key missing' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Chronos & Co <onboarding@resend.dev>',
            to: [email],
            subject: '¡Pedido Confirmado! Su Número de Seguimiento - Chronos & Co',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #030303; color: #ffffff; padding: 40px; border: 1px solid #d4af37;">
                    <h1 style="color: #d4af37; text-align: center; border-bottom: 1px solid #d4af37; padding-bottom: 20px;">CHRONOS & CO</h1>
                    <p style="font-size: 18px;">Hola <strong>${name}</strong>,</p>
                    <p>Gracias por su reciente adquisición. Su pedido ha sido recibido y está siendo procesado por uno de nuestros especialistas.</p>
                    <div style="background-color: #1a1a1a; padding: 20px; border-radius: 4px; text-align: center; margin: 30px 0;">
                        <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 2px; color: #d4af37; margin: 0 0 10px 0;">Número de Seguimiento</p>
                        <code style="font-size: 24px; color: #ffffff; letter-spacing: 2px;">${orderId}</code>
                    </div>
                    <p style="text-align: center;">
                        <a href="http://localhost:3000/track?id=${orderId}" style="background-color: #d4af37; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 2px; display: inline-block;">RASTREAR MI PEDIDO</a>
                    </p>
                    <p style="font-size: 12px; color: #666; margin-top: 40px; text-align: center; border-top: 1px solid #333; padding-top: 20px;">
                        Este es un mensaje automático de Chronos & Co. Alta Relojería.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Unexpected Error:', err);
        return { success: false, error: err };
    }
}
