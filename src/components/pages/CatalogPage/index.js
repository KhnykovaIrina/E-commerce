import { connect } from "react-redux";
import CatalogPage from "./CatalogPage";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
        getCategoryById: (id) => catalog.getCategoryById(id, state),
    }),
    null,
)(CatalogPage) 