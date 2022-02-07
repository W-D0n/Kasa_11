import React from 'react';
import '../styles/Info.css';
import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import { toArray } from 'lodash';

// const Info = ({ info }) => {
const Info = ({ title, description, host, rating, location, equipments, tags }) => {
  equipments.forEach(el => {
    console.log(el)
  });
  console.log(typeof(equipments))
  // const { title, description, host, rating, location, equipments, tags } = info;
  return (
    <>
      <section className='info__container'>
        <div className='info__heading'>
          <header className='info__header'>
            <h1 className='info__title'>{title}</h1>
            <span className='info__location'>{location}</span>
            <ul>
              {tags.map((e, i) => {
                <Tag key={i} title={e} />
              })}
            </ul>
          </header>
          <div className='info__host'>
            <span className='info__host-name'>{host.name}</span>
            <img className='info__host-img' src={host.picture} alt='host profil' />
            <Rating rate={rating} />
          </div>
        </div>
        <div className='info__dropdowns'>
          <Dropdown
            title='Description'
            content={description}
            type='small'
          />
          <Dropdown
            title='Équipements'
            // content={equipments.map((e, i) => {
            //   <p key={i}>{e}</p>
            // })}
            content={equipments}
            type='small'
          />
        </div>
      </section>
    </>)
};

export default Info;
