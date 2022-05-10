import {connect} from "react-redux";
import auth from '../../store/actions/auth';
import {getToken} from '../../store/selectors/auth'
import App from './App';

export default connect(
    (state) => ({
        token:getToken(state)
    }),
    (dispatch) => ({
        fetchToken: () => dispatch(auth.fetchToken())
    }),
)(App);