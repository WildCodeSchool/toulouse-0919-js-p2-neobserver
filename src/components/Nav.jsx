import React from 'react';
import Logo from '../assets/Logo.png';
import './Nav.css';

function Nav() {
  return (
    <div className="containerNavbar">
      <nav className="nav">
        <img className="Logo" src={Logo} alt="" />
        <div className="NavButtons">
          <a className="NavLinkText" href=" " alt="link to neos">
            NEO
          </a>
          <a className="NavLinkText" href=" " alt="link to News">
            News
          </a>
          <a className="NavLinkText" href=" " alt="link to glossary">
            Glossary
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
