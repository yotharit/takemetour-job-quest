import React, { Component } from 'react';
import CnLogoWithName from './asset/CN-logo-with-name.svg'


class Header extends Component {

    showSettings (event) {
      event.preventDefault();
    }

    render() {

    const barStyle = {
      backgroundColor: 'White',
    }

    return (
      <div className="container-fluid" style={barStyle}>
        <div class="d-flex flex-row justify-content-center my-flex-container">
            <img src={ CnLogoWithName } height="80"  width="80" alt=""/>
        </div>
      </div>
    );
  }
}
export default Header;
