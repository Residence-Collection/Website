import React from 'react';
import CTA from './CTA';

import Hero from '../Assets/Images/hero.jpg';
import ProductsHero from '../Assets/Images/products-hero.jpg';

function HeroSection({ heading, subHeading, ctaText, img}) {

     return (
          <section className="hero-section" style={(img === "hero") ? {backgroundImage: `url(${Hero})`} : {backgroundImage: `url(${ProductsHero})`}}>
               <div className="hero-section-inner">
                    <section className="hero-content flex-column-center-xy">
                         <h1 className="h1-text hero-text text-align-center white-text margin-bottom-10">{heading}</h1>

                         {(subHeading) ? <p className={(!heading) ? "products-hero-text margin-bottom-20" : "p-hero-text text-align-center white-text margin-bottom-20"}>{subHeading}</p> : null}

                         {(ctaText) ? <CTA text="See our Products & Services" to="/products_services" /> : null}
                    </section>
               </div>
          </section>
     );
}
export default HeroSection;