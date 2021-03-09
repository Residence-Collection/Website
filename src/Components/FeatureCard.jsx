import React from 'react'

function FeatureCard({ img, imgAlt, heading, description }) {
     return (
          <div className="a-feature">
               <img src={img} alt="" className="round-border"/>

               <div>
                    <h3 className="h3-text">{heading}</h3>
                    <p className="p-text">{description}</p>
               </div>
          </div>
     );
}
export default FeatureCard;