import React,{useEffect} from 'react';
import Layout from '../../common/Layout'
import ShippingForm from '../../forms/ShippingForm';
import OrderSummary from "../../elements/OrderSummary";
import ShoppingCartItemsList from '../../elements/ShoppingCartItemsList';
import './CheckoutAddressPage.css';

const CheckoutAddressPage = (props) => {
    const {shoppingCart,fetchOrder} = props;
    useEffect(() => {
        fetchOrder();
    }, []);
  const items=shoppingCart.items
    return (
        <Layout>
            <div className='wrapper-checkout-page ms-3 '>
                <div className="col"><h3><b>Checkout</b></h3></div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className="col-md-8 checkout-description p-0 m-0">
                            <div><b>Address</b></div>
                            <span className="description-item">Shipping</span>
                            <div>Payment</div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-8'>
                                <ShippingForm />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 p-0 m-3'>
                        <h4>Your cart</h4>
                        <ShoppingCartItemsList items={items} />
                        <OrderSummary shoppingCart={shoppingCart} />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CheckoutAddressPage;
