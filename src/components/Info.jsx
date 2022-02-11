import React from 'react';
import '../styles/Accomodations.css';
import { Rating, Dropdown, InfoHeading, Host } from '../components';

const Info = ({ title, description, host, rating, location, equipments, tags }) => {

  return (
    <section className='info__container'>
      <div className='info__heading'>
        <InfoHeading title={title} location={location} tags={tags} />
        <div className='info__host'>
          <Host name={host.name} picture={host.picture} />
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
