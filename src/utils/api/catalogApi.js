import http from './http';
import config from '../../config';

export default {

   getListCategories() {
       return http.get(`${config.url}/category`);
   },
   getEntityCategories({id}) {

       return http.get(`${config.url}/category/${id}`);
   },
   getListProducts() {
      return http.get(`${config.url}/product`);
  },
}