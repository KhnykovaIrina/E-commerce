import { connect } from "react-redux";
import LoginForm from "./LoginForm";


export default connect(
   (state) => {
      return state;
   },
   null,
)(LoginForm)