import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { ReactComponent as TRCLogo } from '../Assets/Images/TRC-Logo.svg';

function Header(props) {

     const [hamburgerClicked, setHamburgerClicked] = useState(null);

     function handleOnClick() {

          const sideNav = document.querySelector('.side-nav-overlay');

          if (hamburgerClicked == null) {
               setHamburgerClicked(true);
               disableBodyScroll(sideNav, { reserveScrollBarGap: true });
          }
          else if (hamburgerClicked === true) {
               setHamburgerClicked(false);
               enableBodyScroll(sideNav, { reserveScrollBarGap: true });
          }
          else {
               setHamburgerClicked(true);
               disableBodyScroll(sideNav, { reserveScrollBarGap: true });
          }
     }

     useEffect(() => {
          const sideNav = document.querySelector('.side-nav-overlay');

          return () => clearAllBodyScrollLocks(sideNav)
     }, [])

     return (
          <header >
               <div className="header-inner">
                    <Link to="/" style={{dislay: "flex", alignItems: "center"}}>
                         <TRCLogo style={{width:"120px"}} />
                    </Link>

                    <div className="hamburger" onClick={() => handleOnClick()}>

                         <div className={`line ${(hamburgerClicked == null) ? "" : ((hamburgerClicked === true) ? "moveDownRotate" : "moveDownRotateReverse")}`}></div>

                         <div className={`line ${(hamburgerClicked === true) ? "hide" : "show"}`}></div>

                         <div className={`line ${(hamburgerClicked == null) ? "" : ((hamburgerClicked === true) ? "moveUpRotate" : "moveUpRotateReverse")}`}></div>

                         <div className="hamburger-bkg"></div>
                    </div>

                    <Navigation hamburgerClicked={hamburgerClicked} handleOnClick={handleOnClick} />
               </div>
          </header>
     );
}
export default Header;