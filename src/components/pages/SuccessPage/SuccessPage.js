import React from 'react';
import './SuccessPage.css';
import Layout from '../../common/Layout'


const SuccessPage = () => {
   return (
      <Layout>
         <div className="container">
            <h4 className="success-page-content">If your email is in the database, you will be sent a link to your email to update your password.</h4>
         </div>
      </Layout>
   )
};

export default SuccessPage;