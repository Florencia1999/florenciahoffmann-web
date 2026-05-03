"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/conferencias", label: "Conferencias" },
    { href: "/gatier", label: "Gatier" },
    { href: "/florece", label: "Florece" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(242,235,224,0.97)" : "transparent",
      transition: "background 0.3s ease",
    }}>
      <a href="/" style={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "1.3rem",
        fontWeight: 500,
        color: scrolled ? "var(--dark)" : "var(--cream)",
        letterSpacing: "0.05em",
        textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.5)",
      }}>
        Florencia Hoffmann
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: scrolled ? "rgba(33,24,16,0.85)" : "rgba(250,247,242,0.9)",
            transition: "color 0.2s",
            whiteSpace: "nowrap",
            textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.5)",
          }}>
            {l.label}
          </a>
        ))}
        <a href="/contacto" style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--dark)",
          background: "var(--gold)",
          padding: "10px 24px",
          fontWeight: 600,
        }}>
          Contratar
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--cream)",
          fontSize: "1.5rem",
        }}
        className="mobile-menu-btn"
        aria-label="Menú"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed",
          top: 72,
          left: 0,
          right: 0,
          background: "rgba(242,235,224,0.98)",
          padding: "2rem 24px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--dark)",
            }}>
              {l.label}
            </a>
          ))}
          <a href="/conferencias" onClick={() => setOpen(false)} style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--dark)",
            background: "var(--gold)",
            padding: "14px 24px",
            fontWeight: 600,
            textAlign: "center",
          }}>
            Contratar conferencia
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
