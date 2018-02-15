import React from 'react';
import './about.css';

function About() {
    return <div className="section-about mt-4 mb-4">
    <h1 className="text-center text-white mb-4">meet us, fly with us</h1>
    <div className="parallax"></div>
    <div className="container">
      <h1>Rocketman designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live.
      </h1></div>
    <div className="parallax2"></div>
    <div className="container">
      <h1>In 2017, Rocketman successfully achieved the first reflight of an orbital class rocket – a historic milestone on the road to full and rapid rocket reusability.
      </h1></div>
      <div>
        <p className="text-center p-4">
            <span>YOUTUBE</span>
            <span>TWITTER</span>
            <span>FACEBOOK</span>
        </p>
      </div>
  </div>
}

export default About;


