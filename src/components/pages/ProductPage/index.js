import {connect} from "react-redux";
import ProductPage from "./ProductPage";
import catalog from "../../../store/actions/catalog";
import shoppingCart from "../../../store/actions/shoppingCart";

export default connect(
    (state) => ({
        product: catalog.getProduct(state),
    }),
    (dispatch) => ({
        fetchProduct: (id) => dispatch(catalog.fetchProduct(id)),
        addToCart: (item, quantity) => dispatch(shoppingCart.addItem(item, quantity)),
    }),
)(ProductPage);
