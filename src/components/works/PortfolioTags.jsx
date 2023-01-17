import React from 'react';
import './PortfolioTags.css';

export const STYLES = ['brand-identity', 'web', 'misc.', 'ui/ux', 'marketing', 'front-end'];

export const PortfolioTags = ({
  onClick,
  tagStyle,
}) => {

  //<Link to={`/${link}`} key={tagStyle} className={`tag ${checkTagStyle}`}>
  //{tagTitle}
  //</Link>

  const checkTagStyle = STYLES.includes(tagStyle) ? tagStyle : STYLES[0];

  return (
    <div className={`tag ${checkTagStyle}`}>
    {tagStyle.replace(/-/g, ' ')}
    </div>
)};