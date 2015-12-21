import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import EBData from 'json!./../../results/stores/eventbrite.json';
import Eventbrite from '../../results/components/eventbrite';

console.log('Selected event test: ', EBData.events[1].name);
var selected = EBData.events[1];

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return  <div ref="selectedEBEvent" className="selectedEvent"> 
      <img className="selectedEventImage" src={selected.logo.url} />
      <div className="selectedEventInfo">
        <h2>{selected.name.text}</h2>
        <p>{selected.description.text}</p>
      </div>
    </div>
  }

});

function mapStateToProps(state) {
  return {
    events: state.getIn(['eventbrite', 'events']),
  };
}

export const SelectedEventContainer = connect(mapStateToProps)(selected);