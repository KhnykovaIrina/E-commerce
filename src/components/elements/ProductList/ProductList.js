import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import "./ProductList.css"


const ProductList = (props) => {
   const {category,products} = props;
   useEffect(() => {
      props.fetchProducts(category.id)
   }, [category]);

   return (
     <div className="container-product-list">
         <div className="row">
            {products.length > 0 &&
               products.map(product => {
                  return <ProductCard key={product.id} category={category} product={product} />;
               })}
         </div>
      </div>
   )
};

export default ProductList;