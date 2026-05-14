import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço | Iluminati Brotherhood",
  description: "Termos de serviço da Iluminati Brotherhood. Entenda os termos e condições para usar nossos serviços e portal de membros.",
  keywords: ["termos de serviço", "termos e condições", "termos", "termos de serviço", "termos de uso", "termos legais", "acordo"],
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}