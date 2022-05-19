import NavBar from "./NavBar";
import { connect } from "react-redux";
import auth from '../../../store/actions/auth';
 
export default connect(
    (state) => ({
        user: state.userReducer.user,
    }),
    (dispatch) => ({
        logoutAccount: () => dispatch(auth.logoutAccount()),
    }),
)(NavBar)