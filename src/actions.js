export const SEARCH = 'SEARCH';
export const GET_API_RESULTS = 'GET_API_RESULTS';
// export const RENDER_API_RESULTS = 'RENDER_API_RESULTS';
export const SELECT_EVENT = 'SELECT_EVENT';

export const filters = {
  CITY: 'CITY',
  STARTDATE: 'STARTDATE',
  ENDDATE: 'ENDDATE',
  GENRE: 'GENRE',
  ARTIST: 'ARTIST',
  VENUE: 'VENUE'
}

export function search(searchObj = {}) {
  return { type: SEARCH, searchObj};
}

export function getAPIResults(apiResults) {
  return {type: GET_API_RESULTS, apiResults};
}

export function selectEvent(event) {
  return {type: SELECT_EVENT, event};
}
