import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "El día que decidí dejar de disculparme por ser femenina",
  description:
    "Florencia Hoffmann comparte la historia que transformó su carrera: el día que decidió aparecer completamente — con su feminidad, elegancia y autenticidad — y todo cambió.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El día que decidí dejar de disculparme por ser femenina",
  author: { "@type": "Person", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  datePublished: "2026-04-01",
  publisher: { "@type": "Organization", name: "Florencia Hoffmann", url: "https://florenciahoffmann.com" },
  description: "La historia que cambió la carrera de Florencia Hoffmann: abrazar la feminidad como ventaja, no como obstáculo.",
  mainEntityOfPage: "https://florenciahoffmann.com/blog/dia-que-decidi-dejar-disculparme",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1.05rem",
  color: "var(--text)",
  lineHeight: 2,
  marginBottom: "1.75rem",
};

const h2Style: React.CSSProperties = {
  fontFamily: "Cormorant Garamond, serif",
  fontSize: "1.8rem",
  fontWeight: 500,
  color: "var(--dark)",
  margin: "3rem 0 1rem",
};

export default function Articulo1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <section style={{ background: "var(--dark)", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>Historia personal</span>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.2 }}>
              El día que decidí dejar de disculparme<br /><em style={{ color: "var(--gold)" }}>por ser femenina</em>
            </h1>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(250,247,242,0.5)", marginTop: "2rem", letterSpacing: "0.1em" }}>
              Por Florencia Hoffmann
            </p>
          </div>
        </section>

        <article style={{ padding: "80px 24px 120px", maxWidth: 720, margin: "0 auto" }}>
          <p style={bodyStyle}>
            Hay una imagen que no puedo olvidar.
          </p>
          <p style={bodyStyle}>
            Estaba en un escenario en frente de más de dos mil personas. Tenía puesto un vestido que me hacía sentir completamente yo misma. Y en el momento en que el presentador dijo mi nombre, escuché a alguien en el público susurrar: <em>"¿Esa es la conferencista? Se ve muy... elegante para hablar de negocios."</em>
          </p>
          <p style={bodyStyle}>
            Lo tomé como el cumplido más grande que me han dado en mi vida.
          </p>
          <p style={bodyStyle}>
            Porque esa frase resume exactamente la creencia que me propuse destruir: que para ser tomada en serio, una mujer tiene que dejar de verse como mujer.
          </p>

          <h2 style={h2Style}>El error que casi cometo al principio</h2>
          <p style={bodyStyle}>
            Cuando empecé mi trayectoria empresarial y como speaker, recibí mucho consejo bienintencionado. "Usa colores más neutros." "Habla más directo, sin tanto sentimiento." "No menciones tanto lo femenino, que se va a malinterpretar."
          </p>
          <p style={bodyStyle}>
            Lo intenté. Por un tiempo, suavicé quién era para encajar en un molde que no era mío.
          </p>
          <p style={bodyStyle}>
            Y los resultados fueron mediocres. No porque el mensaje fuera malo, sino porque el mensajero no era auténtico.
          </p>
          <p style={bodyStyle}>
            El día que decidí aparecer completamente — con mi feminidad, mi elegancia, mi manera de hablar que incluye emoción y profundidad — todo cambió.
          </p>
          <p style={bodyStyle}>
            Las mujeres en el público empezaron a acercarse después de cada conferencia con lágrimas en los ojos. No porque yo hubiera dicho algo técnicamente brillante, sino porque se habían visto reflejadas. Porque alguien les estaba dando permiso de ser ellas mismas también.
          </p>

          <h2 style={h2Style}>Lo que aprendí co-fundando Gatier</h2>
          <p style={bodyStyle}>
            Cuando co-fundé Gatier, el mercado de agua premium en México estaba dominado por marcas con una estética muy masculina, muy seria, muy corporativa.
          </p>
          <p style={bodyStyle}>
            Nosotros hicimos exactamente lo opuesto: apostamos por la elegancia, el detalle, la experiencia. Y resultó que el mercado estaba sediento — literalmente — de eso.
          </p>
          <p style={{ ...bodyStyle, borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem", fontStyle: "italic", color: "var(--dark)" }}>
            Lo que el mundo te pide que escondas, suele ser exactamente lo que el mundo necesita ver.
          </p>

          <h2 style={h2Style}>La metodología FLORECE</h2>
          <p style={bodyStyle}>
            Años de conferencias, de mentorías, de conversaciones con mujeres en México, Estados Unidos, Perú y distintos países del mundo me llevaron a una conclusión: el mayor obstáculo de la mujer de hoy no es la falta de información. Es la falta de permiso.
          </p>
          <p style={bodyStyle}>
            Permiso para ser elegante y ambiciosa al mismo tiempo.<br />
            Permiso para tener estándares altos sin sentirse arrogante.<br />
            Permiso para poner límites desde la gracia, no desde la dureza.
          </p>
          <p style={bodyStyle}>
            Eso es lo que construí en FLORECE: un camino para que una mujer encuentre — o reencuentre — su versión más magnética, más segura y más verdadera.
          </p>

          <h2 style={h2Style}>Lo que quiero para ti</h2>
          <p style={bodyStyle}>
            Si estás leyendo esto y en algún momento alguien te dijo que eras "demasiado" — demasiado emocional, demasiado femenina, demasiado intensa — quiero que sepas algo:
          </p>
          <p style={{ ...bodyStyle, borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem", fontStyle: "italic", color: "var(--dark)" }}>
            Eso que eres "demasiado" es tu superpoder.
          </p>
          <p style={bodyStyle}>
            El mundo no necesita más mujeres que se comporten como versiones suavizadas de lo que se espera de ellas.
          </p>
          <p style={bodyStyle}>
            Necesita mujeres que florezcan.
          </p>

          <div style={{ marginTop: "4rem", borderTop: "1px solid rgba(168,144,106,0.3)", paddingTop: "2rem" }}>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.8 }}>
              <strong>Florencia Hoffmann</strong> es co-fundadora de Gatier, autora de <em>"Haz que suceda"</em> (Legacy Publisher, 2026) y <em>"Por algo y para algo"</em> (2023), y conferencista internacional en México, EE.UU., Perú, Costa Rica, Colombia y Panamá. Es la creadora de FLORECE, programa de transformación femenina en <a href="https://florenciahoffmann.com" style={{ color: "var(--gold)" }}>florenciahoffmann.com</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
