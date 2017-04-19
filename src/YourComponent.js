import React, { Component } from 'react';
import MapComponent from './MapComponent';

/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
        <MapComponent/>
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

