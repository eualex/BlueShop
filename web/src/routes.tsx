import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Landing';
import Login from './pages/User';
import Main from './pages/Main';
import RegisterProduct from './pages/RegisterProduct';
import ChooseCategory from './pages/Category';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/category" component={ChooseCategory} />
        <Route path="/register-product" component={RegisterProduct} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;