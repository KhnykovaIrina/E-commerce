import authApi from '../../utils/api/authApi';
import { getToken } from '../selectors/auth';
import userAction from './user';

const service = {
    fetchAuth: (payload) => async (dispatch, getState) => {
        try {
            const store = getState();
            const nonAuthToken = getToken(store);
            const { user, token } = await authApi.logIn(payload, nonAuthToken);
            dispatch(service.setToken(token));
            dispatch(userAction.setUser(user));
        } catch (response) {
            console.error('Error from API', response.message);
        }
    },

    logoutAccount: (dispatch) => {

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        const token = "";
        const user = {};
        dispatch({ type: "SET_TOKEN", token });
        dispatch({ type: "SET_USER", user });
    },

    fetchToken: () => async (dispatch) => {
        const { token } = await authApi.fetchToken();
        dispatch(service.setToken(token));
    },

    setToken: (serverToken) => (dispatch) => {
        const token = serverToken ? `Bearer ${serverToken}` : '';
        localStorage.setItem('token', token);
        dispatch({ type: 'SET_TOKEN', token });
    },

}

export default service;