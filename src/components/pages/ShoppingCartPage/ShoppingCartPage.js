import React from 'react';
import Layout from "../../common/Layout";
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartItemsList from '../../elements/ShoppingCartItemsList';
import PATH from '../../routes/constants'
import './ShoppingCartPage.css';
import Accordion from '../../common/Accordion';
import OrderSummary from "../../elements/OrderSummary"

const ShoppingCartPage = (props) => {
   const { shoppingCart } = props;
   const navigate = useNavigate()
   const items = shoppingCart.items

   return (
      <>
         <Layout>
            <div className='wrapper-shopping-page'>
               <div className="col"><h3><b>Your Cart</b></h3></div>
               <div className='row'>
                  <div className='col-12 col-md-6 pe-3'>
                     <small >Not ready to checkout? <Link className="continue-shopping" to={PATH.CATALOG_PAGE}>Continue shopping</Link></small>
                     <div className='row'>
                        <div className='col-12 col-md-12 border-top'>
                           <div>
                              {items.length > 0 &&
                                 <ShoppingCartItemsList items={items} />
                              }
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-12 col-md-6 px-5 order-summary' >

                     <div className="mb-3"><h4>Order Summary</h4></div>

                     <OrderSummary shoppingCart={shoppingCart} />
                     <button type="button" onClick={() => navigate(PATH.CHECKOUT)} className="btn btn-dark" disabled={items.length === 0}>Continue to checkout</button>
                  </div>
               </div>
               <div className='row  '>
                  <div className='col-12 col-md-6 me-3 mt-4 p-0'>
                     <Accordion accordionData={[
                        {
                           title: "Return Policy",
                           content: "This is our example return policy which is everything you need to know about our returns"
                        },
                        {
                           title: 'Shipping Options',
                           content: "Text"
                        },
                        {
                           title: 'Contacts',
                           content: "Text"
                        }
                     ]} />
                  </div>
               </div>
            </div>
         </Layout >
      </>
   );
};

export default ShoppingCartPage;