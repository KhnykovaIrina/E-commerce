import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.css"
import PATH from '../../routes/constants';

const ProductCard = (props) => {
   const {product} = props;
   let variant;
   if (product.variants.length !== 0) {
      variant = product.variants[0]
   }

   return (
      <div className="col-6 col-lg-3">
         <div className="card">
            <Link to={PATH.PRODUCT_PAGE}><img className="card-image" src={`${product.image}?id=${product.id}`} alt={product.name}/></Link>
            <div className="card-body">
              <Link to={PATH.PRODUCT_DETAIL.replace(':id', product.id)}><h5 className="card-title">{product.name}</h5></Link> 
               <p className="card-text">${variant ? variant.price : ""}</p>
            </div>
         </div>
      </div>
   );

};

export default ProductCard;
