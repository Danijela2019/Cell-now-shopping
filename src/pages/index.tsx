import React from "react";
import {Switch,Route} from "react-router-dom";

import Home from './home'
import Checkout from './checkout'
import Phones from './phones'
import Accesories from "./accessories/AccessoriesItems";

const Routes = () => {
  return (
      <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/phones' component={Phones} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/accessories' component={Accesories} />
      </Switch>
  );
}

export default Routes;