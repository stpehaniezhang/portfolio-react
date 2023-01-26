import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import Devbanner from '../../../assets/images/Devbanner.png';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Dev1 from '../../../assets/images/Dev/Dev1.mp4';
import Dev2 from '../../../assets/images/Dev/Dev2.mp4';
import Dev3 from '../../../assets/images/Dev/Dev3.mp4';
import Paragraph from '../../details/Paragraph';

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
          desc=''
          detailtitle={['role', 'duration', 'libraries & languages']}
          detaildesc={['freelance developer', '2 years', 'javascript \n HTML/CSS \n react']}
        />
      </div>
      <div className='container'>
        <Paragraph
          title='chrome extention'
          p="Chrome extention that autoclicks URLs, buttons and automatically inputs text. UI also designed by me."
          colour=''
        />
        <div className='container-vid'>
          <video src={Dev1} alt='inspiration' className='img-portfolio' controls muted></video>
        </div>
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='one page site'
          p="Page for taking token inputs. Made for Asian and European division of the company. UI also designed by me."
          colour=''
        />
        <div className='container-vid'>
          <video src={Dev2} alt='inspiration' className='img-portfolio' controls muted></video>
          <video src={Dev3} alt='inspiration' className='img-portfolio top-margin' controls muted></video>
        </div>
      </div>
    </>
  )
}

export default Dev