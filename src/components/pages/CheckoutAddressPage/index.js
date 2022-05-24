import { connect } from "react-redux";
import CheckoutAddressPage from "./CheckoutAddressPage";
import orderActions from "../../../store/actions/order";
import { getShoppingCart } from "../../../store/selectors/shoppingCart";

export default connect(
  (state) => ({
    shoppingCart: getShoppingCart(state),
  }),
  (dispatch) => ({
       fetchOrder: () => dispatch(orderActions.fetchOrder()),
   }),
)(CheckoutAddressPage)

