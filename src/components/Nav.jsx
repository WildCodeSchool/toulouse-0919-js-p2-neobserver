import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Nav.css';

function Nav() {
  return (
    <div className="containerNavbar">
      <nav className="nav">
        <img className="Logo" src={Logo} alt="" />
        <div className="NavButtons">
          <Link className="NavLinkText" to="/" alt="link to neos">
            NEOs
          </Link>
          <Link className="NavLinkText" to="/" alt="link to News">
            News
          </Link>
          <Link className="NavLinkText" to="/" alt="link to glossary">
            Glossary
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
