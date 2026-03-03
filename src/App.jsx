import React, { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Dining from "./pages/Dining";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("Home");
  const pages = { Home, About, Dining, Menu, Gallery, Reservations, Contact };
  const PageComponent = pages[page] || Home;

  return (
    <>
      <GlobalStyles />
      <Nav activePage={page} setPage={setPage} />
      <main>
        <PageComponent setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
    </>
  );
}
