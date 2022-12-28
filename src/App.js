import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Design from './components/pages/Design';
import Code from './components/pages/Code';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Stegvision from './components/pages/portfolio/Stegvision'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/design' element={<Design/>}/>
        <Route exact path='/code' element={<Code/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/stegvision' element={<Stegvision/>}/>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
