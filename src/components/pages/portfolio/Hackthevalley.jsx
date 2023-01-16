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
import HTV13 from '../../../assets/images/HTV/HTV13.png';

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
          p="Looking at Hack the Valley's previous branding, it was unattractive and unidentifyable. I was tasked to 
          create a new logo and brand identity, with free creative reign. My ultimate goal was to create a logo & identity that can be
          easily recognized as ~HTV~ while keeping it simple and minimalistic."
          colour='sand'
        />
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='inspiration'
          p='It was important to me that the brand and identity had a playful vibe, in order to not look
          intimidating to newcomers. For the logo, I wanted it to have more connection with the name and origin
          of Hack the Valley, while keeping the "tech-y" look. For the rest of the branding, I decided to stick 
          with a very familiar look, while adding my own twist.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV1} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='user flow diagram'
          p='Following, I created a user flow diagram that allowed the team to view the general
          structure of the website. As we were in a time crunch, this was helpful to allow the 
          web development team to start on the back-end early.'
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
          p='After discussing the diagram with the team, I transformed them into lo-fi wireframes. In this stage,
          I decided to focus more on placement rather than more detailed aspects. This wireframe aided with having 
          more direction when creating the hi-fi prototype.'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV3} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='branding'
          p='In the finalized logo, I incorporated valleys, curly brackets along with the colour green, which is a colour
          often associated with tech & nature.'
          colour='sand'
        />
        <div className='container-img'>
          <img src={HTV4} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='website'
          p='The website was designed with the same website content as the previous, however "reskinned".
          I was heavily inspired with incorporating different aspects of programming, such as the terminal/console log
          and text decorations that resemble code (i.e. console.log(""))'
          colour=''
        />
        <div className='container-img'>
          <img src={HTV5} alt='inspiration' className='img-portfolio'></img>
        </div>
        <div className='container'>
          <Paragraph
            title='dashboard'
            p="The dashboard allows prospective participants to sign up, as well as manage their application, and view their status."
            colour=''
          />
          <div className='container-img'>
            <img src={HTV6} alt='inspiration' className='img-portfolio'></img>
          </div>
        </div>
        <div className='container blue-container'>
          <Paragraph
            title='thoughts & reflections'
            p='Working on this project with complete free creative reign really allowed me to work on my ability to build on ideas. Sometimes
            it can be difficult to begin when you have no initial direction of what the branding or identity would look like. In addition, with the
            limited amount of time, I had to prioritize parts of the project that I could deliver off to the other teams, as many teams were unable to
            start and were dependent on me.'
            colour='sand'
          />
        </div>
        <div className='container beige-container'>
          <Paragraph
            title='marketing, swag & misc.'
            p="While Hack the Valley 5 was online, Hack the Valley 7 was in person in October '22. I was tasked 
            with creating stickers, packages, nametags, room signs and lastly, merch for both executives and hackers."
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
            <img src={HTV13} alt='inspiration' className='img-portfolio'></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hackthevalley;