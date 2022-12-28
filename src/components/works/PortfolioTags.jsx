import React from 'react';
import './PortfolioTags.css';
import { Link } from 'react-router-dom';

export const STYLES = ['rebrand', 'case-study', 'social-media-posts'];

export const PortfolioTags = ({
  onClick,
  tagStyle,
  tagTitle,
  link
}) => {

  const checkTagStyle = STYLES.includes(tagStyle) ? tagStyle : STYLES[0];

  return (
    <Link to={`/${link}`} key={tagStyle} className={`tag ${checkTagStyle}`}>
    {tagTitle}
    </Link>
  );
};