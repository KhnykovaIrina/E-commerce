import http from './http';
import config from '../../config';


export default {
    createUser(payload,token) {
        return http.post(`${config.url}/user`, payload,
            {
                Authorization: token
            }
        );
    },
 

};