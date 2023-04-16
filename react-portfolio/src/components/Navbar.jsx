import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
  return (
    <div>
      {" "}
      
      <nav className="nav">
        <div className="name">Lucas Araujo</div>
        <ul className="navbarul">
          <Link to="about">
          <li className="navbarli">
              {" "}
              <FaUserAlt /> About Me
            </li>
          </Link>
          <Link to="projects">
          <li className="navbarli">

              {" "}
              <BsFillBriefcaseFill /> Projects
            </li>
          </Link>
          <Link to="contact">
          <li className="navbarli">

              {" "}
              <FaEnvelope /> Contact Me
            </li>
          </Link>
          <Link to="resume">
          <li className="navbarli">

              {" "}
              <FaEnvelope /> Resume
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;