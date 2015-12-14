import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './app';
import Eventbrite from './results/components/eventbrite';
import Data from 'json!./results/stores/eventbrite.json';

const event = Data.events;


const routes = <Route component={App}>
  <Route path="/" component={Eventbrite} />
</Route>;

ReactDOM.render(
  <Eventbrite event={event}/>,
  document.getElementById('app')
);