import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import "./Layout.css";

const Layout = (props) => {
   return (
      <>
         <Header />
         <div className='row'>
            <div className='col-12'>
               {props.children}
            </div>
         </div>
         <Footer />

      </>
   );
};

export default Layout;