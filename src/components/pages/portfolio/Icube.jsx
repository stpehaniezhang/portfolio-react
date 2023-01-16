import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import ICUBEbanner from '../../../assets/images/ICUBE/ICUBEbanner.svg';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Paragraph from '../../details/Paragraph.jsx';
import Unavailable from '../../details/Unavailable';

function Icube() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | ICUBE</title>
      </Helmet>
      <div className='main'>
        <ScrollToTop showUnder={160} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
          <img src={Arrow} alt='Scroll to Top'></img>
        </ScrollToTop>
        <PortfolioHeader
          src={ICUBEbanner}
          title='icube work study'
          short='The home of Social Entrepreneurship at UofT'
          desc='ICUBE is the home of Social Entrepreneurship and early-stage start-ups at UTM, 
          offering resources, programs, workshops and mentorship for people who are changing the world.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['graphic', '4 months', 'figma \n bubble.io', 'UI/UX']}
        />
      </div>
      <div className='container'>
        <Paragraph
          title='learnings & reflections'
          p='Working at ICUBE is a very different experience than my other projects. It was one of the
          only times where I was able to work very closely with the development team as well as helped them by
          creating an initial prototype using bubble.io. \n '
          colour=''
        />
      </div>
      <hr></hr>
      <div className='container'>
        <Unavailable
          title='this work is under NDA!'
          p='I would love to share more about my experiences working at ICUBE! If you would like to hear, contact me!'
          button='email me :-)'
          target='_blank'
          href='mailto:stephaniey.zhang@mail.utoronto.ca'
        />
      </div>
    </>
  )
}

export default Icube