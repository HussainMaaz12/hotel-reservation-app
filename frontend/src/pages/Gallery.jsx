import React from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function Gallery() {
  useReveal();
  const cells = [
    { h:2, label:"The Main Dining Room" },
    { h:1, label:"Morning Catch" },
    { h:1, label:"Dessert Station" },
    { h:1, label:"The Terrace at Dusk" },
    { h:2, label:"Suite No. 7" },
    { h:1, label:"Wine Cellar" },
    { h:1, label:"Sunrise Breakfast" },
    { h:1, label:"The Bar" },
    { h:1, label:"Caldera View" },
  ];

  const gradients = [
    "linear-gradient(135deg,#1a2030 0%,#0e1520 100%)",
    "linear-gradient(160deg,#1e1208 0%,#2a1808 100%)",
    "linear-gradient(120deg,#0e1a10 0%,#0a1208 100%)",
    "linear-gradient(145deg,#1a0e1a 0%,#0e0814 100%)",
    "linear-gradient(135deg,#1a1810 0%,#10100a 100%)",
    "linear-gradient(155deg,#0a1820 0%,#060e14 100%)",
    "linear-gradient(130deg,#1a1208 0%,#100e08 100%)",
    "linear-gradient(140deg,#0e0e1a 0%,#080810 100%)",
    "linear-gradient(135deg,#1a1410 0%,#0c0a08 100%)",
  ];

  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="Gallery" sub="Spaces & Stories" />
      <section style={{ padding:"3rem 2rem 6rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridAutoRows:"240px", gap:"4px", maxWidth:"1280px", margin:"0 auto" }}>
          <style>{`@media(max-width:768px){.gallery-grid{grid-template-columns:1fr!important}}`}</style>
          {cells.map((c,i) => (
            <div key={i} className="reveal gallery-grid" style={{ gridRowEnd:`span ${c.h}`, background: gradients[i], position:"relative", overflow:"hidden", cursor:"pointer", transition:"transform 0.4s ease" }} onMouseEnter={e => { e.currentTarget.style.transform="scale(1.01)"; e.currentTarget.querySelector('.label').style.opacity=1; }} onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.querySelector('.label').style.opacity=0; }}>
              <div className="label" style={{ position:"absolute", inset:0, background:"rgba(14,12,10,0.6)", display:"flex", alignItems:"center", justifyContent:"center", opacity:0, transition:"opacity 0.35s" }}>
                <p style={{ fontSize:"0.65rem", letterSpacing:"0.35em", color:"var(--canvas)", textTransform:"uppercase" }}>{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
