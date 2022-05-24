import http from './http';
import config from '../../config';


export default {
   
    /**
     * Returning a order by user token
     * @param {string} token
     * @returns {Promise<Object>}
     */
   loadOrder: (token) => {
      return http.get(`${config.url}/order/user`,
         {
            relations: [
               'shoppingCart',
               'shoppingCart.items',
               'shoppingCart.totals',
               'shippingAddress',
               'deliveryMethod',
               'shoppingCart.items.variant'
            ]
         },
         {
            Authorization: token
         })
   },

    /**
     * Adding address information to the order
     * @param {Object} payload
     * @param {string} payload.email
     * @param {string} payload.lastName
     * @param {string} payload.fullName
     * @param {string} payload.address
     * @param {string} payload.phone
     * @param {string} payload.apartment
     * @param {string} payload.country
     * @param {string} payload.city
     * @param {string} payload.zipcode
     * @param {string} payload.extra
     * @param {string} payload.saveContact
     * @param {string} token
     * @returns {Promise<Object>}
     */
   addAddress: (payload, id, token) => {
      return http.post(`${config.url}/order/${id}/shippingAddress`,
         payload,
         {
            Authorization: token
         })
   },

}