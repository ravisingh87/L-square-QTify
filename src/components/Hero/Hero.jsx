import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require('../../../assets/vibrating-headphone.png')}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
};

export default Hero;
