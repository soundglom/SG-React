import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './app';
import Eventbrite from './results/components/eventbrite';
import Data from 'json!./results/stores/eventbrite.json';

const routes = <Route component={App}>
  <Route path="/" component={Eventbrite} />

</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);