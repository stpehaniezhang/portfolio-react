import React from 'react'
import './HeroSection.css';
import ArrowDown from '../assets/images/ArrowDown.svg';
import { NavLink } from 'react-router-dom';

function HeroSection() {

  //const scrollTo = document.querySelector('#work-section');

  //const scrollWork = () => {
		//scrollTo.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'});
	//};

  return (
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <div className='hero-text-container'>
      <div className='hero-name'>stephanie<span className='red-text'>zhang</span>
      </div>
        <div className='hero-text'>
            <h1 className='hero-header-text'>product designer based in toronto, ca</h1>
            <h1 className='hero-header-subtext'>learn more <NavLink to="/about" className='big-links'>about me</NavLink> or view my work below</h1>
        </div>
        </div>
        <img src={ArrowDown} alt='arrow' className='img-mid'></img>
        </div>
    </div>
  )
}

export default HeroSection