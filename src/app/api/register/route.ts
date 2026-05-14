import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Registration from '@/models/Registration';
import { sendEmail } from '@/lib/email';
import { supabase } from '@/lib/supabase';
import { registrationSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Validate request body
    const validation = registrationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ success: false, errors: validation.error.format() }, { status: 400 });
    }

    // Helper to upload base64 to Supabase
    const uploadToSupabase = async (base64Data: string, fileName: string, bucket: string) => {
      if (!base64Data) return '';

      const base64Content = base64Data.split(';base64,').pop()!;
      const buffer = Buffer.from(base64Content, 'base64');
      const filePath = `${Date.now()}_${fileName}`;

      const { error } = await supabase.storage
        .from(bucket)
        .upload(filePath, buffer, {
          contentType: 'image/jpeg', // Assuming jpeg, could be more dynamic
          upsert: false
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      return publicUrl;
    };

    // Generate unique registration code
    const uniqueCode = `RC-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Upload images to Supabase (Ensure bucket 'illuminaty' exists in Supabase)
    const personalPhotoUrl = await uploadToSupabase(body.personalPhoto, 'personal.jpg', 'illuminaty');
    const idCardFrontUrl = await uploadToSupabase(body.idCardFront, 'id_front.jpg', 'illuminaty');
    const idCardBackUrl = await uploadToSupabase(body.idCardBack, 'id_back.jpg', 'illuminaty');

    // Create record in DB with URLs instead of base64
    const registration = await Registration.create({
      ...body,
      personalPhoto: personalPhotoUrl,
      idCardFront: idCardFrontUrl,
      idCardBack: idCardBackUrl,
      uniqueCode,
    });

    // Send notifications
    const adminEmailHtml = `
      <div style="font-family: sans-serif; border: 1px solid #d4af37; padding: 20px;">
        <h2 style="color: #d4af37;">Novo Registro de Membro: ${body.name}</h2>
        <p><strong>Código Sagrado:</strong> <span style="font-size: 1.2em; color: #d4af37; font-weight: bold;">${uniqueCode}</span></p>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>País:</strong> ${body.country}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefone:</strong> ${body.phone}</p>
        <p><strong>Método de Pagamento:</strong> ${body.paymentMethod}</p>
        <hr />
        <p><strong>Foto Pessoal:</strong> <a href="${personalPhotoUrl}">Ver Imagem</a></p>
        <p><strong>RG/CPF Frente:</strong> <a href="${idCardFrontUrl}">Ver Imagem</a></p>
        <p><strong>RG/CPF Verso:</strong> <a href="${idCardBackUrl}">Ver Imagem</a></p>
        <hr />
        <p>Veja os detalhes completos no <a href="${process.env.NEXTAUTH_URL}/admin">Painel Administrativo</a>.</p>
      </div>
    `;

    const userEmailHtml = `
      <div style="font-family: serif; background-color: #0a0a0a; color: #d4af37; padding: 40px; border: 1px solid #d4af37; text-align: center;">
        <h1 style="color: #d4af37;">Bem-vindo à Iluminati Brotherhood</h1>
        <div style="text-align: left; max-width: 500px; margin: 0 auto; border: 1px dashed #d4af37; padding: 20px; margin-bottom: 30px;">
          <p style="text-align: center; font-size: 0.8em; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(212,175,55,0.6);">Seu Código de Registro Sagrado</p>
          <p style="text-align: center; font-size: 2em; font-weight: bold; letter-spacing: 0.1em; margin: 10px 0;">${uniqueCode}</p>
          <p style="text-align: center; font-size: 0.7em; color: rgba(212,175,55,0.4);">Guarde este código com segurança. Você precisará dele para todas as futuras interações e acesso à loja.</p>
        </div>
        <div style="text-align: left; max-width: 500px; margin: 0 auto;">
          <p>Prezado(a) ${body.name},</p>
          <p>Seu registro foi recebido e adicionado aos nossos registros sagrados. Seu código único de membro está listado acima.</p>
          <p><strong>Próximos Passos:</strong></p>
          <ul>
            <li>Verificação dos seus documentos.</li>
            <li>Instruções de iniciação via WhatsApp ou Email.</li>
            <li>Acesso ao Portal de Artefatos Sagrados.</li>
          </ul>
          <p style="margin-top: 30px;">Luz e progresso estejam sempre com você.</p>
          <p style="text-align: right;"><em>Iluminati Brotherhood</em></p>
        </div>
      </div>
    `;

    await Promise.allSettled([
      sendEmail(process.env.ADMIN_EMAIL!, `NOVO REGISTRO: ${body.name}`, adminEmailHtml),
      sendEmail(body.email, "Registro Recebido - Iluminati Brotherhood", userEmailHtml)
    ]);

    return NextResponse.json({ success: true, id: registration._id, uniqueCode });
  } catch (error: unknown) {
    const isStorageError = error && typeof error === 'object' && '__isStorageError' in error;
    const err = error as { status?: number; statusCode?: string };

    if (isStorageError && (err.status === 400 || err.statusCode === '404')) {
      console.error('CRITICAL: Supabase bucket "illuminaty" not found. Please create it in your Supabase dashboard and set to Public.');
    } else {
      console.error('Registration API Error:', error);
    }
    return NextResponse.json({ success: false, error: "Error submitting form. Try again later." }, { status: 500 });
  }
}
