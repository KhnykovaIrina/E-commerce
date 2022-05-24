import {connect} from "react-redux";
import auth from '../../store/actions/auth';
import {getToken} from '../../store/selectors/auth'
import catalog from "../../store/actions/catalog";
import App from './App';

export default connect(
    (state) => ({
        token:getToken(state),
        categories: catalog.getListCategories(state)
    }),
    (dispatch) => ({
        fetchToken: () => dispatch(auth.fetchToken()),
        fetchCategories: () => dispatch(catalog.fetchCategories()),
    }),
)(App);