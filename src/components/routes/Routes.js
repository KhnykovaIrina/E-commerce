import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PATH from './constants';
import GuidelinesPage from '../pages/GuidelinesPage';
import IndexPage from "../pages/IndexPage";
import LoginPage from '../pages/LoginPage';
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage';
import SuccessPage from '../pages/SuccessPage';
import ForgotPassworPage from '../pages/ForgotPasswordPage';


 

const ROUTES = () => {
   return (
      <Routes>
         <Route path={PATH.INDEX_PAGE} element={<IndexPage />}></Route>
         <Route path={PATH.ABOUT_PAGE}></Route>
         <Route path={PATH.SHOPPING_CART_PAGE}></Route>
         <Route path={PATH.LOGIN_PAGE} element={<LoginPage />}></Route>
         <Route path={PATH.PASSWORD_RECOVERY_PAGE} element={<PasswordRecoveryPage />}></Route>
         <Route path={PATH.SIGNUP_PAGE}></Route>
		 <Route path={PATH.GUIDE_LINES} element={<GuidelinesPage />}></Route>
         <Route path={PATH.SUCCESS_PAGE} element={<SuccessPage />}></Route>
         <Route path={PATH.FORGOT_PASSWORD_PAGE} element={<ForgotPassworPage />}></Route>
      </Routes>
   );
}

export default ROUTES; 