import { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = ({ pictures }) => {
  const [img, setImg] = useState(pictures[0]);
  const [imgIndex, setImgIndex] = useState(0);

  function handleClick(click) {
    let index = imgIndex + click;

    if (imgIndex + click > pictures.length - 1) {
      index = 0;
    }
    if (imgIndex + click < 0) {
      index = pictures.length - 1;
    }
    setImg(pictures[index]);
    setImgIndex(index);
  };

  return (
    <div className='gallery' >
      <img src={img} alt='accomodation' className='gallery__img' />
      <button type='button' className='gallery__arrow left' onClick={() => handleClick(-1)}></button>
      <button type='button' className='gallery__arrow right' onClick={() => handleClick(1)}></button>
      <span className='gallery__count'>
        {imgIndex + 1}/{pictures.length}
      </span>
    </div>)
};

export default Gallery;