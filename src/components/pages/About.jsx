import React from 'react'
import '../works/Work.css';
import '../WorkDetails.css';
import '../Constants.css';
import self from '../../assets/images/Self.JPG';

function about() {
  return (

    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <div className='design-container'>
              <p className='text-header'>about me</p>
              <div className='half-text'>
                <p className='half-para blue'>
                hello! i’m stephanie :-) <br/>
have you ever used an app or website and thought - why did they make my life sooo hard? well same. i enjoy crafting experiences that simplify people’s everyday lives. 
so how did ui/ux design and i meet? 
well it’s a longgg story - but if i were to put it in the shortest form possible.. i was broke. i taught myself how to design and i am still learning different things with each product i do, to this day.

well now you would ask - how did developing get thrown into the equation? once i was happy with how my designs looked - i saw it get butchered by the front-end developers, time and time again. i said that’s ENOUGH and decided to take matters into my own hands.

so here we are!

i’m currently at the university of toronto studying economics, statistics & visual studies.
                </p>
                <img className='half-img' src={self} alt='Self'></img>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default about