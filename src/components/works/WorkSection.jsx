import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'
import htvimg from '../../assets/images/HTV.png'
import pinchimg from '../../assets/images/Pinch.png'

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
              src={htvimg}
              title='hack the valley'
              year='2020'
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
              year='2020'
              text='Pinchs mission is to provide local couriers and restaurants to 
              keep their orders in their own hands. We are not building another 
              delivery or food service, we are building the stage for local courier services 
              to be spotlighted on.'
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