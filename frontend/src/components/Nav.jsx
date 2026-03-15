import React, { useState, useEffect } from "react";

export default function Nav({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home", "About", "Dining", "Menu", "Gallery", "Reservations", "Contact"];

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: scrolled ? "1rem 3rem" : "1.6rem 3rem",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: scrolled ? "rgba(14,12,10,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--rule)" : "none",
    transition: "all 0.4s ease",
  };

  return (
    <nav style={navStyle}>
      <button onClick={() => { setPage("Home"); setMenuOpen(false); window.scrollTo(0,0); }}
        style={{ background:"none", border:"none", cursor:"pointer", textAlign:"left" }}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", letterSpacing:"0.18em", color:"var(--canvas)", fontWeight:300 }}>
          ELARA
        </div>
        <div style={{ fontSize:"0.58rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginTop:"1px" }}>
          Hotel &amp; Restaurant
        </div>
      </button>

      <ul style={{ listStyle:"none", display:"flex", gap:"2.4rem", alignItems:"center" }} className="desktop-nav">
        <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => { setPage(l); window.scrollTo(0,0); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
                color: activePage === l ? "var(--gold)" : "var(--canvas)",
                fontFamily: "'Jost',sans-serif", fontWeight: 400,
                transition: "color 0.2s",
                position: "relative",
              }}
              className="hover-line"
            >{l}</button>
          </li>
        ))}
      </ul>

      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
        style={{ background:"none", border:"none", cursor:"pointer", display:"none", flexDirection:"column", gap:"5px" }}>
        <style>{`.hamburger{display:none!important}@media(max-width:768px){.hamburger{display:flex!important}}`}</style>
        {[0,1,2].map(i => (
          <span key={i} style={{ display:"block", width:"22px", height:"1px",
            background: i===1 && menuOpen ? "transparent" : "var(--canvas)",
            transform: menuOpen ? (i===0 ? "rotate(45deg) translate(4px,4px)" : i===2 ? "rotate(-45deg) translate(4px,-4px)" : "") : "",
            transition:"all 0.3s" }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{ position:"fixed", inset:0, background:"var(--ink)", zIndex:99,
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2rem" }}>
          {links.map(l => (
            <button key={l} onClick={() => { setPage(l); setMenuOpen(false); window.scrollTo(0,0); }}
              style={{ background:"none", border:"none", cursor:"pointer",
                fontFamily:"'Cormorant Garamond',serif", fontSize:"2.2rem",
                color: activePage===l ? "var(--gold)" : "var(--canvas)", fontWeight:300 }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
