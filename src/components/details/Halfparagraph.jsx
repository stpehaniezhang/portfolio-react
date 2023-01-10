import React from 'react'
import '../WorkDetails.css'
import '../Constants.css'

function Halfparagraph(props) {

  console.log(props.text);

    const change = props.text;
    
    var j = 0;
    while (j !== change.length){
        change[j] = change[j].split('\n').map(str => <p className='full-para blue'>{str}</p>);
        j++;
    }

  return (
    <>
        <div className='work-wrapper top-margin'>
          <div className='half-text'>
            <img src={props.src} alt='img' className='small-img'></img>
            <div className='quarter top-margin'>
              <p className='full-para info-title blue'>{props.title}</p>
              {change}
            </div>
          </div>
        </div>
    </>
  );
}

export default Halfparagraph