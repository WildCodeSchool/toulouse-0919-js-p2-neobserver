import React from 'react';
import { Parallax } from 'react-parallax';
import COMET from '../assets/COMET.jpg';
import ASTEROID from '../assets/ASTEROID.jpg';
import METEROID from '../assets/METEROID.gif';
import planetTest from '../assets/planetTest.png';

import './Glossary.css';

const Glossary = () => {
  return (
    <Parallax bgImage={planetTest} strength={400}>
      <div className="BigDiv">
        <h1>Glossary</h1>
        <div className="AllDef">
          <div className="FirstCol">
            <div className="TitleBg">
              <h3>NEO</h3>
            </div>
            <p>
              A near-Earth object (NEO) is any small Solar System body whose orbit brings it to
              proximity with Earth. By convention, a Solar System body is a NEO if its closest
              approach to the Sun (perihelion) is less than 1.3 astronomical units (AU). If a NEO's
              orbit crosses the Earth's, and the object is larger than 140 meters (460 ft) across,
              it is considered a potentially hazardous object (PHO). Most known PHOs and NEOs are
              asteroids, but a small fraction are comets. There are over 20,000 known near-Earth
              asteroids (NEAs), over a hundred short-period near-Earth comets (NECs), and a number
              of solar-orbiting spacecraft and meteoroids large enough to be tracked in space before
              striking the Earth. It is now widely accepted that collisions in the past have had a
              significant role in shaping the geological and biological history of the Earth. NEOs
              have become of increased interest since the 1980s because of greater awareness of the
              potential danger. Asteroids as small as 20 m can damage the local environment and
              populations. Larger asteroids penetrate the atmosphere to the surface of the Earth,
              producing craters or tsunamis. Asteroid impact avoidance by deflection is possible in
              principle, and methods of mitigation are being researched.
            </p>
          </div>
          <img className="Cometpic" src={COMET} alt="Mathilde comet" />
          <div className="FirstCol">
            <div className="TitleBg">
              <h3>Comet</h3>
            </div>
            <p>
              A comet is an icy, small Solar System body that, when passing close to the Sun, warms
              and begins to release gases, a process called outgassing. This produces a visible
              atmosphere or coma, and sometimes also a tail. These phenomena are due to the effects
              of solar radiation and the solar wind acting upon the nucleus of the comet. Comet
              nuclei range from a few hundred metres to tens of kilometres across and are composed
              of loose collections of ice, dust, and small rocky particles.
            </p>
          </div>
          <div className="SecondColumn">
            <iframe
              title="all Neos"
              src="https://giphy.com/embed/m9jAzUg9eXQh8RqgYd"
              width="480"
              height="270"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
            <a
              title="gifneo"
              className="GifNasa"
              href="https://giphy.com/gifs/nasa-space-asteroid-planetary-defense-m9jAzUg9eXQh8RqgYd"
            />
            <div className="SecondCol">
              <div className="TitleBg">
                <h3>Asteroid</h3>
              </div>
              <p>
                Asteroids are minor planets, especially of the inner Solar System. Larger asteroids
                have also been called planetoids. These terms have historically been applied to any
                astronomical object orbiting the Sun that did not resemble a planet-like disc and
                was not observed to have characteristics of an active comet such as a tail. As minor
                planets in the outer Solar System were discovered they were typically found to have
                volatile-rich surfaces similar to comets. As a result, they were often distinguished
                from objects found in the main asteroid belt.
              </p>
            </div>
            <img className="AsteroidPic" src={ASTEROID} alt="the giant asteroid Vesta" />
            <div className="SecondCol">
              <div className="TitleBg">
                <h3>Meteroid</h3>
              </div>
              <p>
                A meteoroid is a small rocky or metallic body in outer space. Meteoroids are
                significantly smaller than asteroids, and range in size from small grains to
                one-meter-wide objects. Objects smaller than this are classified as micrometeoroids
                or space dust. Most are fragments from comets or asteroids, whereas others are
                collision impact debris ejected from bodies such as the Moon or Mars.
              </p>
            </div>
            <iframe
              title="Meteor to meteroid"
              className="MeteroidPic"
              src={METEROID}
              width="600"
              height="450"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Glossary;
