import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rastreamento de Pedido | Iluminati Brotherhood",
  description: "Rastreie o status do seu pedido e progresso da entrega. Veja o status de entrega dos seus artefatos de membresia e itens rituais.",
  keywords: ["rastreamento de pedido", "rastrear pedido", "status de envio", "rastreamento de entrega", "status do pedido", "rastreamento de pacote"],
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}