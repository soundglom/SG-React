import { createStore } from 'redux';
import { searchEvents, selectEvent } from './core';

function setState(state, newState) {
  return state.merge(newState);
}


export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SEARCH':
      return searchEvents(state, action.search);
    case 'SELECT_EVENT':
      return selectEvent;
  }
  return state;
};

