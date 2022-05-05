import React from 'react';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCartItemsList = (props) => {
   const { items } = props
   console.log(items)
   return (

        items.map(item => 
            <ShoppingCartItem key={item.id} item={item} />
         )  
      );
};

export default ShoppingCartItemsList;