import React, {useEffect} from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Products_Services, Contact } from "./Pages";

import GridOverlay from './Components/GridOverlay';

import './Assets/CSS/app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <GridOverlay /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products_services" component={Products_Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
