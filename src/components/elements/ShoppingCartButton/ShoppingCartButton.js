import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import PATH from '../../routes/constants';
import './ShoppingCartButton.css'

const ShoppingCartButton = (props) => {
   const { shoppingCart, fetchShoppingCart } = props;
   useEffect(() => {
      fetchShoppingCart();
   }, [fetchShoppingCart]);
   const totalItems = shoppingCart.items?.length;

   return (
      <div className="wrapper-cart-button">
         <Link to={PATH.SHOPPING_CART_PAGE}>
            <Icon.Bag className="icon" />
         </Link>
         {(totalItems > 0) && (
            <span className="ms-1">{totalItems}</span>
         )}

      </div>
   );
};

export default ShoppingCartButton;