import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Checkout from '../pages/checkout';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" exact component={Checkout} />
    </Switch>
  );
};

export default AppRoutes;
