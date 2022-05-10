import { connect } from "react-redux";
import ShoppingCartPage from './ShoppingCartPage.js';
import shoppingCart from "../../../store/actions/shoppingCart";
import {getShoppingCart} from "../../../store/selectors/shoppingCart";

export default  connect(
   (state) => ({
     shoppingCart: getShoppingCart(state),
   }),
   (dispatch) => ({
       fetchShoppingCart: () => dispatch(shoppingCart.fetchShoppingCart()),
   }),
)(ShoppingCartPage)