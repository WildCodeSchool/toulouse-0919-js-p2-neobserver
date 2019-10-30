import React from 'react';
import { Parallax } from 'react-parallax';
import './Header.css';
import wallpaper from '../assets/planetTest.png';

function Header() {
  return (
    <Parallax bgImage={wallpaper} strength={400}>
      <div className="Header">
        <h1 className="NEOBSERVER">NEOBSERVER</h1>
      </div>
    </Parallax>
  );
}

export default Header;
