import React from 'react';
import HeroSection from '../HeroSection';
import Helmet from 'react-helmet';
import { useEffect } from 'react';
import WorkSection from '../works/WorkSection'

function Home() {
  
  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.setTimeout( ()=>{ window.scrollTo(0,0) }, 50 );
  }, []);

  return (
    <div className='main-floor'>
    <Helmet>
        <title>Stephanie Zhang | Portfolio</title>
        <meta name="description" content="designer based in vancouver, ca" data-react-helmet="true"/>
    </Helmet>
      <HeroSection />
      <div id='work-section'>
        <WorkSection />
      </div>
    </div>
  );
}

export default Home;