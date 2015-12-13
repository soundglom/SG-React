import React from 'react';
import Data from 'json!../stores/eventbrite.json';


const musicEvents = Data;

console.log('musicEvents ', musicEvents);

export default React.createClass({
  getInitialState: function() {
    return {
      events: musicEvents
    };
  }, 

  render: function() {
    // console.log(Data);
    console.log(this.state);
    return (
      <div>
      {this.state.events.map(function(event){
        return <div key={event.id}>
          <img src={event.logo === null ? 'https://goo.gl/K2gGp7}' : event.logo.url}/>
          
          <div>
          <h2 >{event.name.text}</h2>
          <p>{event.description.text}</p>
          </div>

        </div>



      })}
      </div>

    )
  }
});