import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import Devbanner from '../../../assets/images/Devbanner.png';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Unavailable from '../../details/Unavailable';

function Dev() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | Front End</title>
      </Helmet>
      <div className='main'>
        <ScrollToTop showUnder={160} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
          <img src={Arrow} alt='Scroll to Top'></img>
        </ScrollToTop>
        <PortfolioHeader
          src={Devbanner}
          title='front-end development'
          short=''
          desc='ICUBE is the home of Social Entrepreneurship and early-stage start-ups at UTM, 
          offering resources, programs, workshops and mentorship for people who are changing the world.'
          detailtitle={['role', 'duration', 'libraries & languages']}
          detaildesc={['freelance developer', '2 years', 'javascript \n HTML/CSS \n react']}
        />
      </div>
      <div className='container'>
      <Unavailable
          title='under construction!'
          p='This page will be up soon! Stay tuned :-)'
          button='view other works'
          target='_self'
          href='/'
        />
      </div>
    </>
  )
}

export default Dev