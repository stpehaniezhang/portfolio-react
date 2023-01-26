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
      <div className='container beige-container'>
        <Paragraph
          title='what did i do?'
          p='I was a graphic designer at ICUBE UTM during my fall/winter 2022/2023 school year at U of T.'
          colour=''
        />
        <Paragraph
          p='I worked mainly on the UI/UX design of a website/dashboard of a startup, however I also aided in the development process by
          helping create an initial prototype using bubble.io. Near the end of my term, I helped a different startup develop their brand identity
          as well as redesigned their logo.'
          colour=''
        />
      </div>
      <div className='container'>
        <Paragraph
          title='learnings & reflections'
          p='Working at ICUBE has been a challenging but rewarding learning experience. It helped me solidify my ability to take complex flows
          and convert it into a simple yet engaging web application for the users.'
          colour=''
        />
        <Paragraph
          p='In addition, it taught me that having user onboarding pages is important.
          Oftentimes, I found myself avoiding creating onboarding pages as I thought it meant that the design was just not straightforward enough. However,
          having onboarding pages is really just a chance to show how the application is supposed to work, instead of the user wasting time to find out on their own.'
          colour=''
        />
      </div>
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