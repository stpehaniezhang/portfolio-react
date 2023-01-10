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
          desc='Pinch’s mission is to provide local couriers and restaurants to keep their orders in their own hands. We arent building another delivery or food service, were building the stage for local courier services to be spotlighted on.'
          detailtitle={['role', 'duration', 'tools', 'type']}
          detaildesc={['founder & VP of design', '1.5 years', 'figma \n adobe illustrator', 'brand identity \n web \n UI/UX \n marketing']}
        />
        <div className='work-wrapper top-margin'>
          <div className='half-text'>
            <img src={Pinch1} alt='img' className='small-img'></img>
            <div className='quarter top-margin'>
              <p className='full-para info-title red'>achievements</p>
              <p className='full-para blue'><span className='bold'>Finalist</span> out of 10,000 applicants chosen for an interview with <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.ycombinator.com/'>YCombinator</a></span> ─ May '21 S2021 Batch</p>
              <p className='full-para blue'><span className='bold'>Finalist</span> at <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=vMmSW_1SNU4'>Cooperathon</a></span>  for 'Best Tech Solution' & 'Best Overall Startup' ─ November ‘20</p>
              <p className='full-para blue'><span className='bold'>Winner</span> at <span className='bold'><a className='links' target="_blank" rel="noreferrer" href='https://www.utsc.utoronto.ca/research/hub-idea-startup'>The Hub's</a></span> annual Startup competition for seed funding ─ November ‘20</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='the problem'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='the challenge'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
      </div>
      <div className='container'>
        <Paragraph
          title='research & competitor analysis'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch2} alt='inspiration' className='img-portfolio'></img>
        </div>
        <div className='container-img top-margin'>
            <img src={Pinch3} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <hr></hr>
      <div className='container no-margin'>
        <Paragraph
          title='conclusion'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        </div>
      <div className='container beige-container'>
        <Paragraph
          title='mapping the apps'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch4} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='brand identity'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
        <div className='container-img'>
          <img src={Pinch5} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container'>
        <Paragraph
          title='final prototype'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
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
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
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
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour=''
        />
        <div className='container-img'>
          <img src={Pinch9} alt='inspiration' className='img-portfolio'></img>
        </div>
      </div>
      <div className='container blue-container'>
        <Paragraph
          title='reflections'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
      </div>
      <div className='container blue-container padding-top'>
        <Paragraph
          title='what i would have done differently'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
          colour='sand'
        />
      </div>
      <div className='container beige-container'>
        <Paragraph
          title='slide deck'
          p='I conducted extensive research focused on different collaboration philosophies, 
          existing tools and resources, sites with invite-only and content moderation protocols, 
          and tools for potential integrations. I also explored inspiration for the UI and navigation.'
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