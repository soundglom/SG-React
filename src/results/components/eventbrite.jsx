import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {
      eventBriteEvent: null
    }
  },
  handleClick: function(event) {
    console.log("This event", event);
    // this.setState({eventBriteEvent: this.state.event});
  },
  getEvent: function() {
    // console.log('this.props', this.props);
    return this.props.events   || [];
  },  
  render: function() {
    return (<div className="eventbrite-data">
      {this.getEvent().map(event =>
        <div key={event.id} onClick={this.handleClick.bind(null, event)}>
          <img className="eventImage" src={event.logo.url} />
          <div className="eventInfo">
            <h2 className="eventTitle">{event.name.text}</h2>
            <p className="eventDescr">{event.description.text}</p>
          </div>
        </div>
    )}
    </div>);
  }
});