import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Order from '@/models/Order';
import Registration from '@/models/Registration';
import Item from '@/models/Item';
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const { uniqueCode, itemId, paymentMethod } = await req.json();

        // 1. Validate Registration Code
        const registration = await Registration.findOne({ uniqueCode: uniqueCode.trim().toUpperCase() });
        if (!registration) {
            return NextResponse.json({ error: "Invalid Sacred Registration Code. Access Denied." }, { status: 403 });
        }

        // 2. Fetch Item
        const item = await Item.findById(itemId);
        if (!item) {
            return NextResponse.json({ error: "Artifact not found in records." }, { status: 404 });
        }

        // 3. Generate Order Number
        const orderNumber = `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

        // 4. Create Order
        await Order.create({
            registrationId: registration._id,
            itemId: item._id,
            orderNumber,
            paymentMethod,
            totalPrice: item.price,
            status: 'pending'
        });

        // 5. Send Emails
        const adminEmailHtml = `
            <div style="font-family: sans-serif; border: 1px solid #d4af37; padding: 20px;">
                <h2 style="color: #d4af37;">Novo Pedido Recebido: ${orderNumber}</h2>
                <p><strong>Membro:</strong> ${registration.name} (${registration.uniqueCode})</p>
                <p><strong>Artefato:</strong> ${item.name}</p>
                <p><strong>Preço:</strong> R$ ${item.price.toLocaleString('pt-BR')}</p>
                <p><strong>Método de Pagamento:</strong> ${paymentMethod}</p>
                <hr />
                <p>Por favor, entre em contato com o membro através do painel administrativo para confirmar o pagamento e fornecer instruções rituais.</p>
                <p><a href="${process.env.NEXTAUTH_URL}/admin">Ver Pedido no Painel</a></p>
            </div>
        `;

        const userEmailHtml = `
            <div style="font-family: serif; background-color: #0a0a0a; color: #d4af37; padding: 40px; border: 1px solid #d4af37; text-align: center;">
                <h1 style="color: #d4af37;">Pedido Registrado</h1>
                <div style="text-align: left; max-width: 500px; margin: 0 auto; border: 1px dashed #d4af37; padding: 20px; margin-bottom: 30px;">
                    <p style="text-align: center; font-size: 0.8em; text-transform: uppercase;">Número do Pedido</p>
                    <p style="text-align: center; font-size: 2em; font-weight: bold;">${orderNumber}</p>
                </div>
                <div style="text-align: left; max-width: 500px; margin: 0 auto;">
                    <p>Prezado(a) ${registration.name},</p>
                    <p>Seu pedido do <strong>${item.name}</strong> foi registrado.</p>
                    <p><strong>Próximos Passos:</strong> Um administrador revisará seu pedido e enviará os detalhes de pagamento e protocolo de envio para seu email em breve.</p>
                    <p>Você pode rastrear o status do seu pedido em nosso portal usando seu código de registro e este número de pedido.</p>
                    <p style="margin-top: 30px;">Luz e progresso estejam com você.</p>
                    <p style="text-align: right;"><em>Iluminati Brotherhood</em></p>
                </div>
            </div>
        `;

        await Promise.allSettled([
            sendEmail(process.env.ADMIN_EMAIL!, `NOVO PEDIDO: ${orderNumber}`, adminEmailHtml),
            sendEmail(registration.email, `Confirmação de Pedido - ${orderNumber}`, userEmailHtml)
        ]);

        return NextResponse.json({ success: true, orderNumber });
    } catch (error: unknown) {
        console.error('Order API Error:', error);
        return NextResponse.json({ error: "A sacred connection error occurred. Please try again." }, { status: 500 });
    }
}
