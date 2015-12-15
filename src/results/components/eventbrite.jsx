import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


// const event = Data.events.map(function(event){
//   return event;
// });


export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {
      eventBriteEvent: null
    }
  },
  handleClick: function(event) {
    // console.log("Click handler", event);
    console.log("This event", event);
    // this.setState({eventBriteEvent: this.state.event});
    // console.log(this.props);
  },
  getEvent: function() {
    console.log(this.props);
    return this.props.event || [];
  },
  
  render: function() {
    return (<div className="eventbrite-data">
      {this.getEvent().map(event =>
        <div key={event.id} onClick={this.handleClick.bind(null, event)}>
          <img src={event.logo.url} />
          <div>
            <h2 >{event.name.text}</h2>
            <p>{event.description.text}</p>
          </div>
        </div>
    )}
    </div>);
  },
  // render: function() {
  //   return (
  //     <div onClick={this.handleClick}>
  //     {this.state.events.map(function(event){
  //       return <div key={event.id} >
  //         <img src={event.logo === null ? 'http://goo.gl/W9RF2D' : event.logo.url}/>
  //         <div>
  //           <h2 >{event.name.text}</h2>
  //           <p>{event.description.text}</p>
  //         </div>
  //       </div>
  //     })}
  //     </div>

  //   )
  // }
});