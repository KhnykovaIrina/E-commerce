import sendRequest from './sendRequest';

const http = {

   post(url, body) {
      return sendRequest({
         url,
         body,
         method: 'POST',
      });
   },

   delete(url, queryParams) {
      return sendRequest({
         url,
         queryParams,
         method: 'DELETE',
      });
   },

   put(url, body) {
      return sendRequest({
         url,
         body,
         method: 'PUT',
      });
   },

   get(url, queryParams) {
      return sendRequest({
         url,
         queryParams,
         method: 'GET',
      });
   }
};

export default http;