import "./testimonials.css";
import React from "react";
import Client from "../../assets/Client.PNG";

// Import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const info = [
  {
    id: 1,
    nom: "Abo",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
  {
    id: 2,
    nom: "Client Name: 2",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
  {
    id: 3,
    nom: "Client Name: 3",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
  {
    id: 4,
    nom: "Client Name: 4",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
  {
    id: 5,
    nom: "Client Name: 5",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
  {
    id: 6,
    nom: "Client Name: 6",
    photo: Client,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturmodi vero, deserunt harum perferendis nisi ipsum.",
  },
];
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        Pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
      >
        <div className="container testimonial__container">
          {info.map(({ id, nom, photo, text }) => {
            return (
              <SwiperSlide>
                <article key={id} className="testimonial">
                  <div className="client__avatar">
                    <img src={photo} alt="" />
                  </div>
                  <h5 className="client__name">{nom}</h5>
                  <small className="client__review">{text}</small>
                </article>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
}

export default Testimonials;
