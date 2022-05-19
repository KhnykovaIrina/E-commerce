import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATH from './constants';
import GuidelinesPage from '../pages/GuidelinesPage';
import IndexPage from "../pages/IndexPage";
import LoginPage from '../pages/LoginPage';
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SuccessPage from '../pages/SuccessPage';
import ForgotPassworPage from '../pages/ForgotPasswordPage';
import CatalogPage from '../pages/CatalogPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ProductPage from '../pages/ProductPage';


const RouteList = () => {
   return (
      <Routes>
         <Route path={PATH.INDEX_PAGE} element={<IndexPage />}></Route>
         <Route path={PATH.ABOUT_PAGE}></Route>
         <Route path={PATH.SHOPPING_CART_PAGE} element={<ShoppingCartPage />}></Route>
         <Route path={PATH.LOGIN_PAGE} element={<LoginPage />}></Route>
         <Route path={PATH.PASSWORD_RECOVERY_PAGE} element={<PasswordRecoveryPage />}></Route>
         <Route path={PATH.SIGNUP_PAGE} element={<SignUpPage />}></Route>
         <Route path={PATH.GUIDE_LINES} element={<GuidelinesPage />}></Route>
         <Route path={PATH.SUCCESS_PAGE} element={<SuccessPage />}></Route>
         <Route path={PATH.FORGOT_PASSWORD_PAGE} element={<ForgotPassworPage />}></Route>
         <Route path={PATH.CATALOG_PAGE} element={<CatalogPage />}></Route>
         <Route path={PATH.CATALOG_DETAIL} element={<CatalogPage />}></Route>
         <Route path={PATH.PRODUCT_DETAIL} element={<ProductPage />} />
      </Routes >

   );
}

export default RouteList; 