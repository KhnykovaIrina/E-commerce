import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import auth from "../../../store/actions/auth";
import {getUser} from "../../../store/selectors/user"


export default connect(
   (state) => ({
      user: getUser(state)
  }),
   (dispatch) => ({
      fetchAuth: (payload) => dispatch(auth.fetchAuth(payload)),
  }),
 
)(LoginForm)