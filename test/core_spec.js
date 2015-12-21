import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '..src/core';
import Data from 'json!/../../src/results/stores/eventbrite.json';

const musicEventsData = Data.events;

const firstEventTitle = musicEventsData[1].name.text;
const secondEventTitle = musicEventsData[2].name.text;
const thirdEventTitle = musicEventsData[3].name.text;

import {setEntries} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of(firstEventTitle, secondEventTitle);
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(firstEventTitle, secondEventTitle)
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = [firstEventTitle, secondEventTitle];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(firstEventTitle, secondEventTitle)
      }));
    });

  });

  describe('next', () => {

    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of(firstEventTitle, secondEventTitle, thirdEventTitle)
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        search: Map({
          eventTitles: List.of(firstEventTitle, secondEventTitle)
        }),
        entries: List.of(thirdEventTitle)
      }));
    });

  });

});