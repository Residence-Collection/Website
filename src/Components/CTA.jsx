import React from 'react'

function CTA({text, to}){
     return(
          <a href={to} className="cta p-text">{text}</a>
     );
}
export default CTA;