import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATH from './constants';
import IndexPage from "../pages/IndexPage";

 

const ROUTES = () => {
   return (
      <Routes>
         <Route path={PATH.INDEX_PAGE} element={<IndexPage/>}></Route>
         <Route path={PATH.ABOUT_PAGE}></Route>
         <Route path={PATH.SHOPPING_CART_PAGE}></Route>
      </Routes>
   );
}

export default ROUTES; 