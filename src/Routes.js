import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Ex01 from './exercises/Ex01';
import Ex02 from './exercises/Ex02';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/exercise01" component={Ex01} />
        <Route path="/exercise02" component={Ex02} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
