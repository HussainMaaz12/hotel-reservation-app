import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import PageHeader from "../components/PageHeader";

export default function Reservations() {
  useReveal();
  const [form, setForm] = useState({ name:"", email:"", phone:"", date:"", time:"", guests:"2", request:"" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Something went wrong");
      setStatus("sent");
    } catch (err) {
      setError("Unable to send reservation. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width:"100%", background:"transparent", border:"none", borderBottom:"1px solid var(--rule)", color:"var(--canvas)", padding:"0.8rem 0", fontSize:"0.92rem", fontFamily:"'Jost',sans-serif", outline:"none", transition:"border-color 0.3s",
  };

  const labelStyle = { display:"block", fontSize:"0.6rem", letterSpacing:"0.35em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.3rem" };

  const fieldGroup = (label, name, type="text", options=null) => (
    <div>
      <label style={labelStyle}>{label}</label>
      {options ? (
        <select name={name} value={form[name]} onChange={handle} style={{...inputStyle, background:"var(--warm)"}}>
          {options.map(o=><option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} name={name} value={form[name]} onChange={handle} style={inputStyle} required={name!="request"} onFocus={e=>e.target.style.borderBottomColor="var(--gold)"} onBlur={e=>e.target.style.borderBottomColor="var(--rule)"} />
      )}
    </div>
  );

  return (
    <div style={{ paddingTop:"6rem" }}>
      <PageHeader title="Reserve a Table" sub="Reservations" />
      <section style={{ padding:"3rem 4rem 7rem", maxWidth:"720px", margin:"0 auto" }}>
        {status === "sent" ? (
          <div className="reveal" style={{ textAlign:"center", padding:"5rem 0" }}>
            <span className="gold-line" />
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:300, marginBottom:"1rem" }}>Reservation Received</h3>
            <p style={{ color:"var(--muted)", lineHeight:1.8 }}>Thank you, {form.name}. We'll confirm your reservation at {form.email} within two hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="reveal">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem 3rem", marginBottom:"2rem" }}>
              <style>{`@media(max-width:600px){.res-grid{grid-template-columns:1fr!important}}`}</style>
              <div className="res-grid">{fieldGroup("Full Name","name")}</div>
              <div>{fieldGroup("Email Address","email","email")}</div>
              <div>{fieldGroup("Phone Number","phone","tel")}</div>
              <div>{fieldGroup("Number of Guests","guests","text",["1","2","3","4","5","6","7","8+"])}</div>
              <div>{fieldGroup("Date","date","date")}</div>
              <div>{fieldGroup("Preferred Time","time","text",["19:00","19:30","20:00","20:30","21:00","21:30","22:00"])}</div>
            </div>

            <div style={{ marginBottom:"3rem" }}>
              <label style={labelStyle}>Special Requests (optional)</label>
              <textarea name="request" value={form.request} onChange={handle} rows={4} style={{...inputStyle, resize:"vertical"}} placeholder="Dietary requirements, celebrations, accessibility needs..." onFocus={e=>e.target.style.borderBottomColor="var(--gold)"} onBlur={e=>e.target.style.borderBottomColor="var(--rule)"} />
            </div>

            <button type="submit" style={{ width:"100%", background:"var(--gold)", border:"none", cursor:"pointer", padding:"1.1rem", fontSize:"0.7rem", letterSpacing:"0.3em", textTransform:"uppercase", fontFamily:"'Jost',sans-serif", color:"var(--ink)", transition:"background 0.3s" }} onMouseEnter={e=>e.target.style.background="var(--gold-lt)"} onMouseLeave={e=>e.target.style.background="var(--gold)"}>Confirm Reservation</button>

            {error && <p style={{ marginTop:"1rem", color:"#ffb3b3" }}>{error}</p>}

            <p style={{ marginTop:"1.5rem", textAlign:"center", color:"var(--muted)", fontSize:"0.78rem" }}>Reservations are held for 15 minutes. Cancellations accepted up to 24h prior.</p>
          </form>
        )}
      </section>
    </div>
  );
}
