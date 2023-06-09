import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './Footer.css';

function Footer() {
    return (
     
      <div className="footer">
        <footer>
          <a href="https://www.linkedin.com/in/lucasaraujoau/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/muulinha" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
        </footer>
            </div>
    );
  }
  
  export default Footer;