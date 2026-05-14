import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale Conosco | Iluminati Brotherhood",
  description: "Entre em contato com a Iluminati Brotherhood para inquiries sobre membresia, suporte e comunicação. Entre em contato com nossa equipe para assistência.",
  keywords: ["contato", "suporte", "consultas", "suporte à membresia", "ajuda", "atendimento ao cliente", "fale conosco", "formulário de contato"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}