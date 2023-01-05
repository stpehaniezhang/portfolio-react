import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Hackthevalley from './components/pages/portfolio/Hackthevalley';
import Pinch from './components/pages/portfolio/Pinch';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/works' element={<Works/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/hackthevalley' element={<Hackthevalley/>}/>
        <Route exact path='/pinch' element={<Pinch/>}/>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
