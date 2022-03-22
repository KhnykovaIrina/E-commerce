import React from 'react';
import CarouselBox from '../../common/CarouselBox/CarouselBox';
import Brands from '../../elements/Brands/Brands';
import './IndexPage.css';

const IndexPage = () => {
   return (
      <div className="wrapper">
         <h1> Better clothing for the planet</h1>
         <p> Discription</p>
         <button type="button" className="btn btn-light">Shop all</button>
         <CarouselBox />
         <Brands />
      </div>
   );
};

export default IndexPage;