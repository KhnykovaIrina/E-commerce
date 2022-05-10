import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import user from "../../../store/actions/user";
import {getUser} from "../../../store/selectors/user"


export default connect(
   (state) => ({
      user: getUser(state)
  }),
   (dispatch) => ({
      createUser: (payload) => dispatch(user.createUser(payload)),
  }),
 
)(SignUpForm)