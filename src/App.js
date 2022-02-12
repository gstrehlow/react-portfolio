import { React, useState } from "react";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("About");

  return (
    <div>
      <Layout selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <Routes>
          <Route path="/" element={<About />} />
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
