import React from "react";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
