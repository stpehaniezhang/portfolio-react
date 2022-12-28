import React from 'react';
import './DesignSection.css';
import { Link } from 'react-router-dom';
import { PortfolioTags } from './PortfolioTags';

function DesignCard(props) {

  const tagStyle = props.tag;

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className='card_info_container'>
              <h5 className='cards__item__title'>{props.title}<span className='cards__item__year'>  ―  {props.year}</span></h5>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
            <div className='design-portfolio'>
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

export default DesignCard;