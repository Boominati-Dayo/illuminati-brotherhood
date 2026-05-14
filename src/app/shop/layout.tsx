import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loja de Artefatos | Iluminati Brotherhood",
  description: "Artefatos místicos exclusivos disponíveis para membros da Iluminati Brotherhood. Navegue e adquirir objetos raros e sagrados.",
  keywords: ["artefatos", "itens místicos", "objetos sagrados", "itens raros", "loja exclusiva", "artefatos de membresia", "itens rituais"],
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}