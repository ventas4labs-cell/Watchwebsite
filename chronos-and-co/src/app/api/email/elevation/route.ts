import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend client using existing Env Var
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, tierLevel } = body;

        if (!email || !firstName || !tierLevel) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let subject = '';
        let htmlContent = '';

        if (tierLevel === 'Curator') {
            subject = 'Bienvenido al Curator Circle - Privilegios Exclusivos';
            htmlContent = `
                <div style="background-color: #000; color: #fff; font-family: sans-serif; padding: 40px; text-align: center;">
                    <h1 style="color: #D4AF37; font-family: serif; letter-spacing: 2px;">TIMELESS WATCHES</h1>
                    <hr style="border-color: #333; margin: 30px 0;" />
                    <h2 style="font-weight: 300; font-size: 24px;">Bienvenido al pináculo, ${firstName}.</h2>
                    <p style="color: #ccc; line-height: 1.6; max-w-lg mx-auto; font-weight: 300;">
                        Su dedicación a la horología excepcional ha sido reconocida. Como parte del selecto grupo <strong>Curator Circle</strong>, ahora disfruta de un privilegio de inversión permanente del 7% en nuestra bóveda.
                    </p>
                    <div style="background-color: #111; border: 1px solid #333; padding: 30px; margin: 40px 0;">
                        <h3 style="color: #D4AF37; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Invitación Exclusiva</h3>
                        <p style="color: #999; font-size: 14px; font-style: italic;">
                            "Como Curator, está cordialmente invitado a su primer servicio de mantenimiento complementario en nuestro atelier en San José. Un experto relojero revisará sus piezas para asegurar que su legado perdure a través del tiempo."
                        </p>
                    </div>
                    <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">El Tiempo es Tuyo</p>
                </div>
            `;
        } else if (tierLevel === 'Collector') {
            subject = 'Elevación de Estatus: Collector Status Alcanzado';
            htmlContent = `
                <div style="background-color: #000; color: #fff; font-family: sans-serif; padding: 40px; text-align: center;">
                    <h1 style="color: #D4AF37; font-family: serif; letter-spacing: 2px;">TIMELESS WATCHES</h1>
                    <hr style="border-color: #333; margin: 30px 0;" />
                    <h2 style="font-weight: 300; font-size: 24px;">Su viaje evoluciona, ${firstName}.</h2>
                    <p style="color: #ccc; line-height: 1.6; max-w-lg mx-auto; font-weight: 300;">
                        Gracias a sus continuas adquisiciones, ahora pertenece al <strong>Collector Status</strong>. Disfrute de un beneficio exclusivo del 5% aplicado automáticamente en todas sus futuras inversiones horológicas al adquirir desde su sesión activa.
                    </p>
                    <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 50px;">El Tiempo es Tuyo</p>
                </div>
            `;
        } else {
            return NextResponse.json({ error: 'Invalid tier format' }, { status: 400 });
        }

        const emailResponse = await resend.emails.send({
            from: 'Timeless Watches <onboarding@resend.dev>', // Using dev sender for now
            to: [email],
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json({
            success: true,
            message: `Elevation email sent successfully for tier ${tierLevel}`,
            data: emailResponse
        });

    } catch (error: any) {
        console.error('Error sending elevation email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
