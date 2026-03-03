import React from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function About() {
  useReveal();
  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="Our Story" sub="About Elara" />

      <section style={{ padding:"5rem 4rem", maxWidth:"960px", margin:"0 auto" }}>
        <div className="reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }}>
          <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
          <div className="about-grid">
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.65rem", fontWeight:300, lineHeight:1.6, marginBottom:"2rem", fontStyle:"italic" }}>
              Elara was born from a single conviction: that a meal, taken in the right place, with the right care, can become a memory that lasts a lifetime.
            </p>
            <p style={{ color:"var(--muted)", lineHeight:1.9, marginBottom:"1.5rem" }}>
              Founded in 2008 by Elena and Marcos Papadopoulos, Elara began as a small terrace restaurant with twelve covers and a wood-fired grill. Over sixteen years, it has grown — always slowly, always intentionally — into what it is today: a hotel and restaurant of international standing, rooted in the deep rhythms of Santorini.
            </p>
            <p style={{ color:"var(--muted)", lineHeight:1.9 }}>
              We remain a family business. Elena designs the interiors and oversees the suites. Marcos leads the kitchen. Their daughter Sofia manages the wine program. Nothing is outsourced. Nothing is accidental.
            </p>
          </div>
          <div>
            {[
              { n:"16", l:"Years of service" },
              { n:"12", l:"Private suites" },
              { n:"3", l:"Michelin stars" },
              { n:"∞", l:"Memories made" },
            ].map((s,i) => (
              <div key={i} className="reveal" style={{ padding:"1.8rem 0", borderBottom:"1px solid var(--rule)", display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:300, color:"var(--gold)" }}>{s.n}</span>
                <span style={{ fontSize:"0.7rem", letterSpacing:"0.3em", color:"var(--muted)", textTransform:"uppercase" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
