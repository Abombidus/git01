import "./contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { send } from "./../../../node_modules/emailjs-com/es/methods/send/send";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6so17ag", "template_carc5no", form.current, {
        publicKey: "BwdRNK2OpnW3T9mFE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Email </h4>
            {/* <h5>Abombidus@gmail.com</h5> */}
            <a href="mailto:abombidus@gmail.com" className="boul">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            {/* <h5>https://Facebook.com/abombidus...</h5> */}
            <a href="https://web.facebook.com/mario.abo.2025" className="boul">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>+237-695 833 316</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=+237695833316"
              className="boul"
            >
              {/* <a href="https://wa.me/237695833316"></a> */}
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}

        <div className="log">
          {/* <small>A</small> */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              required
              id="name"
              placeholder="Enter your full name"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email@"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message...."
              required
            ></textarea>
            <button
              type="submit"
              id="bout"
              // onClick={sendEmail}
              className="btn btn-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
