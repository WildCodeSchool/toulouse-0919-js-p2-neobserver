import React from 'react';
import { Parallax } from 'react-parallax';
import './Header.css';
import wallpaper from '../assets/wallpaper.jpg';

function Header() {
  return (
    <Parallax bgImage={wallpaper} strength={400}>
      <div className="Header">
        <h1 className="NEOBSERVER">NEOBSERVER</h1>
        <button className="discover">Discover Near Earth Objects</button>
      </div>
    </Parallax>
  );
}

export default Header;
