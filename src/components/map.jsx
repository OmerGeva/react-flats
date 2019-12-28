import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.341225
    },
    zoom: 13
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.flats.map((flat, index) => <Marker lat={flat.lat} lng={flat.lng} name={flat.name} img={flat.imageUrl} flat={flat} key={index} selectFlat={this.props.selectFlat}/>)}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
