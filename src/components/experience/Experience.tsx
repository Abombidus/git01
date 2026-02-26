import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>JavaScript</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>Material UI</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>React</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>TailWind</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>VUE</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>Node JS</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>C++</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>XML</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icons" />
              <h4>Spring Boot</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
