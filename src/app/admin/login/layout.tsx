import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Admin | Iluminati Brotherhood",
  robots: { index: false, follow: false },
};

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}