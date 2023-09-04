
import React, {useState} from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import photo1 from "../../../assets/images/photo1.jpg"
import photo2 from '../../../assets/images/photo2.jpg';
import photo3 from '../../../assets/images/photo3.jpg';
import "./Carousel.css"

const Carousel = () => {
  const images = [photo1, photo2, photo3]; 
  const [activePageIndex, setActivePageIndex] = useState(0);
  const { scrollRef } =
    useSnapCarousel();

    const goTo = index => {
          setActivePageIndex(index);
        };
  
  return (
   
    <div className='carousel-main'>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          scrollSnapType: 'x mandatory',
       
        }}
      >
        {images.map((image, i) => (
          <li
            key={i}
            className={i === activePageIndex ? 'active-slide' : ''}
            style={{
              width: "100%",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
             
            }}
          >
            <img src={image} alt={`Slide ${i}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </li>
        ))}
      </ul>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goTo(index)}
              className={index === activePageIndex ? 'dot active ' : 'dot'}
            ></span>
          ))}
        </div>
     
      </div>
   
  );
};

export default Carousel;


