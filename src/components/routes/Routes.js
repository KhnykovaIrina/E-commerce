import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATH from './constants';
import IndexPage from "../pages/IndexPage";

const ROUTES = () => {
   return (
      <div>
         <Routes>
         	<Route path={PATH.INDEX_PAGE} element={<IndexPage/>}></Route>
         	<Route path={PATH.ABOUT_PAGE}></Route>
         </Routes>
      </div>
   );
}

export default ROUTES; 
