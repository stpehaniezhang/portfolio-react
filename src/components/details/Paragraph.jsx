import React from 'react'
import '../WorkDetails.css'
import '../Constants.css'

function Paragraph(props) {

  return (
    <>
        <div className='text-container'>
            <p className={`text-title ${props.colour}`}>{props.title}</p>
            <p className={`text-paragraph ${props.colour}`}>{props.p}</p>
        </div>
    </>
  );
}

export default Paragraph