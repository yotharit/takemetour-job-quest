import React, { Component } from 'react';
import CNWORD from './asset/CN-WORD.svg'
import GITHUBLOGO from './asset/github.svg'


class Footer extends Component {
  render() {
    const barStyle = {
      backgroundColor: 'White',
    }

    return (
      <div className="container-fluid" style={barStyle}>
        <div class="d-flex flex-row justify-content-between my-flex-container">
          <div class="p-2 my-flex-item">
          </div>
          <div class="p-2 my-flex-item">
              <img src={ CNWORD } height="20"  width="80" alt=""/>
          </div>
          <div class="p-2 my-flex-item">
            <a href="https://github.com/yotharit">
              <img src={ GITHUBLOGO } height="20"  width="30" alt=""/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
