import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const inputStyle = { width:"100%", background:"transparent", border:"none", borderBottom:"1px solid var(--rule)", color:"var(--canvas)", padding:"0.8rem 0", fontSize:"0.92rem", fontFamily:"'Jost',sans-serif", outline:"none", transition:"border-color 0.3s" };

  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="Get in Touch" sub="Contact" />

      <section style={{ padding:"3rem 4rem 7rem", maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem" }}>
        <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

        <div className="reveal contact-grid">
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300, marginBottom:"2rem" }}>We'd love to hear from you.</h3>
          {[ { label:"Address", value:"Oia, Santorini 847 02, Greece" }, { label:"Telephone", value:"+30 22860 71 340" }, { label:"Email", value:"hello@elara-santorini.com" }, { label:"Reservations", value:"+30 22860 71 341" }, ].map((c,i) => (
            <div key={i} style={{ marginBottom:"1.8rem" }}>
              <p style={{ fontSize:"0.6rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.4rem" }}>{c.label}</p>
              <p style={{ color:"var(--muted)", fontSize:"0.95rem" }}>{c.value}</p>
            </div>
          ))}
          <div style={{ marginTop:"2rem" }}>
            <p style={{ fontSize:"0.6rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.8rem" }}>Hours</p>
            <p style={{ color:"var(--muted)", lineHeight:1.9, fontSize:"0.92rem" }}>Restaurant: Daily 19:00 – 22:30<br/>Bar: Daily 16:00 – 00:00<br/>Breakfast: Daily 07:00 – 11:00<br/>Front Desk: 24 hours</p>
          </div>
        </div>

        <div className="reveal">
          {sent ? (
            <div style={{ paddingTop:"3rem" }}>
              <span className="gold-line left" />
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300 }}>Message Sent</h3>
              <p style={{ color:"var(--muted)", marginTop:"1rem" }}>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e=>{e.preventDefault();setSent(true);}}>
              {[ { l:"Name", n:"name", t:"text" }, { l:"Email", n:"email", t:"email" }, ].map(f => (
                <div key={f.n} style={{ marginBottom:"2rem" }}>
                  <label style={{ display:"block", fontSize:"0.6rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.3rem" }}>{f.l}</label>
                  <input type={f.t} value={form[f.n]} onChange={e=>setForm({...form,[f.n]:e.target.value})} required style={inputStyle} onFocus={e=>e.target.style.borderBottomColor="var(--gold)"} onBlur={e=>e.target.style.borderBottomColor="var(--rule)"} />
                </div>
              ))}
              <div style={{ marginBottom:"2.5rem" }}>
                <label style={{ display:"block", fontSize:"0.6rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.3rem" }}>Message</label>
                <textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required style={{...inputStyle,resize:"vertical"}} onFocus={e=>e.target.style.borderBottomColor="var(--gold)"} onBlur={e=>e.target.style.borderBottomColor="var(--rule)"} />
              </div>
              <button type="submit" style={{ width:"100%", background:"transparent", border:"1px solid var(--rule)", cursor:"pointer", padding:"1rem", fontSize:"0.68rem", letterSpacing:"0.3em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", color:"var(--gold)", transition:"all 0.3s" }} onMouseEnter={e=>{e.target.style.background="var(--gold)";e.target.style.color="var(--ink)"}} onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.color="var(--gold)"}}>Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
