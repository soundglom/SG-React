import React from 'react';
import {List} from 'immutable';
import EBData from 'json!./results/stores/eventbrite.json';


const events = EBData.events.map(function(event){
  event.logo ? event.logo.url : event.logo = {url: 'http://goo.gl/W9RF2D'}
  // console.log(event.logo.url);
  return event;
});
// const events = List.of(EBData.events.map(function(event){
//   event.logo ? event.logo.url : event.logo = {url: 'http://goo.gl/W9RF2D'}
//   // console.log(event.logo.url);
//   return event;
// }));

// console.log('Logging JSON Mapped', events._tail.array[0]);

export default React.createClass({
  render: function() {
    console
    return React.cloneElement(this.props.children, {events: events});
  }
});