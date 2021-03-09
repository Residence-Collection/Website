import React from 'react';

import { Link } from "react-router-dom";

function Navigation({ hamburgerClicked, handleOnClick }) {

     return (
          <>
               <nav className="menu">
                    <ul>
                         {/* HOME */}
                         <li>
                              <Link className="p-text" to="/">Home</Link>
                         </li>

                         {/* PRODUCTS & SERVICES */}
                         <li>
                              <Link className="p-text" to="/products_services">Products & Services</Link>
                         </li>

                         {/* CONTACT */}
                         <li>
                              <Link className="p-text" to="/contact">Contact</Link>
                         </li>
                    </ul>
               </nav>

               <div className={`side-nav-overlay ${(hamburgerClicked === true) ? "show-side-nav" : "hide-side-nav"}`} onClick={() => { handleOnClick() }}>
                    <ul className={`side-nav`} onClick={(event) => { event.stopPropagation() }}>
                         {/* HOME */}
                         <li>
                              <Link className="p-text" to="/">Home</Link>
                         </li>

                         {/* PRODUCTS & SERVICES */}
                         <li>
                              <Link className="p-text" to="/products_services">Products & Services</Link>
                         </li>

                         {/* CONTACT */}
                         <li>
                              <Link className="p-text" to="/contact">Contact</Link>
                         </li>
                    </ul>
               </div>
          </>
     );
}
export default Navigation;