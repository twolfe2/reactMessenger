import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Messenger from './components/messenger/Messenger';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Messenger} />
    
  </Route>

  );
