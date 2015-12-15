import React from 'react/addons';
import Eventbrite from './../src/results/components/eventbrite';
import {expect} from 'chai';
import Data from 'json!/../../src/results/stores/eventbrite.json';


const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;
const testEvents = [Data.events[1], Data.events[2]];

// console.log(events);
describe('Eventbrite', () => {
  
  it('renders the titles of 2 events', () =>{    
    const component = renderIntoDocument(
      <Eventbrite event={testEvents} />
    );

    const eventImage = scryRenderedDOMComponentsWithTag(component, 'img');
    const titles = scryRenderedDOMComponentsWithTag(component, 'h1');

    // console.log("Logging titles", titles);
    // console.log("Logging eventImage", eventImage);
    expect(eventImage.length).to.equal(2);
    // expect(titles.length).to.equal(2);
  })
});