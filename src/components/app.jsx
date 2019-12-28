import React, { Component } from 'react';
import flats from '../data/flats';
import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null
    };
  }

  selectedFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} selectedFlat={this.state.selectedFlat} />
        <div className="map-container"><Map flats={flats} selectFlat={this.selectedFlat} /></div>
      </div>
    );
  }
}

export default App;
