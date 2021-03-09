import React from 'react'

function SectionTitle({text}){
     return(
          <div className="section-title">
               <h2 className="h2-text">{text}</h2>
               <div className="underline"></div>
          </div>
     );
}
export default SectionTitle;