import React from 'react';

function AStep({ stepNum, stepHeading, stepDescription }) {
     return (
          <div className="a-step">
               <div className="step-num-container">
                    <div className="step-num">
                         <h1>{stepNum}</h1>
                    </div>
               </div>

               <section className="step-data">
                    <h3 className="step-heading">{stepHeading}</h3>
                    <p className="step-description">{stepDescription}</p>
               </section>

               <div className="line"></div>
          </div>
     );
}
export default AStep;