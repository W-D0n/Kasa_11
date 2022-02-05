import React from 'react';
import './Info.css';
import Dropdown from '../Dropdown/Dropdown';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';

const Info = ({ title, description, host, rating, location, equipments, tags }) => {
  return (
    <>
      <div className='info__container'>
        <div className='info__heading'>
          <header className='info__header'>
            <h1 className='info__title'>{title}</h1>
            <span className='info__location'>{location}</span>
            <ul>
              <Tag content={tags} />
            </ul>
          </header>
          <div className='info__host'>
            <span className='info__host-name'>{host.name}</span>
            <img className='info__host-img' src={host.picture} alt='host profil' />
            <Rating rate={rating} />
          </div>
        </div>
        <div className='info__description'>
          <Dropdown
            title='Description'
            content={description}
            type='small' />
          <Dropdown
            title='Équipements'
            content={equipments}
            type='small' />
        </div>
      </div>

    </>)
};

export default Info;
