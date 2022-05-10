import RemoveButton from "./RemoveButton.js";
import { connect } from "react-redux";
import shoppingCart from "../../../store/actions/shoppingCart";

export default connect(
  null,
    (dispatch) => ({
      deleteItem: (item) => dispatch(shoppingCart.deleteItem(item)),
  }),
)(RemoveButton)