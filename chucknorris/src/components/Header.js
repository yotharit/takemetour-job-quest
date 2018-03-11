import React, { Component } from 'react';
import CnLogoWithName from './asset/CN-logo-with-name.svg'


class Header extends Component {
  render() {

    const barStyle = {
      backgroundColor: 'White',
    }

    return (
      <div className="container-fluid" style={barStyle}>
        <div className="d-flex justify-content-center">
          <img src={ CnLogoWithName } height="80"  width="80" alt=""/>
        </div>
      </div>
    );
  }
}
export default Header;
