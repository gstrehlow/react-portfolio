import "./styles.css";
import pfp from "../../assets/images/pfp.jpg";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <img className="profile" src={pfp} alt="photograph" />
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <p className="p-about1">Grant Strehlow</p>
                <p className="p-about">
                  Software Engineer with a history of working on production web
                  and mobile applications. Strong understanding of Computer
                  Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB,
                  MySQL, CSS, HTML and other technologies.
                </p>
                <p className="p-about">
                  I graduated from Kansas University's Coding Bootcamp on March
                  3rd, 2022 and am actively looking for my first opportunity to
                  utilize my skills in a full-time role.
                </p>
                <div className="card-body">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
