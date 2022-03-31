import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
   return (
      <footer className="footer">
         <div className=" container-fluid">
            <div className="row ">
               <div className=" col-lg-4 offset-lg-1 mb-3">
                  <h3>Sign up for our newsletter</h3>
                  <p>Subscribe to our newsletter to get our latest news.</p>
                  <div className="input-group mb-3">
                     <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                     <button className="btn btn-outline-secondary " type="button">Sign up</button>
                  </div>
               </div>
               <div className="col-6 col-lg-2 mb-3">
                  <h5>Shop</h5>
                  <ul className="list-unstyled list-link">
                     <li><Link to="#">Women's</Link></li>
                     <li><Link to="#">Men's</Link></li>
                     <li><Link to="#">Kids'</Link></li>
                     <li><Link to="#">Shose</Link></li>
                     <li><Link to="#">Equipment</Link></li>
                     <li><Link to="#">By Activity</Link></li>
                     <li><Link to="#">Gift Cards</Link></li>
                     <li><Link to="#">Sale </Link></li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2  mb-3 ">
                  <h5>Help</h5>
                  <ul className="list-unstyled list-link">
                     <li><Link to="#">Help Center</Link></li>
                     <li><Link to="#">Order status</Link></li>
                     <li><Link to="#">Size chart</Link></li>
                     <li><Link to="#">Returns & Warranty</Link></li>
                     <li><Link to="#">Contact us</Link></li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2  mb-3">
                  <h5>About</h5>
                  <ul className="list-unstyled list-link">
                     <li><Link to="#">About us</Link></li>
                     <li><Link to="#">Responsibility</Link></li>
                     <li><Link to="#">Technology & Innovation</Link></li>
                     <li><Link to="#">Explore our stories</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
