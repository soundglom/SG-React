import {expect} from 'chai';
import {List, Map} from 'immutable';
import Data from 'json!/../../src/results/stores/eventbrite.json';

const musicEventsData = Data.events;

const firstEventTitle = musicEventsData[1].name.text;
const secondEventTitle = musicEventsData[2].name.text;
const thirdEventTitle = musicEventsData[3].name.text;

describe('immutability', () => {

  // ...

  describe('a tree', () => {

    function addMusicEvent(currentState, mEvent) {
      return currentState.set(
        'mEvent',
        currentState.get('mEvent').push(mEvent)
      );
    }

    it('is immutable', () => {
      let state = Map({
        musicEvents: List.of(firstEventTitle, secondEventTitle)
      });
      let nextState = addMusicEvent(state, thirdEventTitle);

      expect(nextState).to.equal(Map({
        musicEventTitles: List.of(
          firstEventTitle,
          secondEventTitle,
          thirdEventTitle
        )
      }));
      expect(state).to.equal(Map({
        musicEventTitles: List.of(
          firstEventTitle,
          secondEventTitle          
        ),
      }));
    });

  });

});