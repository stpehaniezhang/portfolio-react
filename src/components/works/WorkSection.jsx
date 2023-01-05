import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'
import htvimg from '../../assets/images/HTV.png'
import pinchimg from '../../assets/images/Pinch.png'
import Arrow from '../../assets/images/Arrow.svg';
import ScrollToTop from "react-scroll-up";

function WorkSection() {
  return (
    <div id='work-section' className='cards'>
      <ScrollToTop showUnder={0} style={{bottom: 10, right: 10, zIndex:1000}}>
      <img src={Arrow} alt='Scroll to Top'></img>
    </ScrollToTop>
      <div className='cards-container'>
        <div className='cards-wrapper'>
        <div className='design-container'>
              <p className='text-header'>works</p>
          </div>
          <ul className='cards-group'>
            <WorkCard
              src={htvimg}
              title='hack the valley'
              year='2 years'
              text='Join 750 innovative and creative developers, designers, and creators 
              for 36 hours of hacking. A hackathon that has been ongoing for seven years 
              now. Hosted by University of Toronto, Scarborough.'
              tag={['rebrand','social-media-posts', 'case-study']}
              tagtitle={['rebrand','social media posts', 'case study']}
              path='/hackthevalley'
            />
            <WorkCard
              src={pinchimg}
              title='pinch'
              year='1.5 years'
              text='Pinchs mission is to provide local couriers and restaurants to 
              keep their orders in their own hands. We are not building another 
              delivery or food service, we are building the stage for local courier services 
              to be spotlighted on.'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/pinch'
            />
          </ul>
          <ul className='cards-group'>
            <WorkCard
              src={htvimg}
              title='ICUBE work study'
              year='4 months'
              text='Reflections, learnings, and experiences during my time at ICUBE.'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <WorkCard
              src={htvimg}
              title='arc aio'
              year='1 year'
              text='Experience Football on Top of the Himilayan Mountains'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <WorkCard
              src={htvimg}
              title='stegvision'
              year='3 weeks'
              text='Ride through the Sahara Desert on a guided camel tour'
              tag={['rebrand','social-media-posts', 'case-study']}
              tagtitle={['rebrand','social media posts', 'case study']}
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}


export default WorkSection;