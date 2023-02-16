import React, { useState } from "react";
import "./styles.css";
const resume = require("../../assets/images/grant-update-to-resume.pdf");

function Resume() {
  const [languages] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "React.js",
    "Mobile Responsiveness",
  ]);
  const [applications] = useState([
    "Node.js",
    "Express.js",
    "MySQL and NoSQL Databases",
    "Progressive Web Applications (PWA)",
    "REST and GraphQL APIs",
  ]);
  return (
    <section className="resume-section">
      <div>
        <a href={resume} download="grant-strehlow-resume">
          Download PDF
        </a>
      </div>
      <div className="skill-list">
        <div>
          <h5>Front End Proficiencies</h5>
          {languages.map((lan) => {
            return (
              <li className="skill" key={lan}>
                {lan}
              </li>
            );
          })}
        </div>
        <div>
          <h5>Back End Proficiencies</h5>
          {applications.map((app) => {
            return (
              <li className="skill" key={app}>
                {app}
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
