import React from 'react';
import EBData from 'json!./../../results/stores/eventbrite.json';

console.log('Selected event test: ', EBData.events[1].name);
var selected = EBData.events[1];

export default React.createClass({
  render: function() {
    return  <div className="selectedEvent"> 
      <img className="selectedEventImage" src={selected.logo.url} />
      <div className="selectedEventInfo">
        <h2>{selected.name.text}</h2>
        <p>{selected.description.text}</p>
      </div>
    </div>
  }

});