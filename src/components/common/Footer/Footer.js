import React from 'react';
import { Link } from "react-router-dom";
import PATH from '../../routes/constants';
import './Footer.css';


const Footer = (props) => {
   const shopItems = props.shopItems;
   return (
      <footer className="footer">
         <div className=" container-fluid">
            <div className="row ">
               <div className="col-lg-4 offset-lg-1 mb-3">
                  <h3>Sign up for our newsletter</h3>
                  <p>Subscribe to our newsletter to get our latest news.</p>
                  <div className="input-group mb-3">
                     <input className="form-control border-end-0" type="email" name="email" placeholder="Enter email address" />
                     <button  className="btn btn-outline-secondary" type="button">Sign up</button>
                  </div>
               </div>
               <div className="col-6 col-lg-2 mb-3">
                  <h5>Shop</h5>
                  <ul className="list-unstyled list-link">
                     {shopItems.map((item, key) => (
                        <li key={key}><Link to={item.to}>{item.name}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="col-6 col-lg-2  mb-3 ">
                  <h5>Help</h5>
                  <ul className="list-unstyled list-link">
                     <li><Link to={PATH.HELP_CENTER}>Help Center</Link></li>
                     <li><Link to={PATH.ORDER_STATUS}>Order status</Link></li>
                     <li><Link to={PATH.RETURNS_AND_WARRANTY}>Returns & Warranty</Link></li>
                     <li><Link to={PATH.CONTACT_US}>Contact us</Link></li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2  mb-3">
                  <h5>About</h5>
                  <ul className="list-unstyled list-link">
                     <li><Link to={PATH.ABOUT_PAGE}>About us</Link></li>
                     <li><Link to={PATH.RESPONSIBILITY}>Responsibility</Link></li>
                     <li><Link to={PATH.EXPLORE_OUR_STORIES}>Explore our stories</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
