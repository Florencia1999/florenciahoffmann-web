import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "3 lecciones que aprendí al co-fundar una marca premium en México",
  description:
    "Florencia Hoffmann comparte las tres lecciones que más la transformaron al co-fundar Gatier: posicionamiento premium, identidad personal como activo y las personas correctas.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tres lecciones que aprendí al co-fundar una marca premium en México",
  author: { "@type": "Person", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  datePublished: "2026-04-21",
  publisher: { "@type": "Organization", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  description: "Las tres lecciones de Gatier que Florencia Hoffmann aplica a todo lo que construye.",
  mainEntityOfPage: "https://florenciahoffmann.com/blog/tres-lecciones-marca-premium",
};

const bodyStyle: React.CSSProperties = { fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem", color: "var(--text)", lineHeight: 2, marginBottom: "1.75rem" };
const h2Style: React.CSSProperties = { fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 500, color: "var(--dark)", margin: "3rem 0 1rem" };
const quoteStyle: React.CSSProperties = { ...bodyStyle, borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem", fontStyle: "italic", color: "var(--dark)" };

export default function Articulo4() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <section style={{ background: "var(--dark)", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>Emprendimiento</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}>
              3 lecciones que aprendí<br /><em style={{ color: "var(--gold)" }}>al co-fundar una marca premium en México</em>
            </h1>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(250,247,242,0.5)", marginTop: "2rem", letterSpacing: "0.1em" }}>Por Florencia Hoffmann</p>
          </div>
        </section>

        <article style={{ padding: "80px 24px 120px", maxWidth: 720, margin: "0 auto" }}>
          <p style={bodyStyle}>Cuando co-fundé Gatier en 2023, nadie nos dijo que sería fácil. Pero nadie nos preparó para lo específico de los retos que íbamos a enfrentar.</p>
          <p style={bodyStyle}>Hoy, desde el otro lado de esas lecciones — con Gatier presente en 10 estados de Estados Unidos — comparto las tres que más me transformaron, no solo como emprendedora, sino como persona.</p>

          <h2 style={h2Style}>Lección 1: El posicionamiento premium no es sobre el precio. Es sobre la experiencia.</h2>
          <p style={bodyStyle}>El primer instinto cuando construyes una marca premium es fijar un precio alto y esperar que eso comunique valor. Error.</p>
          <p style={bodyStyle}>El precio alto sin una experiencia que lo justifique genera resentimiento, no lealtad.</p>
          <p style={bodyStyle}>Lo que construye una marca premium de verdad es la coherencia entre lo que prometes y lo que entrega cada punto de contacto: desde el empaque hasta la respuesta en redes sociales, desde el tono del contenido hasta cómo resuelves un problema.</p>
          <p style={quoteStyle}>Con Gatier aprendimos que la experiencia premium empieza antes de que el cliente abra la botella. Empieza en el momento en que ve la marca por primera vez.</p>
          <p style={bodyStyle}>Esa lección la trasladé a FLORECE: cada elemento del programa, desde el diseño visual hasta el lenguaje de los módulos, debe comunicar el mismo nivel de calidad que prometemos.</p>

          <h2 style={h2Style}>Lección 2: Tu identidad personal es el activo más valioso que tienes en los negocios.</h2>
          <p style={bodyStyle}>En los primeros años, cometí el error de intentar separar a "Florencia la emprendedora" de "Florencia la persona." Esa separación es costosa. Y en el mundo de hoy, es innecesaria.</p>
          <p style={bodyStyle}>Las marcas que más rápido crecen son las que tienen un ser humano auténtico detrás de ellas. No un personaje construido para el marketing, sino una persona real con historia, valores y una manera específica de ver el mundo.</p>
          <p style={quoteStyle}>Tu historia personal no es una distracción de tu propuesta de valor. Es la propuesta de valor.</p>

          <h2 style={h2Style}>Lección 3: Rodearte de las personas correctas multiplica todo lo demás.</h2>
          <p style={bodyStyle}>He tenido la oportunidad de estar en el mismo escenario que John C. Maxwell, Brian Tracy, Fernando Anzures y Spencer Hoffmann. Cada uno de esos encuentros dejó una marca específica en cómo pienso, cómo lidero y cómo construyo.</p>
          <p style={bodyStyle}>No es networking en el sentido transaccional. Es algo más profundo: la comprensión de que el nivel al que llegas está directamente relacionado con el nivel de las conversaciones que tienes.</p>
          <p style={bodyStyle}>Invertir en estar en los espacios correctos — aunque al principio parezca que no tienes nada que ofrecer — es siempre una buena decisión.</p>

          <h2 style={h2Style}>La síntesis</h2>
          <p style={quoteStyle}>Construir un negocio de calidad y construir una vida de calidad son exactamente el mismo proceso.</p>
          <p style={bodyStyle}>En ambos casos, se trata de definir estándares altos, mantenerlos con gracia y rodearte de personas que te hagan mejor. El resto es consecuencia.</p>

          <div style={{ marginTop: "4rem", borderTop: "1px solid rgba(168,144,106,0.3)", paddingTop: "2rem" }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.8 }}>
              <strong>Florencia Hoffmann</strong> es co-fundadora de Gatier, autora de <em>"Haz que suceda"</em> (Legacy Publisher, 2026) y <em>"Por algo y para algo"</em> (2023), y conferencista internacional en México, EE.UU., Perú, Costa Rica, Colombia y Panamá. <a href="https://florenciahoffmann.com" style={{ color: "var(--gold)" }}>florenciahoffmann.com</a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
