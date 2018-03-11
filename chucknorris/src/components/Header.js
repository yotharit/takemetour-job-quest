import React, { Component } from 'react';
import CnLogoWithName from './asset/CN-logo-with-name.svg'
import { stack as Menu } from 'react-burger-menu'


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
        <div class="d-flex flex-row justify-content-between my-flex-container">
          <div class="p-2 my-flex-item">
            <Menu style>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
          </div>
          <div class="p-2 my-flex-item">
            <img src={ CnLogoWithName } height="80"  width="80" alt=""/>
          </div>
          <div class="p-2 my-flex-item">
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
