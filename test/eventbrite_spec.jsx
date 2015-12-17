import React from 'react/addons';
import {List} from 'immutable';
import Eventbrite from './../src/results/components/eventbrite';
import {expect} from 'chai';
import Data from 'json!/../../src/results/stores/eventbrite.json';


const {renderIntoDocument, scryRenderedDOMComponentsWithTag, findRenderedDOMComponentWithClass, findRenderedDOMComponentWithTag, Simulate} = React.addons.TestUtils;


describe('Eventbrite events', () => {
  
  it('renders the titles of 2 events', () =>{    
    const testEvents = List.of(Data.events[1], Data.events[2]);

    let selected;

    const selectEvent = (event) => selected => event;
    
    const component = renderIntoDocument(
      <Eventbrite 
        event={testEvents._tail.array} 
        selectEvent={selectEvent}
      />
    );

    const divisions = scryRenderedDOMComponentsWithTag(component, 'div');
    const eventImage = scryRenderedDOMComponentsWithTag(component, 'img');
    // const divisions1 = findRenderedDOMComponentWithTag(component, 'div');
    // const eventInfo = findRenderedDOMComponentWithClass(component, 'eventInfo');

    Simulate.click(divisions[0].children);

    console.dir(testEvents);
    // console.log('Div elements: ', eventImage);
    // console.log('Eventinfo elements: ', eventInfo);


    // console.log("Logging titles", titles);
    // // console.log("Logging eventImage", eventImage);
    // // expect(eventImage.length).to.equal(2);
    expect(divisions.length).to.equal(2);
    // expect(titles.length).to.equal(5);
    // expect(divisions[0].children[0].tagName).to.equal('IMG');
    // expect(titles[0].children[1].children[0].tagName).to.equal('H2');
    // expect(titles[0].children[1].children[1].tagName).to.equal('P');


    // expect(titles[0].children[0].).to.equal('IMG');
    // expect(titles[1].children[1].tagName).to.equal('IMG');
  })
});