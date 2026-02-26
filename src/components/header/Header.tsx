import "./header.css";
import Download from "./Download";
import Rme from "./../../assets/Rme.png";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Mbida Pierre </h1>
        <h5 className="text-ligt">Fullstack Developer</h5>
        <Download />

        <HeaderSocials />
        <div className="me">
          <img src={Rme} alt="me" />
        </div>
        <a href="#contact" className="scroll__Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
