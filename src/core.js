import {List, Map} from 'immutable';
// import EBData from 'json!./src/results/stores/eventbrite.json';
console.log('I\'m in!');

export function searchEvents(state = {}, searchCriteria) {
  return state.set('searchCriteria', searchCriteria);
}

export function eventResults(state) {
  const searchObj = state.get('searchCriteria');
  console.log('Search object: ', searchObj);
  return searchObj /*return API results*/;
}

export function selectEvent(state, musicEvent) {
  return { state, musicEvent };
}