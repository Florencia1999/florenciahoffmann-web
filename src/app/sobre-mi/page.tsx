import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Florencia Hoffmann: emprendedora mexicana, co-fundadora de Gatier, autora de 'Haz que suceda' y 'Por algo y para algo', conferencista internacional y creadora de FLORECE.",
};

const style = {
  section: {
    padding: "100px 24px",
    maxWidth: 800,
    margin: "0 auto",
  } as React.CSSProperties,
  label: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "0.3em",
    color: "var(--gold)",
    textTransform: "uppercase" as const,
    marginBottom: "1.5rem",
    display: "block",
  },
  h2: {
    fontFamily: "Cormorant Garamond, serif",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 400,
    color: "var(--dark)",
    marginBottom: "2rem",
    lineHeight: 1.2,
  } as React.CSSProperties,
  p: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    color: "var(--text)",
    lineHeight: 1.9,
    marginBottom: "1.5rem",
  } as React.CSSProperties,
};

export default function SobreMi() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        {/* Header */}
        <section style={{ background: "#F2EBE0", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ ...style.label, color: "var(--gold)" }}>Mi historia</span>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 5vw, 4.2rem)",
              fontWeight: 300,
              color: "var(--dark)",
              lineHeight: 1.1,
              whiteSpace: "nowrap",
            }}>
              Florencia <em style={{ color: "var(--gold)" }}>Hoffmann</em>
            </h1>
          </div>
        </section>

        {/* Bio */}
        <section style={{ padding: "100px 24px" }}>
          <div style={style.section as React.CSSProperties}>
            <span style={style.label}>Quién soy</span>
            <p style={style.p}>
              Desde joven supe que tenía algo que decir. No sobre negocios en abstracto, sino sobre lo que significa
              construir una vida extraordinaria siendo completamente tú misma — sin disculpas, sin suavizar lo que eres,
              sin elegir entre feminidad y ambición.
            </p>
            <p style={style.p}>
              Hoy soy emprendedora, autora y conferencista internacional. Co-fundé Gatier en 2023 junto a Spencer Hoffmann —
              una marca de agua gasificada premium que hoy se vende en 10 estados de Estados Unidos. Publiqué mi primer
              diario de transformación, <em>"Por algo y para algo"</em>, en 2023, y mi libro <em>"Haz que suceda"</em>
              (Legacy Publisher) en 2026.
            </p>
            <p style={style.p}>
              He dado más de 30 conferencias en México, Estados Unidos, Perú, Costa Rica, entre otros países.
              He compartido escenario con John C. Maxwell, Brian Tracy, Fernando Anzures (creador de EXMA), Coral Mujaes,
              Vilma Nuñez, Jorge Serratos, y muchos más. Me formé en public speaking con César Lozano.
            </p>
            <p style={style.p}>
              En 2025 creé FLORECE — un programa de transformación femenina con mujeres de México, Estados Unidos y distintos
              países del mundo. Porque el mayor obstáculo de la mujer de hoy no es la falta de información. Es la falta de permiso.
            </p>
          </div>
        </section>

        {/* Logros */}
        <section style={{ background: "#F0EBE3", padding: "80px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={style.label}>Trayectoria</span>
            <div style={{ display: "grid", gap: "2rem" }}>
              {[
                { year: "2023", event: "Publicación de \"Por algo y para algo\" · Co-fundación de Gatier en México" },
                { year: "2025", event: "Lanzamiento de FLORECE — programa internacional de transformación femenina" },
                { year: "2026", event: "Publicación de \"Haz que suceda\" (Legacy Publisher) · Gatier llega a 10 estados de EE.UU." },
                { year: "Ongoing", event: "+30 conferencias internacionales · Conferencista Internacional · México, EE.UU., Perú, Costa Rica, entre otros" },
              ].map((item) => (
                <div key={item.year} style={{ display: "flex", gap: "2rem", alignItems: "baseline" }}>
                  <span style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                    minWidth: 70,
                  }}>{item.year}</span>
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--text)",
                    lineHeight: 1.7,
                  }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 24px", background: "var(--gold)", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1.5rem",
            }}>
              ¿Quieres a Florencia en tu evento?
            </h2>
            <a href="/conferencias" style={{
              background: "var(--dark)",
              color: "var(--cream)",
              padding: "14px 40px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "inline-block",
            }}>
              Ver temas de conferencia
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
