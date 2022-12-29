import React from 'react';
import Helmet from 'react-helmet';
import htvimg from '../../../assets/images/test.png';
import './main-portfolio.css';
import PortfolioHeader from '../../details/PortfolioHeader';
import PortfolioTasks from '../../details/PortfolioTasks';

function stegvision() {
  return (
    <>
      <Helmet>
        <title>Stephanie Zhang | Stegvision</title>
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
          tasktitle={['rebrand','new website & dashboard','promotional posts','misc.']}
          taskdesc={['complete new brand identity including logo, colours and designs',
          'redesign existing website & create a new dashboard to help move the event online due to COVID',
          'create posts to promote the event on social media platforms',
          'merch and swag designs, posters and hacker/sponsor packages etc.']}
          />
          <div className='container-row'>
            <div className='task-number-container'>
              <p className='task-number'>01</p>
            </div>

            <p className='small-header left-margin'>rebrand</p>
          </div>
      </div>
    </>
  );
}

export default stegvision;