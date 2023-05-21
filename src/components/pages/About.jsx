import React from 'react'
import '../works/Work.css';
import '../WorkDetails.css';
import '../pages/portfolio/main-portfolio.css';
import '../Constants.css';
import self from '../../assets/images/Self.png';
import ArrowDown from '../../assets/images/ArrowDown.svg';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | About</title>
        <meta name="description" content="I was born and raised in Vancouver, British Columbia." data-react-helmet="true"/>
      </Helmet>
      <div className='cards'>
        <div className='cards-container'>
          <div className='cards-wrapper'>
            <div className='about-container'>
              <p className='text-header full'>about me</p>
              <div className='half-text'>
                <img className='half-img' src={self} alt='Self'></img>
                <p className='half-para blue'>
                  <br />
                  Hello! I’m <span className='bold'>Stephanie</span> :-) <br /><br />
                  I was born and raised in <span className='bold'>Vancouver</span>, British Columbia.
                  <br /><br />
                  I’ve been a <span className='bold'>visual artist</span> for 9+ years as well as a <span className='bold'>designer & developer</span> for 4+ years.
                  <br /><br />
                  I graduated from <span className='bold'>University of Toronto</span> in April '23 with a Bachelor's in<span className='bold'>Economics, Statistics & Visual Studies</span>
                  <br /><br />
                  Previously, I worked as a <span className='bold'>freelance designer & developer</span> and on my startup, <NavLink to="/pinch" className='links'>Pinch</NavLink>. I also completed a
                   work study experience at <span className='bold'>University of Toronto, Missisauga's <NavLink to="/icube" className='links'>ICUBE</NavLink></span> during the 2022/2023 school year.
                  <br /><br />
                  I'm always interested in taking up new projects & opportunities! You can contact me
                  by <a className='links' target="_blank" rel="noreferrer" href='mailto:stephaniey.zhang@mail.utoronto.ca'>email</a> or <a className='links' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/stephaniezhang25/'>linkedin</a>!
                </p>
              </div>
              <div className='down-arrow-container'>
                <p className='text-desc blue bottom-margin'>more facts</p>
                <img src={ArrowDown} alt='arrow' className='img-mid'></img>
              </div>
              <div className='fun-facts-container'>
                <div className='fact-item'>
                  <p className='text-desc red'>gaming</p>
                  <p className='project-desc blue'>I currently play competititve Call of Duty. I played <a className='links' target="_blank" rel="noreferrer" href='https://collegecod.com/'>collegiate</a> for University of Toronto in 2022/2023.
                    <br /><br />I also used to play CSGO and other FPS games.</p>
                </div>
                <div className='fact-item'>
                  <p className='text-desc red'>art</p>
                  <p className='project-desc blue'>I’ve been a self-taught traditional artist since 2014.
                    <br /><br />Check out some of my pieces <a className='links' target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1KWwyRb0VZ6WPYxe9XzoSnlpm1y6-qt13?usp=sharing'>here</a> :-)</p>
                </div>
                <div className='fact-item'>
                  <p className='text-desc red'>music</p>
                  <p className='project-desc blue'>I played piano for 12 years, violin for 6 years and clarinet for 5 years!
                    In high school, I was able to go to Ireland to perform along with my <a className='links' target="_blank" rel="noreferrer" href='https://byngband.com/lord-byng-band-online/'>wind ensemble</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About