import React, { Component } from 'react';
import CHUCK from './asset/CHUCK-NORRIS-BW.png'

class Left extends Component {

  render() {
    return (
      <div>
        <img src={ CHUCK } alt="" width='auto' height='700'/>
      </div>
    );
  }
}
export default Left;
