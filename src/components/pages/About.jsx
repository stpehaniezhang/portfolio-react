import React from 'react'
import '../works/Work.css';
import '../WorkDetails.css';
import '../Constants.css';
import self from '../../assets/images/Self.png';
import Helmet from 'react-helmet';

function about() {
  return (
    <>
    <Helmet>
      <title>Stephanie Zhang | About</title>
    </Helmet>
    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <div className='design-container'>
              <p className='text-header'>About me</p>
              <div className='half-text'>
                <p className='half-para blue'>
                  <br/>
                Hello! I’m Stephanie :-) <br/><br/>
                I was born and raised in Vancouver, Beautiful British Columbia.
                <br/><br/>
                I’ve been a visual artist for 9+ years as well as a designer & developer for 4+ years. 
                <br/><br/>
                I'm studying Economics, Statistics & Visual Studies at the University of Toronto, graduating in April '23.
                <br/><br/>
                Previously, I worked as a freelance designer & developer and on my startup, Pinch. I'm currently finishing up
                my work study experience in February '23 at University of Toronto, Missisauga's ICUBE.
                </p>
                <img className='half-img' src={self} alt='Self'></img>
              </div>
              <div className='fun-facts-container'>
                <div className='fact-item'>
                  <p className='text-desc blue'>gaming</p>
                  <p className='project-desc blue'>i currently play collegiate call of duty for University of Toronto.
                  <br/><br/>I also used to play CSGO, rainbow six siege and other FPS games.</p>
                </div>
                <div className='fact-item'>
                  <p className='text-desc blue'>art</p>
                  <p className='project-desc blue'>i’ve been a self-taught traditional artist since 2014. 
                  <br/><br/>check out some of my pieces here :-)</p>
                </div>

              </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default about