import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './app';
import Eventbrite from './results/components/eventbrite';
import Selected from './selected-event/components/selected-event';
import Data from 'json!./results/stores/eventbrite.json';

const musicEvents = Data.events;
const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    user: {},
    search: {
      city: null,
      startDate: null,
      endDate: null
    },
    results: [musicEvents[2]]
  }
});
const routes = <Route component={App}>
  <Route path="/" component={Eventbrite} />
  <Route path="/selected-event" component={Selected} />

</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);