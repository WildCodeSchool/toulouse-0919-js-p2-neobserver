import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Nav.css';

function Nav() {
  return (
    <div className="containerNavbar">
      <nav className="nav">
        <Link to="/" alt="link to Home">
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <div className="NavButtons">
          <Link className="NavLinkText" to="/" alt="link to neos">
            NEOs
          </Link>
          <Link className="NavLinkText" to="/AllNews" alt="link to News">
            News
          </Link>
          <Link className="NavLinkText" to="/Glossary" alt="link to glossary">
            Glossary
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
