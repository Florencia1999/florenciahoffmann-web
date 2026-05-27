import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FLORECE — Mentoría con Florencia Hoffmann",
  description:
    "FLORECE: programa de transformación femenina y experiencia en Jet Privado con Florencia Hoffmann.",
};

const waBase = "https://wa.me/525564938428";

export default function Florece() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 72 }}>

        {/* HEADER */}
        <section style={{ background: "#F2EBE0", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}>Mentoría</span>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 300,
              color: "var(--dark)",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              letterSpacing: "0.05em",
            }}>
              <em style={{ color: "var(--gold)" }}>FLORECE</em>
            </h1>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              color: "var(--text)",
              lineHeight: 1.8,
            }}>
              Programa grupal · Experiencia en Jet Privado
            </p>
          </div>
        </section>

        {/* ——— BLOQUE 1: FLORECE ——— */}
        <section style={{ background: "#ffffff", padding: "100px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "center" }}>
            {/* Imagen */}
            <div style={{
              width: "340px",
              height: "340px",
              overflow: "hidden",
              borderRadius: "12px",
              flexShrink: 0,
            }}>
              <img
                src="/florece-imagen.jpg"
                alt="Programa grupal FLORECE"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Texto */}
            <div>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem",
              }}>Programa grupal</span>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "2.5rem",
                lineHeight: 1.2,
              }}>
                El proceso para Florecer
              </h2>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}>
                FLORECE nació de una verdad simple y profunda: las mujeres somos como las flores.
                No florecemos por fuerza — florecemos cuando estamos en el entorno correcto,
                cuando somos nutridas, cuando nos sentimos seguras, cuando recibimos luz, espacio y amor.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}>
                Cada mujer vive ciclos de transformación, de crecimiento, de expansión y de renacimiento.
                A veces nos cerramos para protegernos, a veces nos retraemos para sanar, y otras veces
                estamos listas para abrirnos y mostrar nuestra belleza, nuestro poder y nuestra verdad al mundo.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}>
                FLORECE no se trata de convertirte en alguien más. Se trata de permitirte ser quien ya eres —
                sin miedo, sin culpa y sin límites autoimpuestos. Este método nace desde el respeto profundo
                por los tiempos de cada mujer, por su sensibilidad, por su intuición y por su capacidad
                de transformarse cuando se elige con amor.
              </p>
              <p style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "var(--gold)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}>
                Cuando una mujer se nutre por dentro, todo en su vida comienza a florecer por fuera.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.85rem",
                color: "var(--text)",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
              }}>
                <strong>Incluye:</strong> Plataforma con cursos grabados + 12 sesiones grupales en vivo cada lunes con Florencia
              </p>
            </div>
          </div>
        </section>

        {/* ——— BLOQUE 2: MENTORÍA EN JET PRIVADO ——— */}
        <section style={{ background: "#F2EBE0", padding: "100px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: "5rem", alignItems: "center" }}>
            {/* Texto */}
            <div>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem",
              }}>Experiencia exclusiva</span>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "2.5rem",
                lineHeight: 1.2,
              }}>
                Mentoría en<br />
                <em style={{ color: "var(--gold)" }}>Jet Privado</em>
              </h2>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                marginBottom: "3rem",
              }}>
                Si estás lista para elevar tu mentalidad, tu energía femenina, tu merecimiento,
                elevar tus estándares y ampliar tu contexto — esta experiencia es para ti.
              </p>
              <a
                href={`${waBase}?text=${encodeURIComponent("Hola Florencia, me interesa la mentoría en Jet Privado. ¿Podríamos hablar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "var(--gold)",
                  color: "var(--dark)",
                  padding: "16px 40px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Mentoría en Jet Privado
              </a>
            </div>
            {/* Video al lado — pequeño y bien proporcionado */}
            <div style={{
              width: "320px",
              height: "570px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              overflow: "hidden",
              borderRadius: "12px",
              flexShrink: 0,
            }}>
              <iframe
                src="https://drive.google.com/file/d/1vjjsYtR9WcntfFeW5QE5J14e7zQ3i_PF/preview"
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="autoplay"
                title="Mentoría en Jet Privado"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
