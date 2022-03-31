import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GuidelinesPage from '../pages/GuidelinesPage';
import IndexPage from "../pages/IndexPage";
import PATH from './constants';

const ROUTES = () => {
   return (
      <div>
         <Routes>
            <Route path={PATH.INDEX_PAGE} element={<IndexPage />}></Route>
            <Route path={PATH.ABOUT_PAGE}></Route>
            <Route path={PATH.GUIDE_LINES} element={<GuidelinesPage />}></Route>
            <Route path={PATH.SHOPPING_CART_PAGE}></Route>
         </Routes>
      </div>
   );
}

export default ROUTES;
