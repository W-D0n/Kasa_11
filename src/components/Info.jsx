import React from 'react';
import '../styles/Accomodations.css';
import { Rating, Tag, Dropdown, Host, InfoHeading } from '../components';

const Info = ({ title, description, host, rating, location, equipments, tags }) => {
  // const Info = (props) => {

  return (
    <section className='info__container'>
      <div className='info__heading'>
        {/* <InfoHeading title={props.title} location={props.location} tags={props.tags} />
          <Host host={props.host} rate={props.rating} /> */}
        <header className='info__header'>
          <h1 className='info__title'>{title}</h1>
          <span className='info__location'>{location}</span>
          <ul>
            {tags.map((e, i) =>
              <Tag key={i} title={e} />
            )}
          </ul>
        </header>
        <div className='info__host'>
          <div className='host'>
            <span className='host__name'>
              <p>{host.name.split(' ')[0]}</p>
              <p>{host.name.split(' ')[1]}</p>
            </span>
            <img className='host__img' src={host.picture} alt='host profil' />
          </div>
          <Rating rate={rating} />
        </div>
      </div>
      <div className='info__dropdowns'>
        <Dropdown
          title='Description'
          // content={props.description}
          content={description}
          type='small'
        />
        <Dropdown
          title='Équipements'
          // content={props.equipments.map((e, i) =>
          content={equipments.map((e, i) =>
            <p key={i}>{e}</p>
          )}
          type='small'
        />
      </div>
    </section>
  )
};

export default Info;
