import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import nightmode from '../assets/images/NightMode.svg';
import hamburger from '../assets/images/Hamburger.svg';
import x from '../assets/images/X.svg';
import pdf from "../assets/files/StephanieZhang-Resume.pdf";
import { useRef } from "react";


function NavBar() {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <header>
        <nav ref={navRef} className="navbar">
            <div className="navbar-container">
                <NavLink to="/home" onClick={showNavbar} className={({ isActive }) => (isActive ? 'navbar-links-active' : 'navbar-links')}>home<span className='circle'></span></NavLink>
                <NavLink to="/works" onClick={showNavbar} className={({ isActive }) => (isActive ? 'navbar-links-active' : 'navbar-links')}>works<span className='circle'></span></NavLink>
                <NavLink to="/about" onClick={showNavbar} className={({ isActive }) => (isActive ? 'navbar-links-active' : 'navbar-links')}>about<span className='circle'></span></NavLink>
                <NavLink to="/contact" onClick={showNavbar} className={({ isActive }) => (isActive ? 'navbar-links-active' : 'navbar-links')}>contact<span className='circle'></span></NavLink>
                <a href={pdf} target="_blank" onClick={showNavbar} className='navbar-links' rel="noreferrer noopener">resume<span className='circle'></span></a>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}><img className='x-image' src={x} alt='cancel button'></img></button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
        <img className='hamburger-image' src={hamburger} alt='nav button'></img>
			  </button>
        <div className='nightmode-container'>
            <img className='nightmode-image' src={nightmode} alt='nightmode button'></img>
        </div>
    </header>
  )
}

export default NavBar