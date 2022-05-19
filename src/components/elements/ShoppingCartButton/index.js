import { connect } from "react-redux";
import ShoppingCartButton from "./ShoppingCartButton";
import shoppingCart from "../../../store/actions/shoppingCart";
import { getShoppingCart } from "../../../store/selectors/shoppingCart";

export default connect(
   (state) => ({
      shoppingCart: getShoppingCart(state),
   }),
   (dispatch) => ({
      fetchShoppingCart: () => dispatch(shoppingCart.fetchShoppingCart()),
   }),
)(ShoppingCartButton)