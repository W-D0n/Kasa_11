import React from 'react';
import '../styles/Thumb.css';

const Thumb = ({ title, imgCover }) => {
  return (
    <div className='thumb__container'>
      <h3 className='thumb__title'>{title}</h3>
      <img
        src={imgCover}
        alt='accomodation thumbnail'
      />
    </div>)
};

export default Thumb;
