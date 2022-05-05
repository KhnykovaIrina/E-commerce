import http from './http';
import config from '../../config';


export default {

   getListCategories() {
       return http.get(`${config.url}/category`);
   },
   getListProducts(extraParams) {
      return http.get(`${config.url}/product`,extraParams);
  },
  getEntityProducts() {
    return http.get(`${config.url}/product}`);
},
}