import React from 'react';
import '../styles/Accomodations.css';

const Rating = ({ rate }) => {
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(i <= parseInt(rate) ? 'filled' : 'empty');
  }
  return (
    <div className='rate'>
      <ul>
        {arr.map((e, i) => (
          <li key={i}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill={e === 'empty' ? '#E3E3E3' : '#ff6060'} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
