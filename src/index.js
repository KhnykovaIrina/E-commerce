import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './root/App';
import store from './store/store';



ReactDOM.render(
  <Provider store={store}>
        <App /> 
 </Provider>,
  document.getElementById('root')
);
