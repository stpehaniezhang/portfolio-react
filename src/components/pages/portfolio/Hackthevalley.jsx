import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import htvimg from '../../../assets/images/test.png';
import './main-portfolio.css';
import PortfolioHeader from '../../details/PortfolioHeader';
import PortfolioTasks from '../../details/PortfolioTasks';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';

function Hackthevalley() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | Hack the Valley</title>
      </Helmet>
      <div className='main'>
      <ScrollToTop showUnder={160} style={{bottom: 10, right: 10, zIndex:1000}}>
      <img src={Arrow} alt='Scroll to Top'></img>
    </ScrollToTop>
        <PortfolioHeader
          src={htvimg}
          title='hack the valley'
          short='Hosted by University of Toronto, Scarborough.'
          desc='Join 750 innovative and creative developers, designers, and creators for 36 hours of hacking. A hackathon that has been ongoing for seven years now. Hosted by University of Toronto, Scarborough.'
          detailtitle={['role','duration','tools','type']}
          detaildesc={['lead designer','2 years','figma \n adobe illustrator','brand identity \n web \n UI/UX \n marketing']}
        />
        <PortfolioTasks
          tasktitle={['new brand identity','new web + dashboard','marketing','misc.']}
          taskdesc={['complete new brand identity including logo, colours and designs',
          'redesign existing website & create a new dashboard to help move the event online due to COVID',
          'create posts to promote the event on social media platforms',
          'merch and swag designs, posters and hacker/sponsor packages etc.']}
        />
      </div>
    </>
  );
}

export default Hackthevalley;