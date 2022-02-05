import './Gallery.css';
import { useState } from 'react';

const Gallery = (pictures) => {
  const [img, setImg] = useState(pictures[0]);
  const [imgIndex, setImgIndex] = useState(0);

  function handleClick(e) {
    let index = imgIndex + e;

    if (imgIndex + e > pictures.length - 1) {
      index = 0;
    }
    if (imgIndex + e < 0) {
      index = pictures.length - 1;
    }

    setImg(pictures[index]);
    setImgIndex(index);
  };

  return (
    <div className='gallery' >
      <img
        src={img}
        alt='accomodation'
        className='gallery__img'
      />
      <button type='button' className='gallery__arrow gallery__arrow-L' onClick={() => handleClick(-1)}></button>
      <button type='button' className='gallery__arrow gallery__arrow-R' onClick={() => handleClick(1)}></button>
      <span className='gallery__count'>
        {imgIndex + 1}/{pictures.length}
      </span>
    </div>)
};

export default Gallery;