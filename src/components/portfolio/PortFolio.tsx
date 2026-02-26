import "./portfolio.css";
import ELeve from "../../assets/Eleve.JPG";
import A from "../../assets/A.JPG";
import Logo from "../../assets/Logo.JPG";
import Business from "../../assets/Business.JPG";
import Book from "../../assets/Book.WEBP";

const data = [
  {
    id: 1,
    image: A,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 2,
    image: A,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto",
  },
  {
    id: 3,
    image: A,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto",
  },
  //   {
  //     id: 4,
  //     image: A,
  //     title: "This is a portfolio item title",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/16673715-Crypto",
  //   },
  //   {
  //     id: 5,
  //     image: A,
  //     title: "This is a portfolio item title",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/16673715-Crypto",
  //   },
  //   {
  //     id: 6,
  //     image: A,
  //     title: "This is a portfolio item title",
  //     github: "https://github.com",
  //     demo: "https://dribbble.com/shots/16673715-Crypto",
  //   },
];

function PortFolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
        {/* 
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={A} alt="A" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={A} alt="A" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article> */}

        {/* <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={A} alt="A" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={A} alt="A" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={A} alt="A" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn">
                Github
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );



}

export default PortFolio;
