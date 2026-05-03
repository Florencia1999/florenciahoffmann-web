import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Florencia Hoffmann — Emprendedora, Autora y Conferencista Internacional",
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{
          background: "var(--dark)",
          color: "var(--cream)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "stretch",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Foto de fondo completa */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}>
            <img
              src="/florencia-hero.jpg"
              alt="Florencia Hoffmann en escenario"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "42% 15%",
              }}
            />
          </div>
          {/* Gradiente elegante: oscuro izquierda para texto, viñeta suave en bordes */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: `
              linear-gradient(to right, rgba(15,9,4,0.88) 0%, rgba(15,9,4,0.6) 35%, rgba(15,9,4,0.15) 65%, rgba(15,9,4,0.4) 100%),
              linear-gradient(to bottom, rgba(15,9,4,0.3) 0%, transparent 20%, transparent 80%, rgba(15,9,4,0.5) 100%)
            `,
          }} />
          {/* Contenido */}
          <div style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "140px 24px 80px",
          }}>
            <div style={{ maxWidth: 600 }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "rgba(250,247,242,0.6)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}>
                Emprendedora · Autora · Conferencista Internacional
              </p>
              <h1 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                fontWeight: 300,
                lineHeight: 1.0,
                marginBottom: "2rem",
              }}>
                Florencia<br />
                <em style={{ fontStyle: "italic", color: "#C9B99A" }}>Hoffmann</em>
              </h1>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.05rem",
                fontWeight: 300,
                color: "rgba(250,247,242,0.75)",
                maxWidth: 500,
                marginBottom: "3rem",
                lineHeight: 1.8,
              }}>
                Co-fundadora de Gatier · Autora de <em>"Haz que suceda"</em> ·
                Creadora de FLORECE
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/contacto" style={{
                  background: "#EDE4D8",
                  color: "var(--dark)",
                  padding: "14px 36px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>
                  Contratar conferencia
                </a>
                <a href="/sobre-mi" style={{
                  border: "1px solid rgba(250,247,242,0.35)",
                  color: "var(--cream)",
                  padding: "14px 36px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}>
                  Conoce mi historia
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section style={{
          background: "#F2EBE0",
          padding: "60px 24px",
        }}>
          <div style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}>
            {[
              { num: "+30", label: "Conferencias internacionales", img: null },
              { num: "✦", label: "Conferencista Internacional", img: null },
              { num: null, label: "Presencia en México y EE.UU.", img: "/logo-gatier.png" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "var(--dark)",
                  lineHeight: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "3rem",
                }}>
                  {item.img
                    ? <img src={item.img} alt="Gatier" style={{ height: "2.2rem", objectFit: "contain" }} />
                    : item.num
                  }
                </div>
                <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--dark)",
                  marginTop: "0.5rem",
                  opacity: 0.8,
                }}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ breve */}
        <section style={{ padding: "100px 24px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "5rem", alignItems: "center" }}>
            {/* Texto */}
            <div>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}>Mi historia</p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}>
                Soy Florencia Hoffmann — emprendedora mexicana, autora y conferencista internacional.
                Co-fundé Gatier en 2023 junto a Spencer Hoffmann, hoy presente en 10 estados de Estados Unidos.
                He dado más de 30 conferencias en México, EE.UU., Perú, Costa Rica, entre otros,
                compartiendo escenario con John C. Maxwell, Brian Tracy, Fernando Anzures, Elena Cardonde,
                Jorge Serratos, y muchos más.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}>
                Creé FLORECE para que las mujeres que ya son extraordinarias — lo sepan.
              </p>
              <a href="/sobre-mi" style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                borderBottom: "1px solid var(--gold)",
                paddingBottom: "2px",
              }}>
                Leer mi historia completa →
              </a>
            </div>
            {/* Foto */}
            <div style={{ overflow: "hidden" }}>
              <img
                src="/florencia-profile-nobg.png"
                alt="Florencia Hoffmann"
                style={{
                  width: "100%",
                  height: "520px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* MENTORES / SOCIAL PROOF */}
        <section style={{ padding: "100px 24px", background: "#F2EBE0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              textAlign: "center",
            }}>Social Proof</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "1rem",
            }}>
              Mentores
            </h2>
            <p style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontStyle: "italic",
              color: "var(--gold)",
              textAlign: "center",
              marginBottom: "4rem",
              lineHeight: 1.6,
            }}>
              Brian Tracy · John C. Maxwell · Spencer Hoffmann · Elena Cardone<br />
              César Lozano · Lewis Howes · Fernando Anzures · Jorge Serratos · y muchos más
            </p>

            {/* Grid de fotos */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
              maxWidth: 1000,
              margin: "0 auto",
            }}>
              {[
                { src: "/mentores-new1.jpg", alt: "Florencia Hoffmann con Gatier", pos: "center 20%" },
                { src: "/mentores-new2.jpg", alt: "Florencia Hoffmann con Coral Mujaes", pos: "center 20%" },
                { src: "/mentores-new3.jpg", alt: "Florencia Hoffmann con John C. Maxwell", pos: "center 20%" },
                { src: "/mentores-new4.jpg", alt: "Florencia Hoffmann con mentores", pos: "center 20%" },
                { src: "/mentores-m1.jpg", alt: "Florencia Hoffmann con Brian Tracy", pos: "center 20%" },
                { src: "/mentores-m2.jpg", alt: "Florencia Hoffmann con John C. Maxwell", pos: "center 25%" },
                { src: "/mentores-m3.jpg", alt: "Florencia Hoffmann con John C. Maxwell", pos: "center 55%" },
                { src: "/mentores-m4.jpg", alt: "Florencia Hoffmann con John C. Maxwell", pos: "center 30%" },
                { src: "/mentores-maxwell.jpg", alt: "Florencia Hoffmann con César Lozano", pos: "center 20%" },
                { src: "/mentores-coral.jpg", alt: "Florencia Hoffmann con Elena Cardonde", pos: "center 20%" },
                { src: "/mentores-jet.jpg", alt: "Florencia Hoffmann en jet privado", pos: "center 25%" },
                { src: "/mentores-restaurant.jpg", alt: "Florencia Hoffmann con mentores", pos: "center 20%" },
                { src: "/mentores-gatier.jpg", alt: "Florencia Hoffmann en escenario", pos: "center 25%" },
                { src: "/mentor-brian-tracy-1.jpg", alt: "Florencia Hoffmann con Brian Tracy", pos: "center 20%" },
                { src: "/mentor-escenario.jpg", alt: "Florencia Hoffmann en escenario", pos: "center 25%" },
                { src: "/mentor-maxwell-libro.jpg", alt: "Florencia Hoffmann con John C. Maxwell", pos: "center 20%" },
              ].map((foto, i) => (
                <div key={i} style={{ overflow: "hidden", aspectRatio: "1/1" }}>
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: foto.pos, filter: "brightness(0.92)" }}
                  />
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              color: "rgba(33,24,16,0.4)",
              textAlign: "center",
              marginTop: "2rem",
              letterSpacing: "0.1em",
            }}>
              Conferencista Internacional · México · EE.UU. · Perú · Costa Rica · entre otros
            </p>
          </div>
        </section>

        {/* LIBROS */}
        <section style={{ padding: "100px 24px", background: "#F0EBE3" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "3rem",
              textAlign: "center",
            }}>Mis libros</p>

            {/* Libro 1 — Haz que suceda (con portada + Amazon) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              gap: "4rem",
              alignItems: "center",
              marginBottom: "5rem",
            }}>
              {/* Portada */}
              <a href="https://www.amazon.com/dp/B0GYVL1SPV/ref=tmm_hrd_swatch_0" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <img
                  src="/libro-haz-que-suceda.jpg"
                  alt="Haz que suceda — Florencia Montoya"
                  style={{
                    width: "100%",
                    boxShadow: "8px 12px 40px rgba(33,24,16,0.18)",
                    display: "block",
                  }}
                />
              </a>
              {/* Info */}
              <div>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}>2026 · Disponible en Amazon</p>
                <h3 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.25rem",
                  lineHeight: 1.1,
                }}>Haz que suceda</h3>
                <p style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "var(--gold-dark)",
                  marginBottom: "1.5rem",
                }}>Deja de esperar el momento perfecto y comienza a construirlo</p>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--text)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}>
                  El libro que resume todo lo que aprendí sobre convertir visión en resultados — sin perder tu esencia en el proceso. Para mujeres que quieren ejecutar, no solo soñar.
                </p>
                <a
                  href="https://www.amazon.com/dp/B0GYVL1SPV/ref=tmm_hrd_swatch_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--dark)",
                    color: "var(--cream)",
                    padding: "12px 32px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Comprar en Amazon →
                </a>
              </div>
            </div>

            {/* Libro 2 — Por algo y para algo */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              gap: "4rem",
              alignItems: "center",
              borderTop: "1px solid rgba(168,144,106,0.3)",
              paddingTop: "3rem",
            }}>
              <img
                src="/libro-poralgo-nobg.png"
                alt="Por algo y para algo — Florencia Montoya"
                style={{
                  width: "100%",
                  filter: "drop-shadow(8px 12px 40px rgba(33,24,16,0.18))",
                  display: "block",
                }}
              />
              <div>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}>2023 · Autoedición</p>
                <h3 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2.2rem",
                  fontWeight: 500,
                  color: "var(--dark)",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                }}>Por algo<br />y para algo</h3>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}>
                  Un diario de transformación para formar el hábito de vivir una vida en constante gratitud que te lleve a construir una vida de grandeza.
                </p>
                <a href="#" style={{
                  display: "inline-block",
                  background: "var(--dark)",
                  color: "var(--cream)",
                  padding: "12px 32px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>Conseguir el diario</a>
              </div>
            </div>
          </div>
        </section>

        {/* FLORECE */}
        <section style={{
          padding: "100px 24px",
          background: "#F2EBE0",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>Programa de transformación femenina</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--dark)",
              marginBottom: "2rem",
            }}>
              <em style={{ color: "var(--gold)" }}>FLORECE</em>
            </h2>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              color: "var(--text)",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}>
              Un programa internacional para mujeres que ya son extraordinarias — y quieren vivir como tal.
              Con comunidad activa en México, Estados Unidos y mujeres de distintos países del mundo.
            </p>
            <a href="https://florenciahoffmann.com/lander" style={{
              background: "var(--gold)",
              color: "var(--dark)",
              padding: "16px 48px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "inline-block",
            }}>
              Conoce FLORECE
            </a>
          </div>
        </section>

        {/* BLOG preview */}
        <section style={{ padding: "100px 24px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
              }}>Artículos</p>
              <a href="/blog" style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold-dark)",
                borderBottom: "1px solid var(--gold-dark)",
                paddingBottom: "2px",
              }}>Ver todos →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
              {[
                {
                  slug: "magnetismo-femenino-ventaja-competitiva",
                  title: "El magnetismo femenino como ventaja competitiva",
                  excerpt: "Cómo la presencia, confianza y elegancia se traducen en resultados reales de negocio.",
                },
                {
                  slug: "estandares-altos-estrategia-negocios",
                  title: "Por qué los estándares altos son la estrategia más subestimada",
                  excerpt: "La historia de cómo dejar de disculparme por mis estándares cambió todo lo que construyo.",
                },
                {
                  slug: "tres-lecciones-marca-premium",
                  title: "3 lecciones al co-fundar una marca premium en México",
                  excerpt: "Lo que Gatier me enseñó sobre posicionamiento, identidad y las personas correctas.",
                },
              ].map((post) => (
                <a href={`/blog/${post.slug}`} key={post.slug} style={{
                  borderTop: "1px solid rgba(168,144,106,0.3)",
                  paddingTop: "1.5rem",
                  display: "block",
                }}>
                  <h3 style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "var(--dark)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>{post.title}</h3>
                  <p style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--text)",
                    lineHeight: 1.7,
                    opacity: 0.8,
                  }}>{post.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{
          padding: "80px 24px",
          background: "#ffffff",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1.5rem",
            }}>
              ¿Quieres a Florencia en tu evento?
            </h2>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "var(--dark)",
              marginBottom: "2rem",
              opacity: 0.85,
            }}>
              Disponible para conferencias en México, Estados Unidos y Latinoamérica.
            </p>
            <a href="/contacto" style={{
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
              Solicitar información
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
