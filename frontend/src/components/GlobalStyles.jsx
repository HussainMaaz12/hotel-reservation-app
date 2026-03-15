import React from "react";

export default function GlobalStyles() {
  return (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink:    #0e0c0a;
      --canvas: #f7f2eb;
      --warm:   #1c1713;
      --gold:   #b8974a;
      --gold-lt:#d4b06a;
      --muted:  #8a7f72;
      --rule:   rgba(184,151,74,0.3);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Jost', sans-serif;
      background: var(--ink);
      color: var(--canvas);
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 400;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--ink); }
    ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

    /* Smooth reveal */
    .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.85s cubic-bezier(.22,1,.36,1), transform 0.85s cubic-bezier(.22,1,.36,1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* Gold line divider */
    .gold-line { display: block; width: 48px; height: 1px; background: var(--gold); margin: 0 auto 2rem; }
    .gold-line.left { margin-left: 0; }

    /* Hover underline */
    .hover-line { position: relative; text-decoration: none; }
    .hover-line::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: var(--gold); transition: width 0.3s ease; }
    .hover-line:hover::after { width: 100%; }

    input, textarea, select { font-family: 'Jost', sans-serif; }
  `}</style>
  );
}
