export default function Footer() {
  return (
    <footer style={{
      background: "#F2EBE0",
      color: "rgba(33,24,16,0.6)",
      padding: "60px 24px 40px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.8rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1.5rem",
        }}>
          Florencia Hoffmann
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}>
          {[
            { href: "https://www.instagram.com/florencia.hoffmann?igsh=MWhnOXkydHZhY2lncQ%3D%3D&utm_source=qr", label: "Instagram" },
            { href: "https://www.tiktok.com/@florencia_hoffmann?_r=1&_t=ZS-95yzdCexrBk", label: "TikTok" },
            { href: "https://www.youtube.com/@florenciahoffmann1", label: "YouTube" },
            { href: "https://www.linkedin.com/in/florenciahoffmann/", label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}>
          {[
            { href: "/sobre-mi", label: "Sobre mí" },
            { href: "/conferencias", label: "Conferencias" },
            { href: "/blog", label: "Blog" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(33,24,16,0.5)",
            }}>
              {l.label}
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.7rem",
          opacity: 0.4,
        }}>
          © {new Date().getFullYear()} Florencia Hoffmann · florenciahoffmann.com
        </p>
      </div>
    </footer>
  );
}
