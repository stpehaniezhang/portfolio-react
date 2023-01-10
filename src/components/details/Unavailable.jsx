import React from 'react'
import '../WorkDetails.css'
import '../Constants.css'

function Unavailable(props) {

  return (
    <>
        <div className='spotted-container'>
            <p className='text-title red'>{props.title}</p>
            <p className='text-paragraph blue top-margin'>{props.p}</p>
            <a href={props.href} target={props.target} rel="noreferrer"><button>{props.button}</button></a>
        </div>
    </>
  );
}

export default Unavailable