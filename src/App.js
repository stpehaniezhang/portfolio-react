import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Hackthevalley from './components/pages/portfolio/Hackthevalley';
import Pinch from './components/pages/portfolio/Pinch';
import Icube from './components/pages/portfolio/Icube';
import Stegvision from './components/pages/portfolio/Stegvision';
import Dev from './components/pages/portfolio/Dev';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
      <title>From Helmet</title>
      <meta name="description" content="From Helmet" />
    </Helmet>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/works' element={<Works/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/hackthevalley' element={<Hackthevalley/>}/>
        <Route exact path='/pinch' element={<Pinch/>}/>
        <Route exact path='/icube' element={<Icube/>}/>
        <Route exact path='/stegvision' element={<Stegvision/>}/>
        <Route exact path='/dev' element={<Dev/>}/>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
