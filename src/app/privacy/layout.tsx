import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Iluminati Brotherhood",
  description: "Política de privacidade da Iluminati Brotherhood. Learn como coletamos, usamos e protegemos suas informações pessoais.",
  keywords: ["política de privacidade", "proteção de dados", "privacidade", "informações pessoais", "segurança de dados", "cookies", "LGPD"],
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}