import React from 'react';

function Navigation({ hamburgerClicked, handleOnClick }) {

     return (
          <>
               <nav className="menu">
                    <ul>
                         {/* HOME */}
                         <li>
                              <a className="p-text" href="/">Home</a>
                         </li>

                         {/* PRODUCTS & SERVICES */}
                         <li>
                              <a className="p-text" href="/products_services">Products & Services</a>
                         </li>

                         {/* CONTACT */}
                         <li>
                              <a className="p-text" href="/contact">Contact</a>
                         </li>
                    </ul>
               </nav>

               <div className={`side-nav-overlay ${(hamburgerClicked === true) ? "show-side-nav" : "hide-side-nav"}`} onClick={() => { handleOnClick() }}>
                    <ul className={`side-nav`} onClick={(event) => { event.stopPropagation() }}>
                         {/* HOME */}
                         <li>
                              <a className="p-text" href="/">Home</a>
                         </li>

                         {/* PRODUCTS & SERVICES */}
                         <li>
                              <a className="p-text" href="/products_services">Products & Services</a>
                         </li>

                         {/* CONTACT */}
                         <li>
                              <a className="p-text" href="/contact">Contact</a>
                         </li>
                    </ul>
               </div>
          </>
     );
}
export default Navigation;