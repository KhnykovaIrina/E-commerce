import userApi from '../../utils/api/userApi';
import { getToken } from '../selectors/auth';
import auth from "./auth";


const service = {

    createUser: (payload) => async (dispatch, getState) => {
        try {
            const store = getState();
            const token = getToken(store);
            await userApi.createUser(payload, token);
            dispatch(auth.fetchAuth({
                email: payload.email,
                password: payload.password
            }));
        } catch (response) {
            console.error('Error from API', response.message);
        }
    },
    setUser: (user) => (dispatch) => {
        dispatch({type: 'SET_USER', user})

        return localStorage.setItem('user', JSON.stringify(user));
    },
}

export default service;