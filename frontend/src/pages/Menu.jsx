import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function Menu() {
  useReveal();
  const [activeSection, setActiveSection] = useState("Starters");

  const menuData = {
    Starters: [
      { name:"Crudo of Sea Bass", desc:"Chilli oil, sea fennel, bergamot", price:"28" },
      { name:"Grilled Octopus", desc:"Fava purée, preserved lemon, caper leaf", price:"32" },
    ],
    Mains: [
      { name:"Whole Grilled Seabream", desc:"Lemon, herbs, hand-pressed olive oil", price:"56" },
      { name:"Lamb Chops", desc:"Rosemary ash, tzatziki, charred flatbread", price:"62" },
    ],
    Desserts: [
      { name:"Honey Panna Cotta", desc:"Thyme infusion, walnut praline", price:"18" },
      { name:"Dark Chocolate Soufflé", desc:"Espresso gelato, almond tuile", price:"22" },
    ],
    Wine: [
      { name:"Assyrtiko, Santo Wines 2022", desc:"Santorini, Greece · Mineral, citrus", price:"82" },
    ],
  };

  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="The Menu" sub="Seasonal · Daily" />

      <section style={{ padding:"3rem 4rem 6rem", maxWidth:"860px", margin:"0 auto" }}>
        <div className="reveal" style={{ display:"flex", gap:"0", marginBottom:"4rem", borderBottom:"1px solid var(--rule)" }}>
          {Object.keys(menuData).map(s => (
            <button key={s} onClick={() => setActiveSection(s)} style={{ background:"none", border:"none", cursor:"pointer", padding:"0.9rem 1.6rem", fontSize:"0.65rem", letterSpacing:"0.3em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", color: activeSection===s ? "var(--gold)" : "var(--muted)", borderBottom: activeSection===s ? "1px solid var(--gold)" : "1px solid transparent", marginBottom:"-1px", transition:"all 0.25s" }}>{s}</button>
          ))}
        </div>

        <div>
          {menuData[activeSection].map((item,i) => (
            <div key={i} className="reveal" style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"1.5rem 0", borderBottom:"1px solid var(--rule)" }}>
              <div>
                <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:400, marginBottom:"0.3rem" }}>{item.name}</h4>
                <p style={{ color:"var(--muted)", fontSize:"0.82rem", letterSpacing:"0.03em" }}>{item.desc}</p>
              </div>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", color:"var(--gold)", whiteSpace:"nowrap", marginLeft:"2rem" }}>€{item.price}</span>
            </div>
          ))}
        </div>

        <p className="reveal" style={{ marginTop:"3rem", fontSize:"0.75rem", color:"var(--muted)", lineHeight:1.8, borderLeft:"2px solid var(--rule)", paddingLeft:"1.2rem" }}>
          Menu changes daily based on market availability. Please inform us of any dietary requirements at the time of reservation. All prices include VAT.
        </p>
      </section>
    </div>
  );
}
