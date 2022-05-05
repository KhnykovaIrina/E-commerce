import sendRequest from './sendRequest';

const http = {

   post(url, body, headers) {
      return sendRequest({
         url,
         body,
         method: 'POST',
         headers,
      });
   },

   delete(url, queryParams,headers) {
      return sendRequest({
         url,
         queryParams,
         method: 'DELETE',
         headers
      });
   },

   put(url, body,headers) {
      return sendRequest({
         url,
         body,
         method: 'PUT',
         headers,
      });
   },

   get(url, queryParams,headers) {
      return sendRequest({
         url,
         queryParams,
         method: 'GET',
         headers,
      });
   }
};

export default http;