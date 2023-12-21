import React from "react";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

const Layout = () => {
  return (
    <div className="app-container">
      <header className="header">
        <Header />
      </header>
      <section className="content">
        <Home />
        <About />
        <Projects />
      </section>
    </div>
  );
};

export default Layout;
