import React from 'react';


function AdvantageCard({icon, heading, description}) {
     return (
          <div className="advantage">
               <div className="icon-container">
                    <img src={icon} alt=""/>
               </div>

               <h3 className="h3-text">{heading}</h3>
               <p className="p-text disp-none-on-sm disp-on-med">{description}</p>
          </div>
     );
}
export default AdvantageCard;