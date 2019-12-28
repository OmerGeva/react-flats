import React, { Component } from 'react';

class Marker extends Component {
  handleClick = (event) => {
    this.props.selectFlat(this.props.flat);
  }
  render() {
    return (
      <div className="marker" onClick={this.handleClick}>
      </div>
    );
  }
}

export default Marker;
