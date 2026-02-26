import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiDribbble } from "react-icons/fi";

function HeaderSocials() {
  return (
    <>
      <div className="header__socials">
        <a href="htttps://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dribbble" target="_blank">
          <FiDribbble />
        </a>
      </div>
    </>
  );
}

export default HeaderSocials;
