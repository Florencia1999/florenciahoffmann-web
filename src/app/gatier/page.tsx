import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GatierSlideshow from "@/components/GatierSlideshow";

export const metadata: Metadata = {
  title: "Gatier — Agua Premium",
  description:
    "Gatier: agua de manantial gasificada premium co-fundada por Florencia Hoffmann y Spencer Hoffmann. Presente en más de 10 estados de Estados Unidos.",
};

export default function Gatier() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        {/* Presentación */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              textAlign: "center",
              marginBottom: "3rem",
            }}>Presentación Gatier</span>
            <div style={{ padding: "0 36px" }}>
              <GatierSlideshow />
            </div>
          </div>
        </section>

        {/* Video 2 */}
        <section style={{ background: "#F2EBE0", padding: "80px 24px 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}>
              <video
                src="/gatier-video2.mp4"
                controls
                playsInline
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "560px",
                  objectFit: "cover",
                  background: "#000",
                }}
              />
            </div>
          </div>
        </section>

        {/* Historia */}
        <section style={{ background: "#F2EBE0", padding: "80px 24px 40px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.95rem",
              color: "var(--text)",
              lineHeight: 1.9,
              marginBottom: "1.5rem",
            }}>
              Gatier nació de una convicción simple pero poderosa: que el agua —
              el elemento más esencial de la vida — merece ser extraordinaria.
              Co-fundada junto a Spencer Hoffmann en 2023, Gatier es agua de manantial
              gasificada de alta calidad, diseñada para elevar cada momento cotidiano.
            </p>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.95rem",
              color: "var(--text)",
              lineHeight: 1.9,
            }}>
              Hoy, Gatier está presente en más de 10 estados de Estados Unidos y
              continúa expandiéndose en México, llevando su promesa a cada mesa,
              evento y celebración: que lo ordinario puede — y debe — ser extraordinario.
            </p>
          </div>
        </section>

        {/* Video */}
        <section style={{ background: "#F2EBE0", padding: "40px 24px 80px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              textAlign: "center",
              marginBottom: "2rem",
            }}>Historia de Gatier</span>
            <div style={{
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            }}>
              <video
                src="/gatier-historia.mp4"
                controls
                playsInline
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "560px",
                  objectFit: "cover",
                  background: "#000",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 24px", background: "#ffffff", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--dark)",
              marginBottom: "1.5rem",
            }}>
              ¿Quieres ser<br />
              <em style={{ color: "var(--gold)" }}>distribuidor?</em>
            </h2>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "var(--text)",
              marginBottom: "3rem",
              lineHeight: 1.8,
            }}>
              Únete a la familia Gatier y lleva agua premium a tu mercado.
            </p>
            <a
              href={`https://wa.me/525564938428?text=${encodeURIComponent("Hola, me interesa ser distribuidor de Gatier. ¿Podríamos hablar?")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "#fff",
                padding: "16px 48px",
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
              Quiero ser distribuidor
            </a>
          </div>
        </section>

        {/* MENTORÍA FLORECE — movida a /florece */}
        <section style={{ display: "none" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* Label */}
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              textAlign: "center",
              marginBottom: "1rem",
            }}>Mentoría</span>

            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "6rem",
              lineHeight: 1.1,
            }}>
              <em style={{ color: "var(--gold)" }}>FLORECE</em>
            </h2>

            {/* ——— BLOQUE 1: FLORECE ——— */}
            <div style={{
              borderTop: "1px solid rgba(168,144,106,0.25)",
              paddingTop: "4rem",
              marginBottom: "5rem",
            }}>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem",
              }}>Programa grupal</span>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}>El proceso natural<br />y sagrado de florecer</h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                maxWidth: 680,
                marginBottom: "3rem",
              }}>
                FLORECE nació de una verdad simple y profunda: las mujeres somos como las flores.
                No florecemos por fuerza — florecemos cuando estamos en el entorno correcto,
                cuando somos nutridas, cuando nos sentimos seguras, cuando recibimos luz, espacio y amor.
                <br /><br />
                Cada mujer vive ciclos de transformación, de crecimiento, de expansión y de renacimiento.
                A veces nos cerramos para protegernos, a veces nos retraemos para sanar, y otras veces
                estamos listas para abrirnos y mostrar nuestra belleza, nuestro poder y nuestra verdad al mundo.
                <br /><br />
                FLORECE no se trata de convertirte en alguien más. Se trata de permitirte ser quien ya eres —
                sin miedo, sin culpa y sin límites autoimpuestos. Este método nace desde el respeto profundo
                por los tiempos de cada mujer, por su sensibilidad, por su intuición y por su capacidad
                de transformarse cuando se elige con amor.
                <br /><br />
                <em>Cuando una mujer se nutre por dentro, todo en su vida comienza a florecer por fuera.</em>
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--dark)",
                  padding: "16px 48px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Inscribirme a FLORECE
              </a>
            </div>

            {/* ——— BLOQUE 2: MENTORÍA 1:1 ——— */}
            <div style={{
              borderTop: "1px solid rgba(168,144,106,0.25)",
              paddingTop: "4rem",
              marginBottom: "5rem",
            }}>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem",
              }}>Acompañamiento personal</span>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}>Mentoría 1:1<br />con Florencia</h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                maxWidth: 680,
                marginBottom: "3rem",
              }}>
                Durante mucho tiempo observé algo que se repetía en muchísimas mujeres — mujeres inteligentes,
                capaces, fuertes — que parecían tenerlo todo resuelto pero por dentro vivían cansadas, aceleradas,
                desconectadas de su cuerpo, confundidas en el amor, sobreexigidas en el trabajo,
                sosteniéndolo todo… pero sintiéndose poco sostenidas.
                <br /><br />
                Yo fui una de ellas. Y hace varios años elegí un camino de transformación constante:
                entendí el paso a paso para conectar con mi ser y convertirme en la mujer que siempre
                había soñado ser — magnética, resiliente, con una energía suave e intuitiva, viviendo
                una vida que <em>amo</em> sin intentar escapar de ella, abrazando cada parte de mí.
                <br /><br />
                Esto es un espacio para mostrarte cómo construir una vida interna que te sostenga.
                Una vida de grandeza.
              </p>
              <a
                href={`https://wa.me/525564938428?text=${encodeURIComponent("Hola Florencia, me interesa una mentoría 1:1 contigo. ¿Podríamos hablar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#25D366",
                  color: "#fff",
                  padding: "16px 48px",
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
                Quiero mi mentoría 1:1
              </a>
            </div>

            {/* ——— BLOQUE 3: MENTORÍA EN JET ——— */}
            <div style={{
              borderTop: "1px solid rgba(168,144,106,0.25)",
              paddingTop: "4rem",
            }}>
              <span style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem",
              }}>Experiencia exclusiva</span>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}>Mentoría en<br /><em style={{ color: "var(--gold)" }}>Jet Privado</em></h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 2,
                maxWidth: 680,
                marginBottom: "3rem",
              }}>
                Si estás lista para elevar tu mentalidad, tu energía femenina, tu merecimiento,
                elevar tus estándares y ampliar tu contexto — esta experiencia es para ti.
              </p>
              {/* Video placeholder — se agregará cuando Florencia comparta el video */}
              <div style={{
                background: "rgba(168,144,106,0.08)",
                border: "1px dashed rgba(168,144,106,0.4)",
                padding: "60px 24px",
                textAlign: "center",
                marginBottom: "3rem",
                display: "none", // oculto hasta que haya video
              }}>
                <p style={{ fontFamily: "Montserrat, sans-serif", color: "var(--gold)", fontSize: "0.8rem" }}>Video próximamente</p>
              </div>
              <a
                href={`https://wa.me/525564938428?text=${encodeURIComponent("Hola Florencia, me interesa la mentoría en Jet Privado. ¿Podríamos hablar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "var(--dark)",
                  color: "var(--cream)",
                  padding: "16px 48px",
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

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
