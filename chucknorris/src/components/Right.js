import React, { Component } from 'react';
import logo from './asset/CN-logo.svg'

import arrow from './asset/up-arrow-angle.svg'

const urlJoke = 'http://api.icndb.com/jokes/';


class Right extends Component {

  constructor(props){
    super(props);
    this.state = { data: [],joke:''};
    this._getRandomJoke = this.getRandomJoke.bind(this);
  }

  componentDidMount() {
    fetch(urlJoke)
    .then(result => {
      return result.json()
    }).then(data => {
      let get = data.value
      this.setState({data: get,joke:get[0].joke+''})
    })
  }



  getRandomJoke() {
    let rand = this.state.data[Math.floor(Math.random()*this.state.data.length)].joke
    this.setState({joke: rand+''})
  }

  render() {

    const containerStyle = {
      marginTop: '100px'
    }

    const logoStyle = {
      height: '50',
      align: '50%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
      marginTop: 20
    }

    const quoteStyle = {
      marginTop: 20
    }

    const arrowStyle = {
      marginTop: 20
    }

    const buttonStyle = {
      marginTop: 20
    }

    const { joke } = this.state
      return(
        <div className="container-fluid" style={containerStyle}>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center">
                <div className="card p-3 text-center w-75">
                  <img className="card-img-top" src={logo} alt="Card image cap" style={logoStyle}/>
                  <blockquote className="blockquote mb-0">
                    <h1 style={quoteStyle}>''</h1>
                    <p>{ joke }</p>
                    <footer className="blockquote-footer">
                    <small className="text-muted">
                      Himself amazing <cite title="Source Title">Chuck Norris</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="d-flex justify-content-center" style={arrowStyle}>
              <img src={arrow} width="auto" height="30" alt=""/>
            </div>
            <div class="d-flex justify-content-center" style={buttonStyle}>
              <button
                onClick={this._getRandomJoke}
                type="button" className="btn btn-dark">
                HEAR CHUCK NORRIS
              </button>
            </div>
          </div>
        </div>
      );
  }
}

export default Right;
