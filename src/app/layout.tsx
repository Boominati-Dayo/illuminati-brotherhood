/* Layout Refresh Trigger 1 */
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://illuminati-brotherhood.vercel.app"),
  title: {
    default: "Iluminati Brotherhood | Siga a Luz - Portal Exclusivo de Membros",
    template: "%s | Iluminati Brotherhood",
  },
  description: "Portal oficial de recrutamento e indução da Iluminati Brotherhood. Junte-se a uma rede global de elite oferecendo benefícios exclusivos, artefatos raros e oportunidades incomparáveis. Candidate-se agora.",
  keywords: [
    "Iluminati",
    "Iluminati Brotherhood",
    "irmandade iluminada",
    "membership exclusivo",
    "rede de elite",
    "clube privado",
    "recrutamento",
    "iniciação",
    "benefícios para membros",
    "benefícios de luxo",
    "rede milionária",
    "alta sociedade",
    "rede de riqueza",
    "loja de artefatos",
    "itens místicos",
    "artefatos ocultos",
    "sociedade secreta",
"elite financeira",
    "rede global",
    "benefícios de milhões",
  ],
  authors: [{ name: "Iluminati Brotherhood" }],
  creator: "Iluminati Brotherhood",
  publisher: "Iluminati Brotherhood",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://illuminati-brotherhood.vercel.app",
    languages: {
      pt: "https://illuminati-brotherhood.vercel.app",
      en: "https://illuminati-brotherhood.vercel.app",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Iluminati Brotherhood | Siga a Luz - Portal Exclusivo de Membros",
    description: "Portal oficial de recrutamento da Iluminati Brotherhood. Junte-se a uma rede global de elite oferecendo benefícios e artefatos exclusivos.",
    url: "https://illuminati-brotherhood.vercel.app",
    siteName: "Iluminati Brotherhood",
    locale: "pt_BR",
    type: "website",
    timeframe: "PT24H",
    ttl: 604800,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Iluminati Brotherhood - Portal Exclusivo de Membros",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Iluminati Brotherhood | Siga a Luz",
    description: "Portal oficial de recrutamento da Iluminati Brotherhood. Junte-se a uma rede global de elite.",
    creator: "@illuminatibrot",
    images: ["/opengraph-image.png"],
  },

  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Iluminati Brotherhood",
    description: "Portal oficial de recrutamento e indução. Excelência, confiança e valor de longo prazo.",
    url: "https://illuminati-brotherhood.vercel.app",
    logo: "https://illuminati-brotherhood.vercel.app/illuminati_eyes_emblem.png",
    sameAs: [
      "https://facebook.com/illuminatibrot",
      "https://twitter.com/illuminatibrot",
      "https://instagram.com/illuminatibrot",
      "https://linkedin.com/company/illuminatibrot",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableTime: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    },
    potentialAction: {
      "@type": "RegisterAction",
      target: "https://illuminati-brotherhood.vercel.app/#induction",
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
          <CookieConsent />
        </AuthProvider>
      </body>
    </html>
  );
}