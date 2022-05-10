import http from './http';
import config from '../../config';


export default {
   shoppingCart: (token) => {
      return http.get(`${config.url}/shopping_cart/user`,
         {
            relations: ['items', 'items.variant']
         },
         {
            Authorization: token
         })
   },

   deleteItem: (id, variant, token) => {
      return http.delete(`${config.url}/shopping_cart/${id}/item/${variant}`,
         null,
         {
            Authorization: token
         })
     },
}