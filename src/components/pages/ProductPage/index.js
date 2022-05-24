import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import catalog from "../../../store/actions/catalog";
import shoppingCart from "../../../store/actions/shoppingCart";
import {getShoppingCart} from "../../../store/selectors/shoppingCart";

export default connect(
    (state) => ({
        product: catalog.getProduct(state),
        shoppingCart: getShoppingCart(state),
        user: state.userReducer.user,
    }),
    (dispatch) => ({
        fetchProduct: (id) => dispatch(catalog.fetchProduct(id)),
        addToCart: (item, quantity) => dispatch(shoppingCart.addItem(item, quantity)),
        updateItem: (item, quantity) => dispatch(shoppingCart.updateItem(item, quantity)),
    }),
)(ProductPage);
