import React from 'react';
import NASA from '../assets/NASA.png';
import WILD from '../assets/WILD.png';
import GIT from '../assets/GIT.png';
import './Footer.css';

function Footer() {
  return (
    <div className="container_footer">
      <div className="logos_footer">
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
          <img className="logo-nasa" src={NASA} alt="" />
        </a>
        <a href="https://www.wildcodeschool.com/" target="_blank" rel="noopener noreferrer">
          <img className="logo-wild" src={WILD} alt="" />
        </a>
      </div>
      <div className="directors">
        <img className="logo-git" src={GIT} alt="" />
        <ul className="gitlink_footer">
          <li>
            <a href="https://github.com/AnnaMarandola" target="_blank" rel="noopener noreferrer">
              Anna Marandola
            </a>
          </li>
          <li>
            <a href="https://github.com/CoralieRubin" target="_blank" rel="noopener noreferrer">
              Coralie Rubin
            </a>
          </li>
          <li>
            <a href="https://github.com/Gerceval" target="_blank" rel="noopener noreferrer">
              Julien Berthoumieux
            </a>
          </li>
          <li>
            <a href="https://github.com/Morgane7260" target="_blank" rel="noopener noreferrer">
              Morgane Marié
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
