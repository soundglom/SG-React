import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './app';
import Eventbrite from './results/components/eventbrite';
import Selected from './selected-event/components/selected-event';
import Data from 'json!./results/stores/eventbrite.json';

const routes = <Route component={App}>
  <Route path="/" component={Eventbrite} />
  <Route path="/selected-event" component={Selected} />

</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);