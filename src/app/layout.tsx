import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Florencia Hoffmann — Emprendedora, Autora y Conferencista Internacional",
    template: "%s | Florencia Hoffmann",
  },
  description:
    "Florencia Hoffmann es emprendedora mexicana, co-fundadora de Gatier, autora de 'Haz que suceda' y conferencista internacional. Creadora de FLORECE, programa de transformación femenina.",
  keywords: [
    "Florencia Hoffmann",
    "conferencista mexicana",
    "emprendedora México",
    "FLORECE programa",
    "Gatier agua",
    "liderazgo femenino",
    "magnetismo femenino",
    "transformación femenina",
    "speaker México",
  ],
  authors: [{ name: "Florencia Hoffmann" }],
  creator: "Florencia Hoffmann",
  metadataBase: new URL("https://florenciahoffmann.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://florenciahoffmann.com",
    siteName: "Florencia Hoffmann",
    title: "Florencia Hoffmann — Emprendedora, Autora y Conferencista Internacional",
    description:
      "Co-fundadora de Gatier, autora de 'Haz que suceda', conferencista internacional en México, EE.UU., Perú, Costa Rica, entre otros países.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Florencia Hoffmann" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florencia Hoffmann — Conferencista Internacional",
    description: "Co-fundadora de Gatier · Autora · Creadora de FLORECE",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Florencia Hoffmann",
    givenName: "Florencia",
    familyName: "Hoffmann",
    // Sus libros en Amazon y su podcast están a nombre de "Florencia Montoya".
    // Sin esto, Google trata los dos nombres como dos personas distintas.
    alternateName: ["Florencia Montoya", "Florencia Hoffmann Montoya"],
    nationality: { "@type": "Country", name: "México" },
    gender: "Female",
    url: "https://florenciahoffmann.com",
    image: "https://florenciahoffmann.com/florencia-hero.jpg",
    description:
      "Emprendedora mexicana, co-fundadora de Gatier, autora de 'Haz que suceda' y conferencista internacional. Creadora del programa de transformación femenina FLORECE.",
    jobTitle: "Emprendedora, Autora y Conferencista Internacional",
    knowsLanguage: ["es", "en"],
    sameAs: [
      "https://www.instagram.com/florencia.hoffmann/",
      "https://www.linkedin.com/in/florenciahoffmann/",
      "https://www.tiktok.com/@florencia_hoffmann",
      "https://www.youtube.com/@florenciahoffmann1",
    ],
    address: { "@type": "PostalAddress", addressCountry: "MX" },
    knowsAbout: [
      "Liderazgo femenino",
      "Magnetismo femenino",
      "Mentalidad de éxito",
      "Estándares altos",
      "Emprendimiento femenino",
      "Desarrollo personal para mujeres",
      "Marcas premium",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Conferencista",
      occupationLocation: { "@type": "Country", name: "México" },
    },
    worksFor: { "@type": "Organization", name: "Gatier" },
    founder: [
      { "@type": "Organization", name: "Gatier" },
      { "@type": "Organization", name: "FLORECE" },
    ],
    author: [
      {
        "@type": "Book",
        name: "Haz que suceda",
        alternativeHeadline:
          "Haz que suceda: Deja de esperar el momento perfecto y comienza a construirlo",
        datePublished: "2026",
        publisher: { "@type": "Organization", name: "Legacy Publisher" },
        inLanguage: "es",
        // Publicado en Amazon bajo "Florencia Montoya".
        author: { "@type": "Person", name: "Florencia Montoya" },
      },
      {
        "@type": "Book",
        name: "Por algo y para algo",
        datePublished: "2023",
        inLanguage: "es",
        author: { "@type": "Person", name: "Florencia Montoya" },
      },
    ],
    interactionStatistic: [
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/FollowAction",
        userInteractionCount: 390000,
        name: "Instagram followers",
      },
      {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/FollowAction",
        userInteractionCount: 201500,
        name: "TikTok followers",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
