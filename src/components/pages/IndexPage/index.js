import IndexPage from "./IndexPage"
import {connect} from "react-redux";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
        categories: state.catalogReducer.categories
    }),
    (dispatch) => ({
        fetchCategories: () => dispatch(catalog.fetchCategories()),
    }),
)(IndexPage)