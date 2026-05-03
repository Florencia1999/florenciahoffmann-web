import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos de Florencia Hoffmann sobre liderazgo femenino, magnetismo, estándares altos, negocios premium y transformación personal.",
};

const posts = [
  {
    slug: "dia-que-decidi-dejar-disculparme",
    title: "El día que decidí dejar de disculparme por ser femenina",
    excerpt: "Había alguien en el público que susurró: '¿Esa es la conferencista? Se ve muy elegante para hablar de negocios.' Lo tomé como el cumplido más grande de mi vida.",
    categoria: "Historia personal",
  },
  {
    slug: "magnetismo-femenino-ventaja-competitiva",
    title: "El magnetismo femenino como ventaja competitiva",
    excerpt: "Cómo la presencia, confianza y elegancia se traducen en resultados reales de negocio — y por qué el mercado está sediento de autenticidad.",
    categoria: "Liderazgo femenino",
  },
  {
    slug: "estandares-altos-estrategia-negocios",
    title: "Por qué los estándares altos son la estrategia más subestimada",
    excerpt: "La pregunta que me hacen constantemente: ¿cómo mantenes estándares altos sin que la gente piense que eres difícil? Mi respuesta siempre sorprende.",
    categoria: "Negocios",
  },
  {
    slug: "tres-lecciones-marca-premium",
    title: "3 lecciones que aprendí al co-fundar una marca premium en México",
    excerpt: "Lo que Gatier me enseñó sobre posicionamiento, identidad personal y las personas correctas — y cómo lo aplico a todo lo que construyo.",
    categoria: "Emprendimiento",
  },
];

export default function Blog() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <section style={{ background: "#F2EBE0", padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}>Artículos</span>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 300,
              color: "var(--dark)",
            }}>
              Palabras que<br />
              <em style={{ color: "var(--gold)" }}>transforman</em>
            </h1>
          </div>
        </section>

        <section style={{ padding: "80px 24px 120px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gap: "0" }}>
            {posts.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={{
                display: "block",
                borderTop: "1px solid rgba(168,144,106,0.3)",
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
                borderBottom: i === posts.length - 1 ? "1px solid rgba(168,144,106,0.3)" : "none",
              }}>
                <span style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}>{post.categoria}</span>
                <h2 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 500,
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>{post.title}</h2>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--text)",
                  lineHeight: 1.8,
                  opacity: 0.8,
                  maxWidth: 600,
                }}>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
