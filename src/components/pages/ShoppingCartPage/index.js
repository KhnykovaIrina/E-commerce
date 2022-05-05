import { connect } from "react-redux";
import ShoppingCartPage from './ShoppingCartPage.js';
import shoppingCart from "../../../store/actions/shoppingCart";

export default  connect(
   (state) => ({
     shoppingCart: shoppingCart.getShoppingCart(state),
   }),
   (dispatch) => ({
       fetchShoppingCart: () => dispatch(shoppingCart.fetchShoppingCart()),
   }),
)(ShoppingCartPage)