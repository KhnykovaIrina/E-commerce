import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import PATH from '../../routes/constants';
import './ShoppingCartButton.css'

const ShoppingCartButton = (props) => {

   const { shoppingCart } = props


   return (
      <div className="wrapper-cart-button">
         <Link to={PATH.SHOPPING_CART_PAGE}>
            <Icon.Bag className="icon" />
         </Link>
         <span ></span>

      </div>
   );
};

export default ShoppingCartButton;