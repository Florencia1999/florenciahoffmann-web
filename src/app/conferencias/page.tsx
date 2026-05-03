import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conferencias",
  description:
    "Florencia Hoffmann como conferencista internacional — temas de liderazgo femenino, magnetismo, estándares altos y mentalidad de éxito. Disponible para eventos en México, EE.UU. y Latinoamérica.",
};

export default function Conferencias() {
  const temas = [
    {
      num: "01",
      title: "El magnetismo femenino como ventaja competitiva",
      desc: "Cómo la presencia, confianza y elegancia de una mujer generan resultados reales en los negocios, las relaciones y el liderazgo.",
      publico: "Ejecutivas, emprendedoras, líderes de equipo",
    },
    {
      num: "02",
      title: "Estándares altos: la estrategia más subestimada",
      desc: "Por qué las personas y organizaciones que prosperan a largo plazo lo hacen gracias a sus estándares, no a pesar de ellos.",
      publico: "Empresas, convenciones de ventas, líderes",
    },
    {
      num: "03",
      title: "Haz que suceda — Del sueño a la ejecución",
      desc: "El sistema práctico que llevó a Florencia de Sinaloa a escenarios internacionales con más de 30 conferencias en 6 países.",
      publico: "Emprendedores, mujeres de negocios, universitarios",
    },
    {
      num: "04",
      title: "FLORECE: la mujer que ya eres",
      desc: "Un mensaje de transformación personal para mujeres que quieren vivir desde su versión más poderosa, elegante y auténtica.",
      publico: "Eventos de mujeres, convenciones femeninas, retiros",
    },
  ];

  const escenarios = [
    "John C. Maxwell",
    "Brian Tracy",
    "Fernando Anzures (EXMA)",
    "Coral Mujaes",
    "Vilma Nuñez",
    "Jorge Serratos",
    "Spencer Hoffmann",
    "y muchos más",
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En qué países está disponible Florencia Hoffmann como conferencista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Florencia Hoffmann está disponible para conferencias en México, Estados Unidos, y toda Latinoamérica. Ha dado conferencias en México, EE.UU., Perú, Costa Rica, entre otros países.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los temas de conferencia de Florencia Hoffmann?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sus temas principales son: magnetismo femenino como ventaja competitiva, estándares altos en negocios y liderazgo, ejecución y mentalidad de éxito, y transformación femenina (programa FLORECE).",
        },
      },
      {
        "@type": "Question",
        name: "¿Con quién ha compartido escenario Florencia Hoffmann?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Florencia Hoffmann ha compartido escenario con John C. Maxwell, Brian Tracy, Fernando Anzures (creador de EXMA), Coral Mujaes, Vilma Nuñez, Jorge Serratos, y muchos más.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main style={{ paddingTop: 72 }}>
        {/* Header */}
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
            }}>Conferencias internacionales</span>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              color: "var(--dark)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              Una voz que<br />
              <em style={{ color: "var(--gold)" }}>mueve audiencias</em>
            </h1>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              color: "var(--text)",
              lineHeight: 1.8,
            }}>
              Conferencista Internacional · +30 conferencias · México, EE.UU., Perú, Costa Rica, entre otros
            </p>
          </div>
        </section>

        {/* VIDEO DE PRESENTACIÓN */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}>Mírala en acción</span>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "3rem",
            }}>
              La experiencia de tener a Florencia<br />
              <em style={{ color: "var(--gold)" }}>en tu escenario</em>
            </h2>
            <div style={{
              position: "relative",
              width: "100%",
              borderRadius: 0,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}>
              <video
                src="/florencia-presentacion.mp4"
                controls
                playsInline
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "560px",
                  objectFit: "cover",
                  background: "#000",
                }}
                poster="/florencia-speaker-1.jpg"
              />
            </div>
          </div>
        </section>

        {/* Temas */}
        <section style={{ padding: "100px 24px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "3rem",
            }}>Temas de conferencia</span>
            <div style={{ display: "grid", gap: "2.5rem" }}>
              {temas.map((tema) => (
                <div key={tema.num} style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "2rem",
                  borderTop: "1px solid rgba(168,144,106,0.3)",
                  paddingTop: "2rem",
                  alignItems: "start",
                }}>
                  <span style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "var(--gold)",
                    opacity: 0.6,
                  }}>{tema.num}</span>
                  <div>
                    <h2 style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "var(--dark)",
                      marginBottom: "0.75rem",
                    }}>{tema.title}</h2>
                    <p style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      lineHeight: 1.8,
                      marginBottom: "0.75rem",
                    }}>{tema.desc}</p>
                    <p style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}>Público: {tema.publico}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Escenarios compartidos */}
        <section style={{ padding: "80px 24px", background: "#F0EBE3" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "2rem",
              textAlign: "center",
            }}>Ha compartido escenario con</span>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}>
              {escenarios.map((nombre) => (
                <span key={nombre} style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  border: "1px solid rgba(168,144,106,0.4)",
                  padding: "8px 20px",
                }}>
                  {nombre}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section style={{ padding: "100px 24px", background: "#F2EBE0", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--dark)",
              marginBottom: "1.5rem",
            }}>
              Agenda a Florencia<br />
              <em style={{ color: "var(--gold)" }}>en tu evento</em>
            </h2>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "var(--text)",
              marginBottom: "3rem",
              lineHeight: 1.8,
            }}>
              Disponible para conferencias, keynotes, paneles y talleres en México, EE.UU. y Latinoamérica.
            </p>
            <a
              href={`https://wa.me/525564938428?text=${encodeURIComponent("Hola Florencia, me interesa contratarte para una conferencia. ¿Podríamos hablar?")}`}
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
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
