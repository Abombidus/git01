import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {
  BiBook,
  BiMessageSquareDetail,
  BiMessageSquareDots,
} from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

function NavBar() {
  const [focus, setFocus] = useState<string>("#0");
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#home"
            id="#0"
            className={focus === "#0" ? "active" : ""}
            onClick={() => {
              setFocus("#0");
            }}
          >
            <AiOutlineHome />
            <h6>Home</h6>
          </a>
        </li>
        <li>
          <a
            href="#about"
            id="#1"
            onClick={() => {
              setFocus("#1");
            }}
            className={focus === "#1" ? "active" : ""}
          >
            <AiOutlineUser />
            <h6>About</h6>
          </a>
        </li>

        <li>
          <a
            href="#experience"
            id="#2"
            className={focus === "#2" ? "active" : ""}
            onClick={() => {
              setFocus("#2");
            }}
          >
            <BiBook />
            <h6>experience</h6>
          </a>
        </li>
        <li>
          <a
            href="#services"
            id="#3"
            className={focus === "#3" ? "active" : ""}
            onClick={() => {
              setFocus("#3");
            }}
          >
            <RiServiceLine />
            <h6>Services</h6>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            id="#4"
            className={focus === "#4" ? "active" : ""}
            onClick={() => {
              setFocus("#4");
            }}
          >
            <BiMessageSquareDetail />
            <h6>Contact</h6>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
