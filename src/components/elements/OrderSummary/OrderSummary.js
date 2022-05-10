import React from 'react';
import Form from 'react-bootstrap/Form';

const OrderSummary = (props) => {

   const items = props.shoppingCart.items;
   const subTotal = items.reduce((result, item) => {
      result += item.quantity * item.variant.price;
      return result;
   }, 0);

   return (
      <>
         <div className="row ">
            <Form className="p-0">
               <Form.Group className='mb-3'>
                  <Form.Control type='text' name='coupon' placeholder='Enter coupon code here' />
               </Form.Group>
            </Form>
         </div>
         <div className="row">
            <p className="col ps-1 m-1">Subtotal</p>
            <div className="col  text-end m-1"><b>${subTotal}</b></div>
         </div>
         <div className="row ">
            <p className="col  ps-1 m-1" >Shipping</p>
            <small className="col fs-6 text-end m-1">Calculated at the next step</small>
         </div>
         <div className="row border-top border-2 border-secondary mt-1" >
            <p className="col ps-1 m-1 ">Total</p>
            <div className="col  text-end m-1"><b>${subTotal}</b></div>
         </div>
      </>
   );
};

export default OrderSummary;