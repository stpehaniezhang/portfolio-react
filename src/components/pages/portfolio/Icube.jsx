import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import Pinchbanner from '../../../assets/images/Pinch/Pinchbanner.svg';
import Pinch1 from '../../../assets/images/Pinch/Pinch1.png';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Paragraph from '../../details/Paragraph.jsx';

function Icube() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | Pinch</title>
      </Helmet>
      <div className='main'>
        <ScrollToTop showUnder={160} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
          <img src={Arrow} alt='Scroll to Top'></img>
        </ScrollToTop>
        <PortfolioHeader
          src={Pinchbanner}
          title='pinch'
          short='Your orders. Your hands. Our help.'
          desc='Pinch’s mission is to provide local couriers and restaurants to keep their orders in their own hands. We arent building another delivery or food service, were building the stage for local courier services to be spotlighted on.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['founder & VP of design', '1.5 years', 'figma \n adobe illustrator', 'brand identity \n web \n UI/UX \n marketing \n misc.']}
        />
        <div className='work-wrapper top-margin'>
          <div className='half-text'>
            <img src={Pinch1} alt='awards' className='small-img'></img>
            <div className='quarter top-margin'>
              <p className='full-para info-title red'>achievements</p>
              <p className='full-para blue'>Finalist out of 10,000 applicants chosen for
                an interview with YCombinator <br></br> ─ May ‘21 S2021 Batch</p>
              <p className='full-para blue'>Finalist at Cooperathon for “Best Tech Solution”
                & “Best Overall Startup” <br></br> ─ November ‘20</p>
              <p className='full-para blue'>Winner at The Hub’s annual Startup
                competition for seed funding <br></br>─ November ‘20</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='wireframe'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
      </div>
    </>
  )
}

export default Icube