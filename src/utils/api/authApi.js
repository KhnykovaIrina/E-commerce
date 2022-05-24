import http from './http';
import config from '../../config';


export default {
    logIn(payload, token) {
        return http.post(`${config.url}/login`,
            payload,
            {
                Authorization: token
            }
        );
    },

    fetchToken() {
        return http.get(`${config.url}/token`);
    },

};