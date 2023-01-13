import React from 'react'
import WorkCard from './WorkCard'
import './Work.css'
import htv from '../../assets/images/HTV/HTV.svg'
import pinch from '../../assets/images/Pinch/Pinch.svg'
import icube from '../../assets/images/ICUBE/ICUBE.svg'
import arc from '../../assets/images/arc.svg'
import stegvision from '../../assets/images/stegvision.svg'
import Arrow from '../../assets/images/Arrow.svg';
import ScrollToTop from "react-scroll-up";
import { PortfolioTags } from './PortfolioTags';

function WorkSection() {

  return (
    <div id='work-section' className='cards'>
      <ScrollToTop showUnder={0} style={{ bottom: 10, right: 10, zIndex: 1000 }}>
        <img src={Arrow} alt='Scroll to Top'></img>
      </ScrollToTop>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <div className='design-container'>
            <p className='text-header'>works</p>
            <div className='tag-container'>
              <PortfolioTags tagStyle='brand-identity'></PortfolioTags>
              <PortfolioTags tagStyle='web'></PortfolioTags>
              <PortfolioTags tagStyle='ui/ux'></PortfolioTags>
              <PortfolioTags tagStyle='marketing'></PortfolioTags>
              <PortfolioTags tagStyle='misc.'></PortfolioTags>
            </div>
          </div>
          <ul className='cards-group'>
            <WorkCard
              src={htv}
              title='hack the valley'
              year='2 years'
              text='A hackathon hosting 750 innovative and creative developers, designers, and creators 
              for 36 hours of hacking.'
              tag={['brand-identity', 'web', 'ui/ux', 'marketing', 'misc.']}
              path='/hackthevalley'
            />
            <WorkCard
              src={pinch}
              title='pinch'
              year='1.5 years'
              text="Pinch's mission is to provide local couriers & restaurants a platform to 
              keep their orders in their own hands."
              tag={['brand-identity', 'web', 'ui/ux', 'marketing']}
              path='/pinch'
            />
          </ul>
          <ul className='cards-group'>
            <WorkCard
              src={icube}
              title='ICUBE work study'
              year='4 months'
              text='Reflections, learnings, and experiences during my time at ICUBE.'
              tag={['ui/ux']}
              path='/icube'
            />
            <WorkCard
              src={arc}
              title='arc aio'
              year='1 year'
              text='The Ultimate CA Bot.'
              tag={['brand-identity', 'web', 'ui/ux', 'marketing', 'misc.']}
              path='/dev'
            />
            <WorkCard
              src={stegvision}
              title='stegvision'
              year='3 weeks'
              text='StegVision has developed a technology 
              that can solve critical problems across industry.'
              tag={['web', 'ui/ux']}
              path='/stegvision'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}


export default WorkSection;