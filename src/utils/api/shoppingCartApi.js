import http from './http';
import config from '../../config';


export default {
   shoppingCart: (token) => {
      return http.get(`${config.url}/shopping_cart/user`,
      {
         relations: ['items', 'items.variant']
     },
       {
         Authorization:`Bearer ${token}`
     })
   },
}