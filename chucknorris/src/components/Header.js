import React, { Component } from 'react';
import CnLogoWithName from './asset/CN-logo-with-name.svg'
import info from './asset/info.svg'
import facebook from './asset/facebook.svg'
import GITHUBLOGO from './asset/github.svg'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Header extends Component {

    constructor(props) {
      super(props)
      this.state = { modal: false }
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    render() {

    const barStyle = {
      backgroundColor: 'White',
      height: 80
    }

    return (
      <div className="container-fluid" style={barStyle}>
        <div class="d-flex flex-row justify-content-between my-flex-container">
          <div class="p-2 my-flex-item align-self-center">
            <img src={ info } onClick={this.toggle} height="30"  width="auto" alt=""/>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>DEVELOPER INFORMATION</ModalHeader>
              <ModalBody>
                Tharit Pongsaneh <br/>
                Contact Information : yo.tharit@hotmail.com <br/>
                Moblie Number : 0832536002
              </ModalBody>
              <ModalFooter>
                <div class="d-flex align-items-start align-self-center">
                  <a href="https://www.facebook.com/yotharit">
                    <img src={ facebook } height="20"  width="auto" alt=""/>
                  </a>
                  <a href="https://github.com/yotharit">
                    <img src={ GITHUBLOGO } height="20"  width="30" alt=""/>
                  </a>
                </div>
              </ModalFooter>
            </Modal>
          </div>
          <div class="p-2 my-flex-item" align-self-center>
            <img src={ CnLogoWithName } height="60"  width="80" alt=""/>
          </div>
          <div class="p-2 my-flex-item">
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
