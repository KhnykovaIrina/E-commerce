import React from 'react';
import PasswordRecoveryForm from '../../forms/PasswordRecoveryForm';
import Layout from '../../common/Layout'

const PasswordRecoveryPage = () => {
   return (
      <Layout>
         <div>
            <PasswordRecoveryForm />
         </div>
      </Layout>
   );
};

export default PasswordRecoveryPage;