import http from './http';
import config from '../../config';


export default {
    logIn(payload) {
        return http.post(`${config.url}/login`,payload);
    },
}