import React, { useEffect } from 'react';
import Layout from "../../common/Layout";
import { Link } from 'react-router-dom'
import ShoppingCartItemsList from '../../elements/ShoppingCartItemsList';
import PATH from '../../routes/constants'
import './ShoppingCartPage.css';

const ShoppingCartPage = (props) => {
   const { shoppingCart, fetchShoppingCart } = props;
   useEffect(() => {
      fetchShoppingCart();
   }, []);
   const items = shoppingCart.items
   
   return (
      <>
         <Layout>
            <div className='container ms-5 m-3'>
               <div className="col"><h4><b>Your Cart</b></h4></div>
               <small >Not ready to checkout? <Link className="continue-shopping" to={PATH.CATALOG_PAGE}>Continue shopping</Link></small>
               <div className='row me-3 '>
                  <div className='col-12 col-md-6 border-top'>
                     <div>
                     {items.length > 0 &&
                           <ShoppingCartItemsList items={items} />
                        }
                     </div>
                  </div>
                  <div className='col-12 col-md-6'>
                  </div>
               </div>
            </div>
         </Layout >
      </>
   );
};

export default ShoppingCartPage;