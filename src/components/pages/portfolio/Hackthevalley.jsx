import React from 'react';
import Helmet from 'react-helmet';
import htvimg from '../../../assets/images/test.png';
import './main-portfolio.css';
import PortfolioHeader from '../../details/PortfolioHeader';
import PortfolioTasks from '../../details/PortfolioTasks';
import htv1 from '../../../assets/images/HTV1.svg';
import htv1big from '../../../assets/images/HTV1big.svg';
import htv2 from '../../../assets/images/HTV2.svg';
import htv3 from '../../../assets/images/HTV3.svg';
import ModalImage from "react-modal-image";
import ScrollToTop from "react-scroll-up";
import Arrow from '../../../assets/images/Arrow.svg';

function hackthevalley() {
  return (
    <>
    <ScrollToTop showUnder={160} style={{bottom: 30, zIndex:1000}}>
      <img src={Arrow} alt='Scroll to Top'></img>
    </ScrollToTop>
      <Helmet>
        <title>Stephanie Zhang | Hack the Valley</title>
      </Helmet>
      <div className='main'>
        <PortfolioHeader
          src={htvimg}
          title='Hack the Valley'
          short='Hosted by University of Toronto, Scarborough.'
          desc='Join 750 innovative and creative developers, designers, and creators for 36 hours of hacking. A hackathon that has been ongoing for seven years now. Hosted by University of Toronto, Scarborough.'
          detailtitle={['role','duration','tools','project type']}
          detaildesc={['lead designer','2 years','figma, adobe illustrator','project type']}
        />
        <PortfolioTasks
          tasktitle={['rebrand','new website + dashboard','promotional posts','misc.']}
          taskdesc={['complete new brand identity including logo, colours and designs',
          'redesign existing website & create a new dashboard to help move the event online due to COVID',
          'create posts to promote the event on social media platforms',
          'merch and swag designs, posters and hacker/sponsor packages etc.']}
        />
        <div className='work-wrapper'>
          <div className='container-row-no-flex bottom-margin'>
            <div className='task-number-container'>
              <p className='task-number'>01</p>
            </div>
            <p className='small-header left-margin'>rebrand</p>
          </div>
          <p className='full-para blue'>Hack the Valley was looking to update their brand identity intime for 
          their 5th iteration of the hackathon. While discussing with the team, it was agreed that the goal was to
          simplify the logo while providing more uniquely identifyable logo and branding.</p>
              <ModalImage
              className='reg-img'
              small={htv1}
              large={htv1big}
              imageBackgroundColor = '#FFFAEE'
              hideZoom = "true"
              hideDownload = "true"
              alt=''/>
          <p className='subtitle'>construction</p>
          <p className='full-para top blue'>The finalized logo is designed to be minimalistic while keeping subtle aspects that represent the brand.
          The colours chosen is representative of both the colours of green valleys as well a computer's terminal. The typefaces chosen
          includes one clear, easily legible font as well as one that resembles that of a computer's terminal.</p>
          <ModalImage
              className='reg-img'
              small={htv2}
              large={htv2}
              imageBackgroundColor = '#FFFAEE'
              hideZoom = "true"
              hideDownload = "true"
              alt=''/>
          <p className='subtitle'>finalized</p>
            <ModalImage
              className='reg-img'
              small={htv3}
              large={htv3}
              imageBackgroundColor = 'none'
              hideZoom = "true"
              hideDownload = "true"
              alt=''/>
              <hr></hr>
<div className='container-row-no-flex bottom-margin'>
            <div className='task-number-container'>
              <p className='task-number'>02</p>
            </div>
            <p className='small-header left-margin'>new website <span className='proxima'>+</span> dashboard</p>
          </div>
            </div>
      </div>
    </>
  );
}

export default hackthevalley;