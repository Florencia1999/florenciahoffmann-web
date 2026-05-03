import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://florenciahoffmann.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/sobre-mi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/conferencias`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/dia-que-decidi-dejar-disculparme`, lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/magnetismo-femenino-ventaja-competitiva`, lastModified: new Date("2026-04-07"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/estandares-altos-estrategia-negocios`, lastModified: new Date("2026-04-14"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/tres-lecciones-marca-premium`, lastModified: new Date("2026-04-21"), changeFrequency: "monthly", priority: 0.7 },
  ];
}
