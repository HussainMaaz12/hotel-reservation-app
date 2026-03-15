import React from "react";

export default function PageHeader({ title, sub }) {
  return (
    <div style={{
      textAlign:"center", padding:"5rem 2rem 3rem",
      background:"linear-gradient(to bottom, var(--warm), transparent)",
    }}>
      <p style={{ fontSize:"0.6rem", letterSpacing:"0.45em", color:"var(--gold)",
        textTransform:"uppercase", marginBottom:"1rem" }}>{sub}</p>
      <h1 style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)", fontWeight:300, letterSpacing:"0.03em" }}>{title}</h1>
      <span className="gold-line" style={{ marginTop:"1.5rem" }} />
    </div>
  );
}
