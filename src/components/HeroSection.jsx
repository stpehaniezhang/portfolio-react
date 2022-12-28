import React from 'react'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-name'>stephanie <span className='red-text'>zhang</span></div>
        <div className='hero-text'>
            <h1 className='hero-header-text'><span className='blue-text'>hi.</span> nice to meet you <span className='star-text'>✦ </span>i’m a 
            <span className='blue-text'> product designer</span> based in <span className='blue-text'>toronto, ca</span>
            <span className='star-text'>✦ </span>currently working as a designer at <span className='blue-text'>icube utm </span><span className='star-text'>✦ </span> huge
            interest in gaming, art & <span className='blue-text'>making life easier through
            interactive designs.</span></h1>
        </div>
    </div>
  )
}

export default HeroSection