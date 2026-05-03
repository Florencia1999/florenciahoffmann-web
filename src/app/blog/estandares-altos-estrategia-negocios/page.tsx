import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Por qué los estándares altos son la estrategia más subestimada",
  description:
    "Florencia Hoffmann explica por qué los estándares altos son una ventaja competitiva — y cómo comunicarlos desde la gracia, no desde la dureza.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Por qué los estándares altos son la estrategia de negocios más subestimada",
  author: { "@type": "Person", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  datePublished: "2026-04-14",
  publisher: { "@type": "Organization", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  description: "Los estándares altos no son un obstáculo. Son la estrategia para que las cosas vayan bien.",
  mainEntityOfPage: "https://florenciahoffmann.com/blog/estandares-altos-estrategia-negocios",
};

const bodyStyle: React.CSSProperties = { fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem", color: "var(--text)", lineHeight: 2, marginBottom: "1.75rem" };
const h2Style: React.CSSProperties = { fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 500, color: "var(--dark)", margin: "3rem 0 1rem" };
const quoteStyle: React.CSSProperties = { ...bodyStyle, borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem", fontStyle: "italic", color: "var(--dark)" };

export default function Articulo3() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <section style={{ background: "var(--dark)", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>Negocios</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}>
              Por qué los estándares altos son<br /><em style={{ color: "var(--gold)" }}>la estrategia más subestimada</em>
            </h1>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(250,247,242,0.5)", marginTop: "2rem", letterSpacing: "0.1em" }}>Por Florencia Hoffmann</p>
          </div>
        </section>

        <article style={{ padding: "80px 24px 120px", maxWidth: 720, margin: "0 auto" }}>
          <p style={bodyStyle}>Hay una pregunta que me hacen constantemente: <em>¿Cómo logras mantener estándares altos sin que la gente piense que eres difícil de trabajar?</em></p>
          <p style={bodyStyle}>Mi respuesta siempre sorprende: <strong>no lo intento. Los estándares altos son exactamente lo que me hace fácil de trabajar.</strong></p>

          <h2 style={h2Style}>El mito del estándar alto como obstáculo</h2>
          <p style={bodyStyle}>En el imaginario popular, alguien con estándares altos es alguien complicado. Exigente. Difícil de complacer. Esta narrativa es no solo incorrecta — es costosa.</p>
          <p style={bodyStyle}>Las organizaciones, los equipos y las relaciones que prosperan a largo plazo no lo hacen a pesar de sus estándares altos. Lo hacen gracias a ellos.</p>
          <p style={quoteStyle}>Un estándar alto no es un capricho. Es una declaración de lo que crees que es posible.</p>

          <h2 style={h2Style}>Lo que vi en el escenario con John C. Maxwell</h2>
          <p style={bodyStyle}>He tenido el privilegio de compartir escenario con algunos de los referentes más importantes del liderazgo mundial: John C. Maxwell, Brian Tracy, Fernando Anzures, Spencer Hoffmann.</p>
          <p style={bodyStyle}>Un patrón consistente en todas esas personas: sus estándares no son una postura. Son una práctica diaria, invisible, que ocurre mucho antes de que lleguen al escenario.</p>
          <p style={bodyStyle}>John C. Maxwell no llega preparado a sus presentaciones porque quiere impresionar. Llega preparado porque ese es su estándar personal mínimo. La audiencia lo percibe en los primeros treinta segundos.</p>

          <h2 style={h2Style}>Los estándares altos como filtro, no como barrera</h2>
          <p style={bodyStyle}>Cuando defines con claridad qué aceptas y qué no aceptas — en tu negocio, en tus relaciones, en tu tiempo — algo paradójico ocurre: no cierras puertas. Abres las correctas.</p>
          <p style={bodyStyle}>En mi experiencia empresarial, las mejores colaboraciones, los mejores clientes y las mejores oportunidades llegaron porque la gente correcta vio en mí a alguien que se respeta a sí misma. Y eso genera confianza antes de cualquier conversación de negocios.</p>
          <p style={quoteStyle}>Los estándares altos son tu marca personal antes de que tengas marca personal.</p>

          <h2 style={h2Style}>Cómo implementar estándares altos sin perder relaciones</h2>
          <p style={bodyStyle}>La clave está en cómo se comunican. Un estándar alto comunicado desde la dureza se percibe como arrogancia. El mismo estándar, comunicado desde la gracia, se percibe como integridad.</p>
          <p style={bodyStyle}><strong>1. Define tus estándares en privado.</strong> Antes de que alguien más los desafíe, debes saber exactamente cuáles son y por qué existen.<br /><strong>2. Comunícalos como datos, no como juicios.</strong> No "tú siempre llegas tarde." Sino "para mí la puntualidad es una forma de respeto."<br /><strong>3. Mantenlos con consistencia, no con rigidez.</strong> Los mejores líderes saben cuándo el estándar es innegociable y cuándo la circunstancia requiere flexibilidad.</p>

          <h2 style={h2Style}>La conclusión que cambió mi negocio</h2>
          <p style={bodyStyle}>El día que paré de disculparme por mis estándares y empecé a presentarlos como lo que son — una inversión en calidad, en respeto mutuo y en resultados reales — cambió la calidad de todo lo que construyo.</p>
          <p style={bodyStyle}>Los clientes correctos llegaron solos. Los proyectos correctos se alinearon solos. El equipo correcto se formó solo.</p>
          <p style={quoteStyle}>Los estándares altos no son un lujo para cuando las cosas van bien. Son la estrategia para que las cosas vayan bien.</p>

          <div style={{ marginTop: "4rem", borderTop: "1px solid rgba(168,144,106,0.3)", paddingTop: "2rem" }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.8 }}>
              <strong>Florencia Hoffmann</strong> es emprendedora, autora de <em>"Haz que suceda"</em> (Legacy Publisher, 2026) y conferencista internacional. Creadora del programa FLORECE en <a href="https://florenciahoffmann.com" style={{ color: "var(--gold)" }}>florenciahoffmann.com</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
