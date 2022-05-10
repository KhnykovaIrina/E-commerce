import sendRequest from './sendRequest';

const http = {

   post(url, body, headers) {
      return sendRequest({
         url,
         body,
         method: 'POST',
         headers: getHeaders(headers),
      });
   },

   delete(url, queryParams,headers) {
      return sendRequest({
         url,
         queryParams,
         method: 'DELETE',
         headers: getHeaders(headers),
      });
   },

   put(url, body,headers) {
      return sendRequest({
         url,
         body,
         method: 'PUT',
         headers: getHeaders(headers),
      });
   },

   get(url, queryParams,headers) {
      return sendRequest({
         url,
         queryParams,
         method: 'GET',
         headers: getHeaders(headers),
      });
   }
};

function getHeaders(props = {}) {
   const headers = {};

   Object.keys(props).forEach((name) => {
       if (props[name]) {
           headers[name] = props[name];
       }
   });

   return headers;
}
export default http;