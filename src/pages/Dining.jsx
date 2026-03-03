import React from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function Dining({ setPage }) {
  useReveal();
  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="Dining at Elara" sub="Restaurant" />

      <section style={{ padding:"5rem 4rem", maxWidth:"1100px", margin:"0 auto" }}>
        {[
          { title:"The Main Restaurant", hours:"7pm – 10:30pm", desc:"Our signature dining room seats forty guests. Exposed stone walls, candlelight, and a terrace that overlooks the caldera. The tasting menu evolves nightly around what arrived from sea and soil that morning.", tag:"Tasting Menu · À la Carte" },
          { title:"The Sunrise Terrace", hours:"7am – 11am", desc:"Breakfast service on the outdoor terrace. Fresh pastries, island honey, local cheese, eggs from our hens.", tag:"Breakfast Only" },
          { title:"The Bar", hours:"4pm – Midnight", desc:"Natural wines, rare spirits, and the only bar in Santorini where the olives are cured in-house. Light bites until 10pm. Live piano on Fridays.", tag:"Bar & Light Dining" },
        ].map((d,i) => (
          <div key={i} className="reveal" style={{ display:"grid", gridTemplateColumns: i%2===0 ? "1fr 1.2fr" : "1.2fr 1fr", gap:"4rem", alignItems:"center", marginBottom:"6rem", flexDirection: i%2===1 ? "row-reverse" : "row" }}>
            <style>{`@media(max-width:768px){.dining-row{grid-template-columns:1fr!important}}`}</style>
            <div className="dining-row" style={{ order: i%2===1 ? 1 : 0 }}>
              <p style={{ fontSize:"0.6rem", letterSpacing:"0.4em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"1rem" }}>{d.tag}</p>
              <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:300, marginBottom:"0.8rem" }}>{d.title}</h2>
              <p style={{ fontSize:"0.75rem", letterSpacing:"0.2em", color:"var(--muted)", marginBottom:"1.5rem" }}>Hours: {d.hours}</p>
              <span style={{ display:"block", width:"32px", height:"1px", background:"var(--rule)", marginBottom:"1.5rem" }} />
              <p style={{ color:"var(--muted)", lineHeight:1.9, fontSize:"0.95rem" }}>{d.desc}</p>
              <button onClick={() => { setPage("Reservations"); window.scrollTo(0,0); }} style={{ marginTop:"2rem", background:"none", border:"1px solid var(--rule)", color:"var(--gold)", padding:"0.8rem 1.8rem", cursor:"pointer", fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", transition:"all 0.3s" }} onMouseEnter={e=>{e.target.style.background="var(--gold)";e.target.style.color="var(--ink)"}} onMouseLeave={e=>{e.target.style.background="none";e.target.style.color="var(--gold)"}}>Reserve</button>
            </div>
            <div style={{ aspectRatio:"5/4", order: i%2===1 ? 0 : 1, background:`linear-gradient(${135+i*30}deg, hsl(${200+i*30},${20+i*5}%,${10+i*3}%) 0%, hsl(30,40%,8%) 100%)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"4rem", opacity: 1 }}>
              <span style={{ opacity:0.12 }}>{["🍽️","☀️","🍷"][i]}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
