import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import HTVbanner from '../../../assets/images/HTV/HTVbanner.svg';
import './main-portfolio.css';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Paragraph from '../../details/Paragraph';
import HTV1 from '../../../assets/images/HTV/HTV1.png';
import HTV2 from '../../../assets/images/HTV/HTV2.jpeg';
import HTV3 from '../../../assets/images/HTV/HTV3.png';
import HTV4 from '../../../assets/images/HTV/HTV4.png';
import HTV5 from '../../../assets/images/HTV/HTV5.png';
import HTV6 from '../../../assets/images/HTV/HTV6.png';
import HTV7 from '../../../assets/images/HTV/HTV7.png';
import HTV8 from '../../../assets/images/HTV/HTV8.png';
import HTV9 from '../../../assets/images/HTV/HTV9.png';
import HTV10 from '../../../assets/images/HTV/HTV10.png';
import HTV11 from '../../../assets/images/HTV/HTV11.png';
import HTV12 from '../../../assets/images/HTV/HTV12.png';

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
        <ScrollToTop showUnder={160} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
          <img src={Arrow} alt='Scroll to Top'></img>
        </ScrollToTop>
        <PortfolioHeader
          src={HTVbanner}
          title='hack the valley'
          short='Up for the challenge?'
          desc='Join 750 innovative and creative developers, designers, and creators for 36 hours of hacking. A hackathon that has been ongoing for seven years now. Hosted by University of Toronto, Scarborough.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['lead designer', '2 years', 'figma \n adobe illustrator', 'brand identity \n web \n UI/UX \n marketing \n misc.']}
        />
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='goal'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='inspiration'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV1} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='user flow diagram'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV2} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <Paragraph
          title='wireframe'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV3} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='branding'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
        <div className='container-img'>
          <img src={HTV4} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='website'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV5} alt='inspiration' className='img-portfolio'></img>
        </div>
        <div className='container'>
          <Paragraph
            title='dashboard'
            p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
            colour=''
          />
          <div className='container-img'>
            <img src={HTV6} alt='inspiration' className='img-portfolio'></img>
          </div>
        </div>
        <div className='container blue-container'>
          <Paragraph
            title='thoughts & reflections'
            p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
            colour='sand'
          />
        </div>
        <div className='container beige-container'>
          <Paragraph
            title='marketing, swag & misc.'
            p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
            colour=''
          />
          <div className='container-img'>
            <img src={HTV7} alt='inspiration' className='img-portfolio-half'></img>
            <img src={HTV8} alt='inspiration' className='img-portfolio-half'></img>
          </div>
          <div className='container-img top-margin'>
            <img src={HTV9} alt='inspiration' className='img-portfolio'></img>
          </div>
          <div className='container-img top-margin'>
            <img src={HTV10} alt='inspiration' className='img-portfolio-half'></img>
            <img src={HTV11} alt='inspiration' className='img-portfolio-half'></img>
          </div>
          <div className='container-img top-margin'>
            <img src={HTV12} alt='inspiration' className='img-portfolio'></img>
          </div>
          <div className='container-img top-margin'>
            <img src={HTV12} alt='inspiration' className='img-portfolio'></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hackthevalley;