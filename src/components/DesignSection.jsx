import React from 'react'
import DesignCard from './DesignCard'
import './DesignSection.css'
import htvimg from '../assets/images/HTV.png'
import stegimg from '../assets/images/Steg.png'

function DesignSection() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='design-container'>
              <p className='text-header'>designs</p>
          </div>
          <ul className='cards__items'>
            <DesignCard
              src={stegimg}
              title='stegvision'
              year='2021'
              text='StegVision Has Developed Patent Pending Anti-Counterfeit 
              Technology That Can Solve Mission Critical Problems Across Industry.'
              tag={['rebrand','social-media-posts', 'case-study']}
              tagtitle={['rebrand','social media posts', 'case study']}
              path='/stegvision'
            />
            <DesignCard
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
          <ul className='cards__items'>
            <DesignCard
              src={htvimg}
              title='hack the valley'
              year='2021'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <DesignCard
              src={htvimg}
              title='hack the valley'
              year='2021'
              text='Experience Football on Top of the Himilayan Mountains'
              tag={['rebrand','social-media-posts']}
              tagtitle={['rebrand','social media posts']}
              path='/home'
            />
            <DesignCard
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

export default DesignSection;