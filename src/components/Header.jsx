import React from 'react';
import { Parallax } from 'react-parallax';
import './Header.css';

const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

function Header() {
  return (
    <Parallax bgImage={image1} strength={800}>
      <div className="Header">
        <h1 className="NEOBSERVER">NEOBSERVER</h1>
      </div>
    </Parallax>
  );
}

export default Header;
