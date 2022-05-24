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

     addItem(id, payload, token) {
      return http.post(
          `${config.url}/shopping_cart/${id}/item`,
          payload,
          {
              Authorization: token
          }
      );
  },

    updateItem(id, variant, payload, token) {
      return http.put(
          `${config.url}/shopping_cart/${id}/item/${variant}`,
          payload,
          {
              Authorization: token
          }
      );
  },
}