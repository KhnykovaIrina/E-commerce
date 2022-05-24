import ShippingForm from "./ShippingForm";
import { connect } from "react-redux";
import orderAction from "../../../store/actions/order";

export default connect(
   null,
   (dispatch) => ({
      addAddress: (payload) => dispatch(orderAction.addAddress(payload)),
  }),
 
)(ShippingForm)