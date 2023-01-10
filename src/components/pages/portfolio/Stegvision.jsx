import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import ICUBEbanner from '../../../assets/images/ICUBE/ICUBEbanner.svg';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Unavailable from '../../details/Unavailable';

function Stegvision() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | StegVision</title>
      </Helmet>
      <div className='main'>
        <ScrollToTop showUnder={160} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
          <img src={Arrow} alt='Scroll to Top'></img>
        </ScrollToTop>
        <PortfolioHeader
          src={ICUBEbanner}
          title='stegvision'
          short='A technological breakthrough achieved'
          desc='StegVision has developed patent pending anti-counterfeit technology that can solve mission critical problems across industry.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['UI/UX designer', '3 weeks', 'figma', 'UI/UX \n web']}
        />
      </div>
      <div className='container'>
        <Unavailable
          title='under construction!'
          p='This project will be up soon! Stay tuned :-)'
          button='view other works'
          target='_self'
          href='/'
        />
      </div>
    </>
  )
}

export default Stegvision