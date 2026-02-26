import React from "react";
import "./about.css";
import Me from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* <p>ggggg</p> */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={Me} alt="me__about-img " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Yrs Working </small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>150+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam
            amet quae dolores sequi sint pariatur commodi nisi vitae obcaecati
            repellendus excepturi eos rerum, quia doloribus aut, ipsam id
            voluptatibus!
          </p>
          <a href="#contact" className="btn btn-primary" id="letBtn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
