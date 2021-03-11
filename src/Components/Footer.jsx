import React from 'react';
import { Link } from "react-router-dom";

import {ReactComponent as TRCLogo} from '../Assets/Images/TRC-Logo.svg';

function Footer(props) {
     return (
          <footer>
               <div className="inner">
                    <section className="address-container">
                         <Link to="/">
                              <TRCLogo style={{width:"120px", marginBottom:"20px"}}/>
                         </Link>
                         <address>
                              <ul className="white-text">
                                   <li className="margin-bottom-20">
                                        <span>
                                             <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                        <p>
                                             103 Block A Commercial Broadway, Phase 8, DHA Cantt, 54810.
                                             <br />Lahore, Pakistan.
                                        </p>
                                   </li>

                                   <li className="margin-bottom-20">
                                        <span>
                                             <i className="fas fa-envelope"></i>
                                        </span>
                                        <a href="mailto:contactus@residencecollection.co" className="white-text">contactus@residencecollection.com</a>
                                   </li>

                                   <li className="margin-bottom-20">
                                        <span>
                                             <i className="fas fa-phone-alt"></i>
                                        </span>
                                        <ul>
                                             <li>
                                                  <a href="tel:+924237135861" className="white-text margin-bottom-20">+92 (42) 3713-5861</a>
                                             </li>
                                             <li>
                                                  <a href="tel:+924237135862" className="white-text">+92 (42) 3713-5862</a>
                                             </li>
                                        </ul>
                                   </li>
                              </ul>
                         </address>
                    </section>

                    <section className="siteMap-social-container">
                              <div>
                                   <h4 className="white-text margin-bottom-20">SITE MAP</h4>
                                   <nav>
                                        <ul>
                                             <li className="margin-bottom-20">
                                                  <Link to="/" className="white-text">Home</Link>
                                             </li>
                                             <li className="margin-bottom-20">
                                                  <Link to="/products_services" className="white-text">Products & Services</Link>
                                             </li>
                                             <li className="margin-bottom-20">
                                                  <Link to="/contact" className="white-text">Contact</Link>
                                             </li>
                                        </ul>
                                   </nav>
                                   
                              </div>
                              
                              {/* <div>
                                   <h4 className="white-text margin-bottom-20">FOLLOW US</h4>
                                   <ul>
                                        <li className="margin-bottom-20">
                                             <a rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank" className="white-text">Linked In</a>
                                        </li>
                                        <li className="margin-bottom-20">
                                             <a rel="noopener noreferrer" href="https://www.facebook.com" target="_blank" className="white-text">Facebook</a>
                                        </li>
                                        <li className="margin-bottom-20">
                                             <a rel="noopener noreferrer" href="https://www.twitter.com" target="_blank" className="white-text">Twitter</a>
                                        </li>
                                   </ul>
                              </div> */}
                    </section>
               </div>
          </footer>
     );
}
export default Footer;