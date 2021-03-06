import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import "./Layout.css";

const Layout = (props) => {
   return (
      <>
         <Header />
         <div className="container">
            <div className='row m-0'>
               <div className='col-12 p-0'>
                  {props.children}
               </div>
            </div>
         </div>
         <Footer />

      </>
   );
};

export default Layout;