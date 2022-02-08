import React from 'react';
import '../styles/Accomodations.css';
import { Rating } from '../components';

const Host = (props) => {
  return (
    <>
      <div className='info__host'>
        <div className='host'>
          <span className='host__name'>
            <p>{props.host.name.split(' ')[0]}</p>
            <p>{props.host.name.split(' ')[1]}</p>
          </span>
          <img className='host__img' src={props.host.picture} alt='host profil' />
        </div>
        <Rating rate={props.rating} />
      </div>
    </>
  );
};

export default Host;
