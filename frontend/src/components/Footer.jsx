import React from "react";

export default function Footer({ setPage }) {
  const cols = [
    { title:"Navigate", links:["Home","About","Dining","Menu","Gallery","Reservations","Contact"] },
    { title:"Visit", links:["Oia, Santorini","+30 22860 71 340","hello@elara-santorini.com","Open Daily"] },
    { title:"Follow", links:["Instagram","Facebook","TripAdvisor","The World's 50 Best"] },
  ];

  return (
    <footer style={{ background:"#080604", borderTop:"1px solid var(--rule)", padding:"5rem 4rem 2rem" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr 1fr", gap:"4rem", marginBottom:"4rem" }}>
          <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}`}</style>
          <div className="footer-grid">
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem",
              fontWeight:300, letterSpacing:"0.15em", marginBottom:"0.3rem" }}>ELARA</div>
            <div style={{ fontSize:"0.58rem", letterSpacing:"0.3em", color:"var(--gold)",
              textTransform:"uppercase", marginBottom:"1.5rem" }}>Hotel &amp; Restaurant</div>
            <p style={{ color:"var(--muted)", fontSize:"0.88rem", lineHeight:1.8, maxWidth:"260px" }}>
              A sanctuary of culinary artistry and refined hospitality in Oia, Santorini since 2008.
            </p>
          </div>
          {cols.map((c,i) => (
            <div key={i}>
              <p style={{ fontSize:"0.58rem", letterSpacing:"0.4em", color:"var(--gold)",
                textTransform:"uppercase", marginBottom:"1.5rem" }}>{c.title}</p>
              <ul style={{ listStyle:"none" }}>
                {c.links.map((l,j) => (
                  <li key={j} style={{ marginBottom:"0.7rem" }}>
                    {i===0 ? (
                      <button onClick={()=>{setPage(l);window.scrollTo(0,0);}}
                        style={{ background:"none", border:"none", cursor:"pointer",
                          color:"var(--muted)", fontSize:"0.85rem",
                          fontFamily:"'Jost',sans-serif", transition:"color 0.2s" }}
                        onMouseEnter={e=>e.target.style.color="var(--canvas)"}
                        onMouseLeave={e=>e.target.style.color="var(--muted)"}>{l}</button>
                    ) : (
                      <span style={{ color:"var(--muted)", fontSize:"0.85rem" }}>{l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid var(--rule)", paddingTop:"1.5rem",
          display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ color:"var(--muted)", fontSize:"0.72rem" }}>© 2025 Elara Hotel & Restaurant. All rights reserved.</p>
          <p style={{ color:"var(--muted)", fontSize:"0.72rem" }}>Privacy Policy · Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
