"use client";
import { useState } from "react";

const TOTAL = 30;
const slides = Array.from({ length: TOTAL }, (_, i) =>
  `/gatier-slides/slide-${String(i + 1).padStart(2, "0")}.jpg`
);

export default function GatierSlideshow() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TOTAL - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TOTAL - 1 ? 0 : c + 1));

  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      {/* Imagen */}
      <div style={{
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
        background: "#000",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      }}>
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Anterior"
        style={{
          position: "absolute",
          left: "-24px",
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#ffffff",
          border: "1px solid rgba(168,144,106,0.3)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "var(--dark)",
          zIndex: 2,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#F2EBE0")}
        onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
      >
        ‹
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Siguiente"
        style={{
          position: "absolute",
          right: "-24px",
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#ffffff",
          border: "1px solid rgba(168,144,106,0.3)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "var(--dark)",
          zIndex: 2,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#F2EBE0")}
        onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
      >
        ›
      </button>

      {/* Contador */}
      <p style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.72rem",
        letterSpacing: "0.15em",
        color: "rgba(33,24,16,0.4)",
        textAlign: "center",
        marginTop: "1.2rem",
      }}>
        {current + 1} / {TOTAL}
      </p>

      {/* Puntos de navegación */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "6px",
        marginTop: "0.8rem",
        flexWrap: "wrap",
        maxWidth: 400,
        margin: "0.8rem auto 0",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a slide ${i + 1}`}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? "var(--gold)" : "rgba(168,144,106,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.25s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
