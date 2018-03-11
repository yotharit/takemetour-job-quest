import React, { Component } from 'react';
import CHUCKCARD from './asset/chuckCard.jpg'
import CHUCKIMAGE from './asset/cardImage.jpg'
import CHUCK from './asset/CHUCK-NORRIS-BW.png'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Modal, ModalHeader, ModalBody, ModalFooter , UncontrolledTooltip } from 'reactstrap';

class Left extends Component {

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
    return (
      <div className="container-fluid">
        <img src={ CHUCK } onClick={this.toggle}  alt="Chuck Norris" width='auto' height='700' id="ChuckToolTip"/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <img src={CHUCKCARD} height='auto' width='400' alt=""/>
          </ModalHeader>
          <ModalBody>
            Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter.
            After serving in the United States Air Force, he competed as a martial artist who won many championships, and has since
            founded his own school of fighting, Chun Kuk Do.
          </ModalBody>
          <ModalFooter>
            My Website
            <div class="d-flex align-items-center align-self-center">
              <a href="https://chucknorris.com/">
                <img src={CHUCKIMAGE} className="rounded-circle" height='40' width='auto' alt=""/>
              </a>
            </div>
          </ModalFooter>
        </Modal>
        <UncontrolledTooltip placement="top" target="ChuckToolTip">
          Hey! I'm Chuck Norris. Click Me!!
        </UncontrolledTooltip>
      </div>
    );
  }
}
export default Left;
