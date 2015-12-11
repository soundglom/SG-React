import React from 'react';
import ReactDOM from 'react-dom';
import Data from 'json!./results/stores/eventbrite.json'

var EventBriteEvents = React.createClass({
  getInitialState: function() {
    return Data;
  }, 

  render: function() {
    console.log(Data);
    return (
      <div>{this.state.data}</div>

    )
  }
})

ReactDOM.render(
  <EventBriteEvents />,
  document.getElementById('app')
);