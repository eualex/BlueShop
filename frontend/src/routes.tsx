import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/SingInSingUp';
import Main from './pages/Main';
import Product from './pages/Product';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;