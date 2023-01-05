import React from 'react'
import '../WorkDetails.css'

function PortfolioHeader(props) {

    const detail = props.detailtitle;

    const change = props.detaildesc;
    var j = 0;
    while (j !== detail.length){
        change[j] = change[j].split('\n').map(str => <p className='info-desc'>{str}</p>);
        j++;
    }

  return (
    <>
        <figure className='img-wrap'>
            <img
              className='project-img'
              alt='Work'
              src={props.src}
            />
          </figure>
          <div className='work-wrapper'>
            <div className='work-info'>
              <div className='project-header'>
                <div className='project-label'>
                  <p className='text-header'>{props.title}</p>
                  <p className='text-desc'>{props.short}</p>
                </div>
                <div className='project-label'>
                  <p className='project-desc'>{props.desc}</p>
                </div>
              </div>
              <div className='project-info'>
              {(() => {
                const arr = [];
                var i = 0;
                while (i !== detail.length) {
                  arr.push(
                    <div className='info-label'>
                        <p className='info-title red'>{props.detailtitle[i]}</p>
                        <p className='info-desc'>{props.detaildesc[i]}</p>
                    </div>
                  );
                  i++;
              }
              return arr;
            })()}
            </div>
            </div>
          </div>
          <hr></hr>
    </>
  );
}

export default PortfolioHeader