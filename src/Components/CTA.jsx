import React from 'react';
import { Link } from 'react-router-dom';

function CTA({text, to}){
     return(
          <Link to={to} className="cta p-text">{text}</Link>
          
     );
}
export default CTA;