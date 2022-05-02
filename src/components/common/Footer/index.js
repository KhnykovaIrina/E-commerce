import catalog from "../../../store/actions/catalog";
import { connect } from "react-redux";
import Footer from "./Footer";
import PATH from "../../routes/constants";

export default connect(
   (state) => ({
      shopItems: catalog.getRootCategories(state).map(category => ({
         to: `${PATH.CATALOG_PAGE}/${category.id}`,
         name: category.name
     })),
   }),
   
)(Footer)