import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import { PortfolioTags } from './PortfolioTags';

function WorkCard(props) {

  const tagStyle = props.tag;

  return (
    <>
      <li className='card'>
        <Link className='card-link' to={props.path}>
          <figure className='card-wrap'>
            <img
              className='card-img'
              alt='Work'
              src={props.src}
            />
          </figure>
          <div className='card-info'>
            <div>
                <h5 className='card-title'>{props.title}<span className='card-year'>  ―  {props.year}</span></h5>
                <h5 className='card-text'>{props.text}</h5>
            </div>
            <div className='portfolio-tags'>
              {(() => {
                const arr = [];
                var i = 0;
                while (i !== tagStyle.length) {
                  arr.push(
                    <PortfolioTags tagTitle={props.tag[i].replace(/-/g, ' ')} tagStyle={props.tag[i]}></PortfolioTags>
                  );
                  i++;
              }
              return arr;
            })()}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default WorkCard;