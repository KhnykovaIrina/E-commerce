import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import auth from "../../../store/actions/auth";


export default connect(
   (state) => ({
      user: state.userReducer.user
  }),
   (dispatch) => ({
      fetchAuth: (email,password,rememberMe) => dispatch(auth.fetchAuth(email,password,rememberMe)),
  }),
 
)(LoginForm)