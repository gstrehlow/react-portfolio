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
                  and mobile applications. Deep understanding in Computer
                  Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB,
                  MySQL, CSS, HTML and other technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
