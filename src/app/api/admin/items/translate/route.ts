import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectToDatabase from '@/lib/mongodb';
import Item from '@/models/Item';
import { cookies, headers } from 'next/headers';

const ptTranslations: Record<string, { name: string; description: string; mysticalProperties: string }> = {
  "Serpent Ring of Power": {
    name: "Anel da Serpente do Poder",
    description: "Anel ancestral simbolizando a eternidade e o poder terreno e espiritual.",
    mysticalProperties: "Concede ao portador influencia invisivel sobre os arredores. Ativa percepcoes ocultas e fortalece a aura protetora.",
  },
  "Ark of the Covenant Relic": {
    name: "Relíquia da Arca da Alianca",
    description: "Arca sagrada contendo manifestacoes divinas e segredos celestiais.",
    mysticalProperties: "Canaliza energia celestial. Proteger o portador contra maldicoes e energias negativas.",
  },
  "Holy Grail of Immortality": {
    name: "Gral Sangrado da Imortalidade",
    description: "Calice lendario concedendo vida eterna e regeneracao celular.",
    mysticalProperties: "O calice contem a essencia da vida. Pode restaurar vitalidade e proteger contra o envelhecimento.",
  },
  "Obsidian Mirror of Truth": {
    name: "Espelho de Obsidiana da Verdade",
    description: "Espelho polido de obsidiana para adivinhacao de verdades ocultas.",
    mysticalProperties: "Revela passado, presente e futuros caminhos. Protege contra ilusoes e enganos.",
  },
  "Phoenix Feather Scroll": {
    name: "Pergaminho da Pena da Fenix",
    description: "Parcheme antigo com sabedoria sagrada codificada.",
    mysticalProperties: "Contem conhecimento arcano de renascimento. Proteger contra destruicao e maladie.",
  },
  "Celestial Astrolabe": {
    name: "Astrolabio Celestial",
    description: "Mapeia movimentos dos corpos celestiais e influencia do cosmos.",
    mysticalProperties: "Decodifica mensagens cosmicas. Auxilia na tomada de decisoes criticas atraves das estrelas.",
  },
  "Sacred Chalice of Wisdom": {
    name: "Calice Sagrado da Sabedoria",
    description: "Calice cerimonial usado nos mais altos rituais de iniciacao.",
    mysticalProperties: "Abre a mente para verdades superiores. Usado em iniciacoes para expandir a consciencia.",
  },
  "Eternal Flame Lamp": {
    name: "Lampara da Chama Eterna",
    description: "Lampara antiga dita conter a essencia da iluminacao perpetua.",
    mysticalProperties: "A chama nunca se apaga. Fornece luz espiritual constante e afasta a escuridao.",
  },
};

export async function POST() {
  await cookies();
  await headers();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectToDatabase();

    const allItems = await Item.find({});
    let updated = 0;

    for (const item of allItems) {
      const translation = ptTranslations[item.name];
      if (translation) {
        await Item.findByIdAndUpdate(item._id, {
          name: translation.name,
          description: translation.description,
          mysticalProperties: translation.mysticalProperties,
        });
        updated++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `${updated} produtos traduzidos para Portugues Brasileiro.`,
      updatedCount: updated,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  await cookies();
  await headers();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectToDatabase();
    const items = await Item.find({}).sort({ createdAt: -1 });
    return NextResponse.json(items);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}