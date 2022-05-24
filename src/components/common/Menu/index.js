import Menu from "./Menu";
import {connect} from "react-redux";
import catalog from "../../../store/actions/catalog";

export default connect(
    (state) => ({
        categories: catalog.getListCategories(state)
    }),
   
)(Menu)
