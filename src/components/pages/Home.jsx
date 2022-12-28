import React from 'react';
import HeroSection from '../HeroSection';
import Helmet from 'react-helmet';

function Home() {
  return (
    <>
    <Helmet>
        <title>Stephanie Zhang | Portfolio</title>
    </Helmet>
      <HeroSection />
    </>
  );
}

export default Home;