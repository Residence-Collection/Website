import React, { useEffect } from 'react';

import Layout from '../Templates/Layout';
import { Main, HeroSection, ServiceSteps, SectionTitle, SectionWithCTA, ProductCard } from '../Components';

import AdoLogo from '../Assets/Images/adopenLogo.svg';
import KommerlingLogo from '../Assets/Images/kommerlingLogo.svg';

import Casement from '../Assets/Images/casement.jpg';
import TiltTurn from '../Assets/Images/tilt-turn.jpg';
import Sliding from '../Assets/Images/sliding.jpg';
import Folding from '../Assets/Images/folding.jpg';

function Products_Services(props) {

     useEffect(() => {
          window.scrollTo(0, 0);
          return null;
     }, []);

     return (
          <Layout>
               <Main>
                    <section id="products" className="a-section">
                         <div className="a-section-inner">
                              <SectionTitle text="Our Product Range" />

                              <section className="products">
                                   <ProductCard img={Casement} imgAlt="Image of a casement window." heading="Casement" description="A window that is permanently mounted into a space, moving inwards and outwards with a mechanical crank. They are used singly or in pairs within a common frame, in which case they are hinged on the outside." />

                                   <ProductCard img={TiltTurn} imgAlt="Image of a Tilt & Turn window." heading="Tilt & Turn" description="A dual-functioning window/door that provides ventalition by tilting inwards, which is draft-free and rain protected. In the turn position it opens just like a casement window." />

                                   <ProductCard img={Sliding} imgAlt="Image of a Tilt & Slide window." heading="Tilt & Slide" description="An alternative to to the 'Tilt & Turn'. Instead of opening like a casement window, it will slide along a guide rail." />

                                   <ProductCard img={Folding} imgAlt="Image of a Bi-fold window." heading="Bi-Fold" description="These windows/doors consists of 2-4 equal panels hinged together so that it opens up to any space by folding the panels against each other." />
                              </section>
                         </div>
                    </section>

                    <section className="a-section">
                         <div className="a-section-inner">
                              <SectionTitle text="Our UPVC Providers" />
                              <div className="logos-container">
                                   <div className="a-logo">
                                        <img src={AdoLogo} alt="Ado Group Logo" />
                                   </div>

                                   <div className="a-logo">
                                        <img src={KommerlingLogo} alt="Kommerling Logo" />
                                   </div>
                              </div>
                         </div>
                    </section>

                    <section id="services" className="a-section">
                         <div className="a-section-inner">
                              <SectionTitle text="Our Services" />
                              <ServiceSteps />
                         </div>
                    </section>
               </Main>

               <SectionWithCTA h1_text={`Interested in Collaborating?`} p_text="We lay great emphasis on personal commitment, comprehensive workmanship &#x26; your satisfaction." cta_text="Lets Talk!" cta_link="/Contact" />
          </Layout>
     );
}
export default Products_Services;