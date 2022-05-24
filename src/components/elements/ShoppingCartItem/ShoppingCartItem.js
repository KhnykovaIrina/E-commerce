import React from 'react';
import RemoveButton from '../RemoveButton';
import './ShoppingCartItem.css';

const ShoppingCartItem = (props) => {
   const { item } = props
   const variant = item.variant

   return (
      <div className="row border-bottom">
         <div className="row ps-3">
            <div className="card-item mb-3 p-0">
               <div className="row g-0">
                  <div className="col-4 col-md-4  col-lg-3">
                     <img src={`${variant.images[0]}?id=${variant.id}`} className="img-fluid rounded-start item-image" alt={variant.name} />
                  </div>
                  <div className="col-md-4">
                     <div className="card-body pt-0">
                        <h5 className="card-title">{variant.name}</h5>
                        <p className="card-text m-0">
                           <span className="text-muted fs-6 me-1">quantity:</span>
                           <span>{item.quantity}</span>
                        </p>
                        <p className="card-text m-0">
                           {variant.attributes.map((attribute, key) => (
                              <div>
                                 <span key={key} className="text-muted fs-6">{attribute.property}: </span>
                                 {(attribute.property === 'color') && (
                                    <span style={{ backgroundColor: attribute.value }} />
                                 )}
                                 {(attribute.property !== 'color') && (
                                    <span>{attribute.value}</span>
                                 )}
                              </div>
                           ))}
                        </p>
                        <p className="card-text mt-1 item-price">${item.variant.price}</p>
                     </div>
                  </div>
                  <RemoveButton item={item} />
               </div>
            </div>
         </div>
      </div>

   );
};

export default ShoppingCartItem;