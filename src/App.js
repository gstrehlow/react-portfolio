import { React, useState } from "react";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Icon from "./components/Icon";
import { Routes, Route } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("About");

  return (
    <div>
      <Layout selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <About />
                <Icon />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <About />
                <Icon />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
