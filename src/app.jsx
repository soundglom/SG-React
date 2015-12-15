import React from 'react';
import {List} from 'immutable';
import EBData from 'json!./results/stores/eventbrite.json';


const events = List.of(EBData.events.map(function(event){
  event.logo ? event.logo.url : event.logo = {url: 'http://goo.gl/W9RF2D'}
  return event;
}));

console.log('Logging JSON Mapped', events);

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {events: events});
  }
});