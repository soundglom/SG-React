import React from 'react';
import ReactDOM from 'react-dom';
import Data from 'json!./results/stores/eventbrite.json'

var EventBriteEvents = React.createClass({
  getInitialState: function() {
    return {
      events: Data.events
    }
  }, 

  render: function() {
    // console.log(Data);
    console.log(this.state);
    return (
      <div>
      {this.state.events.map(function(event){
        return <h2>{event.name.text}</h2>
      })}
      </div>

    )
  }
})

ReactDOM.render(
  <EventBriteEvents />,
  document.getElementById('app')
);