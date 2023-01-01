import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'
import htvimg from '../../assets/images/HTV.png'
import stegimg from '../../assets/images/Steg.png'

function WorkSection() {
  return (
    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <div className='design-container'>
              <p className='text-header'>Works</p>
          </div>
          <ul className='cards-group'>
            <WorkCard
              src={stegimg}
              title='stegvision'
              year='2021'
              text='StegVision Has Developed Patent Pending Anti-Counterfeit 
              Technology That Can Solve Mission Critical Problems Across Industry.'
              tag={['rebrand','social-media-posts', 'case-study']}
              tagtitle={['rebrand','social media posts', 'case study']}
              path='/hackthevalley'
            />
            <WorkCard
              src={htvimg}
              title='hack the valley'
              year='2020'
              text='Join 750 innovative and creative developers, designers, and creators 
              for 36 hours of hacking. A hackathon that has been ongoing for seven years 
              now. Hosted by University of Toronto, Scarborough.'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
          </ul>
          <ul className='cards-group'>
            <WorkCard
              src={htvimg}
              title='hack the valley'
              year='2021'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <WorkCard
              src={htvimg}
              title='hack the valley'
              year='2021'
              text='Experience Football on Top of the Himilayan Mountains'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <WorkCard
              src={htvimg}
              title='hack the valley'
              year='2021'
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