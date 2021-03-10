import React from 'react';
import CTA from './CTA';

function SectionWithCTA({h1_text, p_text, cta_text, cta_link}) {
     return (
          <section className="section-with-cta">
               <div className="section-with-cta-inner">
                    <section className="text-section">
                         <h1>{h1_text}</h1>

                         <p>{p_text}</p>
                    </section>

                    <div style={{gridColumn: "span 4", alignSelf: "end", justifySelf: "center"}}>
                         <CTA text={cta_text} to={cta_link} />
                    </div>
               </div>
          </section>
     );
}
export default SectionWithCTA;