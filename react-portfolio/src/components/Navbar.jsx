import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {" "}
      <nav className="nav">
        <ul>
          <Link to="about">
            <li>
              {" "}
              <FaUserAlt /> About Me
            </li>
          </Link>

          <Link to="projects">
            <li>
              {" "}
              <BsFillBriefcaseFill /> Projects
            </li>
          </Link>
          <Link to="contact">
            <li>
              {" "}
              <FaEnvelope /> Contact Me
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;