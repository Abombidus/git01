import "./header.css";
// import { Link } from "react-router-dom";
import CV from "./../../assets/CV.pdf";

function Download() {
  return (
    <>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
    </>
  );
}

export default Download;
