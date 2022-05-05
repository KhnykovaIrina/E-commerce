import React from 'react';
import LoginForm from '../../forms/LoginForm';
import Layout from '../../common/Layout'
import './LoginPage.css'

const LoginPage = () => {
   return (
      <Layout>
         <div className='login-page'>
            <LoginForm />
         </div>
      </Layout>
   );
};

export default LoginPage;