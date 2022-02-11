import React from 'react';
import '../styles/Accomodations.css';

const Host = ({ name, picture }) => {
  return (
    <div className='host'>
      <span className='host__name'>
        <p>{name.split(' ')[0]}</p>
        <p>{name.split(' ')[1]}</p>
      </span>
      <img className='host__img' src={picture} alt='host profil' />
    </div>
  );
};

export default Host;