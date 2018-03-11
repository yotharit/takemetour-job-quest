import React, { Component } from 'react';
import Background from './asset/BG.jpg'
import { Row, Col } from 'reactstrap';
import Left from './Left'
import Right from './Right'



class Main extends Component {
  render() {

    const mainStyle = {
      backgroundImage: `url(${Background})`,
      height: 700,
    }


    return (
      <div className="container-fluid" style={mainStyle}>
        <Row>
          <Col xs="6">
            <Left />
          </Col>
          <Col xs="6">
            <Right />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Main;
