import React from 'react';
import { Link } from 'react-router-dom';
import "./Brands.css";


const Brands = () => {
   return (
      <div>
         <div className="container">
            <ul className="list-unstyled">
               <li><Link to="#">New York Times</Link></li>
               <li><Link to="#">Vogue</Link></li>
               <li><Link to="#">Vanity Fair</Link></li>
               <li><Link to="#">CNBC</Link></li>
            </ul>
         </div>
      </div>
   );
};

export default Brands;