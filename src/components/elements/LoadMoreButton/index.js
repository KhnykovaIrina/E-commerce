import LoadMoreButton from "./LoadMoreButton.js";
import { connect } from "react-redux";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
        isLoaded:catalog.isLoaded(state),
        products: catalog.getListOfProducts(state),
    }),
    (dispatch) => ({
      loadMoreProducts: () => dispatch(catalog.loadMoreProducts()),
    }),
)(LoadMoreButton)