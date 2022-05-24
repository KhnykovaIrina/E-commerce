import { connect } from "react-redux";
import CatalogPage from "./CatalogPage";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
        getCategoryById: (id) => catalog.getCategoryById(id,  state),
        products: catalog.getListOfProducts(state),
    }),
    (dispatch) => ({
        fetchProducts: (id) => dispatch(catalog.fetchProducts(id)),
    }),

)(CatalogPage) 