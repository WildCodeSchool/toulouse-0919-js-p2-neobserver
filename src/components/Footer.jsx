import React from 'react';
import NASA from '../assets/NASA.png';

function Footer() {
  return (
    <div>
      <img src={NASA} />
      <img />
      <div className="directors">
        <img />
        <ul>
          <li>Directors</li>
          <li>
            <a href="https://github.com/">Anna Marandola</a>
          </li>
          <li>
            <a href="https://github.com/">Coralie Rubin</a>
          </li>
          <li>
            <a href="https://github.com/">Julien Berthoumieux</a>
          </li>
          <li>
            <a href="https://github.com/">Morgane Marié</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
