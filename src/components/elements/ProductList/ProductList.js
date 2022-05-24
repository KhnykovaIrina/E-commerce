import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import "./ProductList.css"


const ProductList = (props) => {
   const {products} = props;
  
   return (
     <div className="container-product-list">
         <div className="row">
            {products.length > 0 &&
               products.map(product => {
                  return <ProductCard key={product.id} product={product} />;
               })}
         </div>
      </div>
   )
};

export default ProductList;