import { connect } from "react-redux";
import ShoppingCartPage from './ShoppingCartPage.js';
import {getShoppingCart} from "../../../store/selectors/shoppingCart";

export default  connect(
   (state) => ({
     shoppingCart: getShoppingCart(state),
   }),
 )(ShoppingCartPage)