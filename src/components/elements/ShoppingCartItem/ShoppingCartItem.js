import React from 'react';
import './ShoppingCartItem.css';

const ShoppingCartItem = (props) => {
   const { item } = props
   const variant = item.variant
   
   return (
      <div className="row border-bottom">
         <div className="row main">
            <div className="card-item mb-3">
               <div className="row g-0">
                  <div className="col-md-4  col-lg-3">
                     <img src={`${variant.images[0]}?id=${variant.id}`} className="img-fluid rounded-start item-image" alt={variant.name} />
                  </div>
                  <div className="col-md-4">
                     <div className="card-body pt-0">
                        <h5 className="card-title">{variant.name}</h5>
                        <p className="card-text m-0"><small className="text-muted fs-6">Quantity:{item.quantity}</small></p>
                        <p className="card-text m-0"><small className="text-muted fs-6">Size:</small></p>
                        <p className="card-text mt-1 item-price">${item.variant.price}</p>
                     </div>
                  </div>
                  <div className="col-4 col-md-4 d-flex d-flex justify-content-end ">
                     <p className="text-decoration-underline  align-self-end  mb-0 ">Remove</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default ShoppingCartItem;