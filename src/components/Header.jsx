import { Link } from 'react-router-dom';
import React from 'react';
import { Parallax } from 'react-parallax';
import './Header.css';
import wallpaper from '../assets/wallpaper.jpg';

function Header() {
  return (
    <Parallax bgImage={wallpaper} strength={400}>
      <div className="Header">
        <h1 className="NEOBSERVER">NEOBSERVER</h1>
        <Link to="/AllNeos" alt="Link to all Neos" className="containerDiscover">
          <button className="discover">Discover Near Earth Objects</button>
        </Link>
      </div>
    </Parallax>
  );
}

export default Header;