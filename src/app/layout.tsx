/* Layout Refresh Trigger 2 */
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://illuminati-brotherhood.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Iluminati Brotherhood | Siga a Luz - Portal Exclusivo de Membros",
    template: "%s | Iluminati Brotherhood",
  },
  description: "Portal oficial de recrutamento e indução da Iluminati Brotherhood no Brasil. Junte-se a uma rede global de elite oferecendo benefícios exclusivos, artefatos raros e oportunidades incomparáveis. Candidate-se agora.",
  keywords: [
    "Iluminati",
    "Iluminati Brotherhood Brasil",
    "irmandade iluminada",
    "membership exclusivo",
    "rede de elite",
    "clube privado Brasil",
    "recrutamento iluminação",
    "iniciação ocultista",
    "benefícios para membros",
    "benefícios de luxo",
    "rede milionária",
    "alta sociedade brasileira",
    "rede de riqueza",
    "loja de artefatos",
    "itens místicos Brasil",
    "artefatos ocultos",
    "sociedade secreta",
    "elite financeira",
    "rede global",
    "benefícios de milhões",
    "portal exclusivo",
    "recrutamento Brasil",
    "irmandade Brasil",
  ],
  authors: [{ name: "Iluminati Brotherhood", url: BASE_URL }],
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
    other: {
      "geo-position": "Brazil",
      "geo-region": "BR",
      "geo-placename": "Brazil",
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pt-BR": BASE_URL,
      pt: BASE_URL,
    },
    types: {
      "application/rss+xml": `${BASE_URL}/rss.xml`,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Iluminati Brotherhood | Siga a Luz - Portal Exclusivo de Membros",
    description: "Portal oficial de recrutamento da Iluminati Brotherhood no Brasil. Junte-se a uma rede global de elite oferecendo benefícios e artefatos exclusivos.",
    url: BASE_URL,
    siteName: "Iluminati Brotherhood",
    locale: "pt_BR",
    alternateLocale: "pt",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
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
    description: "Portal oficial de recrutamento da Iluminati Brotherhood no Brasil. Junte-se a uma rede global de elite.",
    creator: "@illuminatibrot",
    images: [`${BASE_URL}/opengraph-image.png`],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  other: {
    "revisit-after": "7 days",
    "language": "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Iluminati Brotherhood",
        url: BASE_URL,
        description: "Portal oficial de recrutamento e indução da Iluminati Brotherhood no Brasil.",
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Iluminati Brotherhood",
        description: "Portal oficial de recrutamento e indução no Brasil. Excelência, confiança e valor de longo prazo.",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/illuminati_eyes_emblem.png`,
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
        },
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          },
          areaServed: {
            "@type": "Country",
            name: "Brazil",
            alternateName: "BR",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Brazil",
          alternateName: "BR",
        },
        knowsAbout: [
          "Iluminati Brotherhood",
          "elite network",
          "membership benefits",
          "luxury services",
          "occult artifacts",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Artefatos e Serviços",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Recrutamento de Membros",
                description: "Processo de seleção e indução para membros exclusivos da Iluminati Brotherhood.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Artefatos Místicos",
                description: "Artefatos raros e exclusivos para membros da irmandade.",
              },
            },
          ],
        },
        potentialAction: {
          "@type": "RegisterAction",
          name: "Registrar-se como Membro",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/#induction`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: "Iluminati Brotherhood",
        description: "Organização de elite para membros no Brasil.",
        url: BASE_URL,
        telephone: "+55",
        email: "contato@illuminati-brotherhood.vercel.app",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressRegion: "Brazil",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-23.5505",
          longitude: "-46.6333",
        },
        areaServed: {
          "@type": "Country",
          name: "Brazil",
          alternateName: "BR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "$$$$",
        servesCuisine: "Elite Network",
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        name: "Iluminati Brotherhood - Portal Principal",
        url: BASE_URL,
        description: "Portal oficial de recrutamento e indução da Iluminati Brotherhood no Brasil.",
        inLanguage: "pt-BR",
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#organization`,
        },
        mainEntity: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Loja de Artefatos",
            item: `${BASE_URL}/shop`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rastrear Pedido",
            item: `${BASE_URL}/track`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contato",
            item: `${BASE_URL}/contact`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Como funciona o recrutamento da Iluminati Brotherhood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O recrutamento é um processo exclusivo e sigiloso. Preencha o formulário de indução com suas informações e um representante entrará em contato para dar continuidade ao processo.",
            },
          },
          {
            "@type": "Question",
            name: "Quais são os benefícios de ser membro da Iluminati Brotherhood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Membros exclusivos têm acesso a benefícios milionários, rede global de contatos de elite, oportunidades de investimento, artefatos raros e muito mais.",
            },
          },
          {
            "@type": "Question",
            name: "A loja de artefatos é confiável?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Todos os artefatos passam por verificação rigorosa. Oferecemos rastreamento de pedido e suporte dedicado para todos os clientes no Brasil.",
            },
          },
          {
            "@type": "Question",
            name: "Posso rastrear meu pedido de artefato?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Use a página de rastreamento com seu código de registro e número do pedido para acompanhar o status da entrega em todo o Brasil.",
            },
          },
          {
            "@type": "Question",
            name: "A Iluminati Brotherhood atende em todo o Brasil?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Atendemos todos os estados do Brasil, incluindo São Paulo, Rio de Janeiro, Minas Gerais, Bahia, Paraná e todos os demais.",
            },
          },
        ],
      },
      {
        "@type": "Person",
        name: "Iluminati Brotherhood",
        alternateName: "IB",
        knowsAbout: ["elite network", "membership benefits"],
        nationality: {
          "@type": "Country",
          name: "BR",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://qkvcghzcdehlifzprvyi.storage.supabase.co" />
        <link rel="preconnect" href="https://qkvcghzcdehlifzprvyi.storage.supabase.co" />
        <link
          rel="preload"
          as="image"
          href="/opengraph-image.png"
          fetchPriority="high"
        />
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" crossOrigin="anonymous" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Iluminati Brotherhood Feed"
          href="/rss.xml"
        />
        <link rel="hreflang" hrefLang="pt-BR" href={BASE_URL} />
        <link rel="hreflang" hrefLang="x-default" href={BASE_URL} />
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