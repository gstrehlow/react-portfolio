import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Password Generator",
      description:
        "Generate a random password based on the criteria you choose.",
      image: "password-generator.png",
      technologies: ["HTML/CSS/JS"],
      github: "https://github.com/gstrehlow/Challenge3PasswordGenerator",
      deployed: "https://gstrehlow.github.io/Challenge3PasswordGenerator/",
    },
    {
      name: "Animal Showdown",
      description:
        "A fun 'Would you rather?' game on which animal you think would win in a brawl.",
      image: "animal-showdown.png",
      technologies: ["React.js/Tailwind CSS/JS/MySQL/Express.js"],
      github: "https://github.com/cerihaf/react-showdown",
      deployed: "https://reactshowdown.herokuapp.com/login",
    },
    {
      name: "Crypto Cross",
      description:
        "A site where you can compare prices of different cryptocurrencies.",
      image: "crypto-cross.png",
      technologies: ["HTML/CSS/JS"],
      github: "https://github.com/gstrehlow/crypto-api",
      deployed: "https://gotad.io/crypto-api/",
    },
    {
      name: "Weather Dashboard",
      description:
        "Check the current or 5-day weather forecast for any US city.",
      image: "weather-dashboard.png",
      technologies: ["HTML/CSS/JS"],
      github: "https://github.com/gstrehlow/weather-dashboard-challenge",
      deployed: "https://gstrehlow.github.io/weather-dashboard-challenge/",
    },
    {
      name: "Photo Port",
      description:
        "My first react project - a mock portfolio for a photographer.",
      image: "photo-port.PNG",
      technologies: ["React.js/CSS/JS"],
      github: "https://github.com/gstrehlow/photo-port",
      deployed: "https://gstrehlow.github.io/photo-port/",
    },
    {
      name: "Taskmaster Pro",
      description:
        "Simple but aesthetic site where you can create tasks for yourself.",
      image: "taskmaster-pro.png",
      technologies: ["HTML/CSS/JS"],
      github: "https://github.com/gstrehlow/taskmaster-pro",
      deployed: "https://gstrehlow.github.io/taskmaster-pro/",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
