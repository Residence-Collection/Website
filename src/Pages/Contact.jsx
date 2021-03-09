import React from 'react';

import Layout from '../Templates/Layout';
import { Main, SectionTitle } from '../Components';
import { waitForElementToBeRemoved } from '@testing-library/react';

function Home(props) {
     return (
          <Layout>
               <Main>
                    <section className="a-section company-details-container">
                         <div className="a-section-inner">
                              <h1 className="h1-text text-align-center margin-bottom-10">Get in touch with us</h1>

                              <p className="p-text text-align-center margin-bottom-70">Send us an email, give us a phone call or just swing by and see us.</p>

                              <section className="company-details margin-bottom-40">
                                   <address className="company-address">
                                        <ul>
                                             <li  className="p-text margin-bottom-20">
                                                  <span>
                                                       <i className="fas fa-map-marker-alt"></i>
                                                  </span>
                                                  <p>
                                                       103 Block A Commercial Broadway, Phase 8, DHA Cantt, 54810.
                                                  <br />Lahore, Pakistan.
                                                  </p>
                                             </li>

                                             <li className="p-text margin-bottom-20">
                                                  <span>
                                                       <i className="fas fa-envelope"></i>
                                                  </span>
                                                  <a href="mailto:contactus@residencecollection.co" className="">contactus@residencecollection.com</a>
                                             </li>

                                             <li className="p-text margin-bottom-20">
                                                  <span>
                                                       <i className="fas fa-phone-alt"></i>
                                                  </span>
                                                  <ul>
                                                       <li>
                                                            <a href="tel:+924237135861" className="margin-bottom-20">+92 (42) 3713-5861</a>
                                                       </li>
                                                       <li>
                                                            <a href="tel:+924237135862" className="">+92 (42) 3713-5862</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                        </ul>
                                   </address>

                                   <div className="img-container">
                                        <img src="https://via.placeholder.com/500X300" alt="" />
                                   </div>
                              </section>
                         </div>

                         <section className="map-container">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.8734882287447!2d74.42667598270751!3d31.503637959459763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f40f5b0b691%3A0x8396e83b27539c0!2sBlock%20A%20DHA%20Phase%208%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1614630126832!5m2!1sen!2sus" allowfullscreen="true" loading="lazy" style={{ background: "#b8b8b8", display: "block" }}></iframe>
                         </section>
                    </section>



               </Main>
          </Layout>
     );
}
export default Home;