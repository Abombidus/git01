import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        AboMbidus
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expereince</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copy">
        <small>&copy;Abombidus Portfolio Web Site.All right reserved.</small>
      </div>
    </footer>
  );
}
export default Footer;
