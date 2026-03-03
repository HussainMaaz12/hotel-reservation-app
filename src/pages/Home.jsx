import React from "react";
import useReveal from "../hooks/useReveal";

export default function Home({ setPage }) {
  useReveal();

  const heroOverlay = {
    position: "absolute", inset: 0,
    background: "linear-gradient(to bottom, rgba(14,12,10,0.45) 0%, rgba(14,12,10,0.2) 40%, rgba(14,12,10,0.75) 100%)",
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position:"relative", height:"100vh", minHeight:"600px", overflow:"hidden" }}>
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(135deg, #2a1f12 0%, #1a1208 30%, #0e1015 60%, #111820 100%)",
        }}>
          <div style={{ position:"absolute", inset:0, opacity:0.05,
            backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        </div>
        <div style={heroOverlay} />

        <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"0 2rem" }}>
          <p style={{ fontSize:"0.65rem", letterSpacing:"0.45em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"1.5rem", opacity:0, animation:"fadeUp 1s 0.3s forwards" }}>
            EST. 2008 · SANTORINI
          </p>
          <h1 style={{ fontSize:"clamp(3.5rem, 10vw, 8rem)", lineHeight:1.0, fontWeight:300, letterSpacing:"0.05em", marginBottom:"1rem", opacity:0, animation:"fadeUp 1s 0.55s forwards" }}>
            Where Memory<br />
            <em style={{ fontStyle:"italic", color:"var(--gold-lt)" }}>Becomes Taste</em>
          </h1>
          <p style={{ maxWidth:"440px", fontSize:"1.05rem", fontWeight:300, lineHeight:1.8, color:"rgba(247,242,235,0.72)", marginBottom:"3rem", opacity:0, animation:"fadeUp 1s 0.8s forwards" }}>
            A sanctuary of culinary artistry and refined hospitality,<br />nestled above the Aegean.
          </p>
          <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap", justifyContent:"center", opacity:0, animation:"fadeUp 1s 1s forwards" }}>
            <button onClick={() => { setPage("Reservations"); window.scrollTo(0,0); }} style={{ background:"var(--gold)", color:"var(--ink)", border:"none", cursor:"pointer", padding:"0.9rem 2.4rem", fontSize:"0.68rem", letterSpacing:"0.25em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", transition:"background 0.3s" }} onMouseEnter={e=>e.target.style.background="var(--gold-lt)"} onMouseLeave={e=>e.target.style.background="var(--gold)"}>Reserve a Table</button>
            <button onClick={() => { setPage("Dining"); window.scrollTo(0,0); }} style={{ background:"transparent", color:"var(--canvas)", border:"1px solid rgba(247,242,235,0.35)", cursor:"pointer", padding:"0.9rem 2.4rem", fontSize:"0.68rem", letterSpacing:"0.25em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", transition:"border-color 0.3s" }} onMouseEnter={e=>e.target.style.borderColor="var(--gold)"} onMouseLeave={e=>e.target.style.borderColor="rgba(247,242,235,0.35)"}>Explore Dining</button>
          </div>
        </div>

        <div style={{ position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem", opacity:0, animation:"fadeUp 1s 1.3s forwards" }}>
          <span style={{ fontSize:"0.58rem", letterSpacing:"0.35em", color:"var(--muted)" }}>SCROLL</span>
          <div style={{ width:"1px", height:"40px", background:"linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>

        <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
      </section>

      {/* Remaining home sections omitted for brevity in this split — keep the UI minimal here. */}
    </div>
  );
}
