import React from 'react';
import '../styles/Accomodations.css';
import Tag from './Tag'

const InfoHeading = ({ title, location, tags }) => {
  return (
    <>
      <header className='info__header'>
        <h1 className='info__title'>{title}</h1>
        <span className='info__location'>{location}</span>
        <ul>
          {tags.map((e, i) =>
            <Tag key={i} title={e} />
          )}
        </ul>
      </header>
    </>

  );
};

export default InfoHeading;
