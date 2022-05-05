import ProductList from './ProductList';
import { connect } from "react-redux";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
         products: catalog.getListOfProducts(state),
    }),
    (dispatch) => ({
        fetchProducts: (id) => dispatch(catalog.fetchProducts(id)),
    }),
)(ProductList)