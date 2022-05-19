import http from "./http";
import config from '../../config';

const api = {

   getEntity({ id, extraParams }) {
      return http.get(`${config.url}/product/${id}`, extraParams);
   },

};

export default api;