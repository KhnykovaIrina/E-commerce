
import ShoppingCartButton from "./ShoppingCartButton"
import { connect } from "react-redux";
import shoppingCart from "../../../store/actions/shoppingCart";

export default connect(
   (state) => ({
      shoppingCart: shoppingCart.getShoppingCart(state),
   }),
)(ShoppingCartButton)