import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Ex01 from './exercises/Ex01';
import Ex02 from './exercises/Ex02';
import Ex03 from './exercises/Ex03/Ex03';
import Ex04 from './exercises/Ex04/Ex04';
import Ex05 from './exercises/Ex05/Ex05';
import Ex06 from './exercises/Ex06/Ex06';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/exercise01" component={Ex01} />
        <Route path="/exercise02" component={Ex02} />
        <Route path="/exercise03" component={Ex03} />
        <Route path="/exercise04" component={Ex04} />
        <Route path="/exercise05" component={Ex05} />
        <Route path="/exercise06" component={Ex06} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
