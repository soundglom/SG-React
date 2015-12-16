import React from 'react/addons';
import {List} from 'immutable';
import Eventbrite from './../src/results/components/eventbrite';
import {expect} from 'chai';
import Data from 'json!/../../src/results/stores/eventbrite.json';


const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;
const testEvents = List.of(Data.events[1], Data.events[2]);

// console.log(events);
describe('Eventbrite', () => {
  
  it('renders the titles of 2 events', () =>{    

    let selected;

    const selectEvent = (event) => selected => event;
    
    const component = renderIntoDocument(
      <Eventbrite 
        event={testEvents} 
        selectEvent={selectEvent}
      />
    );

    // const eventImage = scryRenderedDOMComponentsWithTag(component, 'img');
    const titles = scryRenderedDOMComponentsWithTag(component, 'div');
    Simulate.click(titles[0].children);

    console.log(selected);


    // console.log("Logging titles", titles);
    // // console.log("Logging eventImage", eventImage);
    // // expect(eventImage.length).to.equal(2);
    // // expect(titles.length).to.equal(2);
    // expect(titles.length).to.equal(5);
    // expect(titles[0].children[0].tagName).to.equal('IMG');
    // expect(titles[0].children[1].children[0].tagName).to.equal('H2');
    // expect(titles[0].children[1].children[1].tagName).to.equal('P');


    // expect(titles[0].children[0].).to.equal('IMG');
    // expect(titles[1].children[1].tagName).to.equal('IMG');
  })
});