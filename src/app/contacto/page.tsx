import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contrata a Florencia Hoffmann para tu próximo evento, conferencia o keynote. Disponible para México, Estados Unidos y Latinoamérica.",
};

export default function Contacto() {
  const whatsappNumber = "525564938428";
  const whatsappMsg = encodeURIComponent("Hola Florencia, me interesa contratarte para un evento. ¿Podríamos hablar?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{
          background: "var(--dark)",
          color: "var(--cream)",
          padding: "160px 24px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/florencia-speaker-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            opacity: 0.2,
          }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Trabaja con Florencia
            </p>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              ¿Quieres a Florencia<br />
              <em style={{ color: "var(--gold)" }}>en tu evento?</em>
            </h1>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              color: "rgba(250,247,242,0.7)",
              lineHeight: 1.8,
            }}>
              Disponible para conferencias, keynotes y eventos corporativos<br />
              en México, Estados Unidos y Latinoamérica.
            </p>
          </div>
        </section>

        {/* OPCIONES DE CONTACTO */}
        <section style={{ padding: "100px 24px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* WhatsApp destacado */}
            <div style={{
              padding: "60px 40px",
              textAlign: "center",
              marginBottom: "4rem",
            }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}>
                Contacto directo
              </p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "1rem",
              }}>
                Escríbeme por WhatsApp
              </h2>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}>
                La forma más rápida de coordinar una conferencia o evento.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#25D366",
                  color: "#fff",
                  padding: "16px 48px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribir por WhatsApp
              </a>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.8rem",
                color: "rgba(74,55,40,0.5)",
                letterSpacing: "0.1em",
              }}>
                +52 556 493 8428
              </p>
            </div>

            {/* Qué incluye */}
            <div style={{ marginBottom: "4rem" }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "2rem",
                textAlign: "center",
              }}>
                ¿Para qué puedes contratarme?
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
              }}>
                {[
                  {
                    titulo: "Conferencias & Keynotes",
                    desc: "Ponencias de 45 a 90 minutos sobre liderazgo femenino, magnetismo personal y mentalidad empresarial.",
                    emoji: "🎤",
                  },
                  {
                    titulo: "Eventos Corporativos",
                    desc: "Talleres y sesiones para equipos de ventas, liderazgo femenino dentro de empresas y convenciones.",
                    emoji: "🏢",
                  },
                  {
                    titulo: "Paneles & Foros",
                    desc: "Participación como panelista o moderadora en foros de negocios, emprendimiento y liderazgo.",
                    emoji: "💬",
                  },
                ].map((item) => (
                  <div key={item.titulo} style={{
                    borderTop: "2px solid var(--gold)",
                    paddingTop: "1.5rem",
                  }}>
                    <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.emoji}</div>
                    <h3 style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--dark)",
                      marginBottom: "0.75rem",
                    }}>{item.titulo}</h3>
                    <p style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--text)",
                      lineHeight: 1.8,
                    }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Foto de Florencia en acción */}
            <div style={{
              position: "relative",
              height: 400,
              overflow: "hidden",
            }}>
              <img
                src="/florencia-speaker-1.jpg"
                alt="Florencia Hoffmann en conferencia"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 15%",
                }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "40px 40px 30px",
                background: "linear-gradient(to top, rgba(33,24,16,0.9) 0%, transparent 100%)",
              }}>
                <p style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "var(--cream)",
                }}>
                  "+30 conferencias internacionales en 6 países"
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Final */}
        <section style={{
          padding: "80px 24px",
          background: "var(--gold)",
          textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "var(--dark)",
            marginBottom: "2rem",
          }}>
            Hablemos hoy
          </h2>
          <a
            href={whatsappUrl}
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
            Contactar por WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
