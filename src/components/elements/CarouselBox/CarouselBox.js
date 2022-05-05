import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselBox.css';
import Clothes from "./image/clothes.jpg";
import Converse from "./image/converse.jpg";
import Jeans from "./image/jeans.jpg";
import Glass from "./image/glass.jpg";


const CarouselBox = () => {

   return (
      <div className="col">
      <div className='carousel'>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block  image"
                  src={Converse}
                  alt="Converse"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block  image"
                  src={Clothes}
                  alt="Clothes"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block  image"
                  src={Jeans}
                  alt="Jeans"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block  image"
                  src={Glass}
                  alt="Glass"
               />
            </Carousel.Item>
         </Carousel>
      </div>
      </div>
   );
};

export default CarouselBox;