import authApi from '../../utils/api/authApi';


const service = {
    fetchAuth: (payload) => async (dispatch) => {
        try {
            const { user, token } = await authApi.logIn(payload)
            dispatch({ type: "SET_TOKEN", token });
            dispatch({ type: "SET_USER", user });
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
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
    }

}

export default service;