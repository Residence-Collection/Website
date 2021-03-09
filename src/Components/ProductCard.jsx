import React from 'react';

function ProductCard({img, imgAlt, heading, description}) {
     return (
          <div className="product-card">
               <div className="product-img">
                    <img src={img} alt={imgAlt} className="round-border" />
               </div>

               <section className="product-data">
                    <h3 className="h3-text product-name">{heading}</h3>
                    <p className="p-text product-description">{description}</p>
               </section>
          </div>
     );
}
export default ProductCard;