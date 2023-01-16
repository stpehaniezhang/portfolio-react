import React, { useEffect } from 'react';
import './main-portfolio.css';
import Helmet from 'react-helmet';
import Pinchbanner from '../../../assets/images/Pinch/Pinchbanner.svg';
import Pinch1 from '../../../assets/images/Pinch/Pinch1.png';
import Pinch2 from '../../../assets/images/Pinch/Pinch2.png';
import Pinch3 from '../../../assets/images/Pinch/Pinch3.png';
import Pinch4 from '../../../assets/images/Pinch/Pinch4.jpeg';
import Pinch5 from '../../../assets/images/Pinch/Pinch5.svg';
import Pinch6 from '../../../assets/images/Pinch/Pinch6.svg';
import Pinch7 from '../../../assets/images/Pinch/Pinch7.svg';
import Pinch8 from '../../../assets/images/Pinch/Pinch8.svg';
import Pinch9 from '../../../assets/images/Pinch/Pinch9.png';
import Pinch10 from '../../../assets/images/Pinch/Pinch10.png';
import PortfolioHeader from '../../details/PortfolioHeader';
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';
import Paragraph from '../../details/Paragraph.jsx';

function Pinch() {

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
          desc='Pinch’s mission is to provide local couriers and restaurants to keep their orders in their own hands. We are not building another delivery or food service, we are building a stage for local courier services to be spotlighted on.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['founder & VP of design', '1.5 years', 'figma \n adobe illustrator', 'brand identity \n web \n UI/UX \n marketing']}
        />
        <div className='work-wrapper top-margin'>
          <div className='half-text'>
            <img src={Pinch1} alt='img' className='small-img'></img>
            <div className='quarter top-margin'>
              <p className='full-para info-title red'>achievements</p>
              <p className='full-para blue'><span className='bold'>Finalist</span> out of 10,000 applicants chosen for an interview with <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.ycombinator.com/'>YCombinator</a></span> ─ S2021 Batch</p>
              <p className='full-para blue'><span className='bold'>Finalist</span> at <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=vMmSW_1SNU4'>Cooperathon</a></span>  for 'Best Tech Solution' & 'Best Overall Startup' ─ November ‘20</p>
              <p className='full-para blue'><span className='bold'>Winner</span> at <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.utsc.utoronto.ca/research/hub-idea-startup'>The Hub's</a></span> annual Startup competition for seed funding ─ November ‘20</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='the problem'
          p='Food delivery apps have been on the rise. However, businesses and couriers have taken a hit
          as the apps take a huge percentage of commission. This has caused businesses to price their 
          food for higher on food delivery apps, with little return. In addition, businesses are blamed 
          for majority of issues that arise, when that have no control over the service past preparing the food.'
          colour=''
        />
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='the challenge'
          p='The challenge is creating an app that allows restaurants and small businesses to keep orders in their
          own hands. Pinch is not just a regular delivery app, but rather a stage to spotlight businesses on.'
          colour='sand'
        />
      </div>
      <div className='container'>
        <Paragraph
          title='research & competitor analysis'
          p='To begin building the project, I conducted research on other competitors in the market. Notably,
          apps like Uber Eats, Door Dash, GrubHub, Skip the Dishes...Upon looking at their apps, it appears
          that they were all commission based (similar pricing models) and user/business/courier experiences.
          This showed us that we had to create an app that is different in the way that it would benefit businesses and couriers,
          however be competitive with the other apps in the consumer base.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch2} alt='inspiration' className='img-portfolio'></img>
        </div>
        <div className='container-img top-margin'>
            <img src={Pinch3} alt='inspiration' className='img-portfolio'></img>
        </div>
        </div>
      <div className='container beige-container'>
        <Paragraph
          title='mapping the apps'
          p='My team and I decided on creating 3 apps for this project; Customer, Courier, and Business. Therefore,
          a flow was created in order to map out the screens. It is also important to note that a lot of our
          features were not included in this flow, as we wanted to create an initial base app first.'
          colour=''
        /> 
        <div className='container-img'>
          <img src={Pinch4} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='brand identity'
          p='Discussing with the CEO of Pinch, he brought up that he wanted the logo to be "fingers pinching". 
          Using colour psychology, yellow was chosen as the primary colour as it is a "hungry" colour.'
          colour='sand'
        />
        <div className='container-img'>
          <img src={Pinch5} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='final prototype'
          p='The final prototype for V1 was finished in a 2 week sprint.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch6} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <Paragraph
          title='special features'
          p='In our courier and business apps, we have introduced the courier marketplace and the store 
          marketplace respectively. This helps the communication between courier and business to be increased,
          which decreases misunderstandings.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch7} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container padding-top'>
        <Paragraph
          title=''
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch8} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='website'
          p='The website provides general information on Pinch.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch9} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='reflections'
          p='Pinch was my first big project that I have done. In addition, we were on a very tight timeline
          in order to get the initial versions working. This meant that I had to
          plan my time very carefully, and to make sure that everything I did was efficient. Furthermore, it was
          also one of my first mobile designs. All in all, Pinch really tested me, and I was able to push myself
          to adapt to the areas where I lacked experience.'
          colour='sand'
        />
      </div>
      <div className='container blue-container padding-top'>
        <Paragraph
          title='what i would have done differently'
          p="While I did do an immense amount of research in order to tackle my first mobile design, looking back,
          there are still a lot of UI/UX problems that I would have done differently now. Specifically, focus more on
          accomodating for edge cases. I believe that there are also a lot of visibility issues that I could have avoided."
          colour='sand'
        />
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='slide deck'
          p='During my time working on Pinch, we had to present or "pitch" our business. The following slide deck helped move our point across visually.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch10} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
    </>
  )
}

export default Pinch