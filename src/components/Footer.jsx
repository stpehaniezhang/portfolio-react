import React from 'react'
import './Main-Component.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='angled-bottom'></div>
        <div className='straight-bottom'>
            <div className='footer-contents'>
                <a href='mailto::stephaniey.zhang@mail.utoronto.ca' target="_blank" rel="noreferrer noopener" className='footer-margin'>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0803 0H1.91972C0.844677 0 0 0.789744 0 1.79487V12.2051C0 13.1744 0.921535 14 2.0349 14H20.0803C21.1553 14 22 13.2103 22 12.2051V1.79487C22 0.789744 21.117 0 20.0803 0ZM20.4641 11.5231L15.3193 6.42564L20.4641 2.33333V11.5231ZM1.53562 2.33333L6.64208 6.53333L1.53562 11.5231V2.33333ZM10.8655 8.07705L8.44655 6.10263C8.40825 6.03076 8.36968 5.99496 8.33138 5.92309C8.25452 5.85123 8.17792 5.81542 8.10106 5.77961L2.80256 1.43589H19.2354L10.8655 8.07705ZM7.79412 7.50264L10.3282 9.58469C10.4817 9.69236 10.6354 9.76423 10.8274 9.76423C11.0195 9.76423 11.1729 9.69236 11.3266 9.58469L14.1294 7.35911L19.3893 12.5642H2.61096L7.79412 7.50264Z" fill="#FFFAEE"/>
                </svg>
                </a>
                <a href='https://www.linkedin.com/in/stephaniezhang25/' target="_blank" rel="noreferrer noopener" className='footer-margin'>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.263579 5.31253H3.58627V15.9999H0.263579V5.31253ZM1.92501 0C2.98699 0 3.85003 0.863042 3.85003 1.9268C3.85003 2.98948 2.98699 3.85252 1.92501 3.85252C0.860548 3.85252 0 2.98948 0 1.9268C0 0.863042 0.860548 0 1.92501 0Z" fill="#FFFAEE"/>
                    <path d="M5.66956 5.31262H8.85565V6.77406H8.90107C9.34452 5.93346 10.4284 5.04797 12.0439 5.04797C15.4075 5.04797 16.0284 7.26079 16.0284 10.1384V16H12.7082V10.8027C12.7082 9.563 12.6866 7.96889 10.9821 7.96889C9.25351 7.96889 8.98976 9.32008 8.98976 10.7137V16H5.66956V5.31262Z" fill="#FFFAEE"/>
                </svg>
                </a>
                <span className='footer-margin'>✦</span>
                <span className='footer-margin'>made with ♡ by me ˙ᵕ˙</span>
            </div>
        </div>
    </div>
  )
}

export default Footer