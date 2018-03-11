import React, { Component } from 'react';
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

    const { joke } = this.state
      return(
        <div>
          <p>{ joke }</p>
          <button
            onClick={this._getRandomJoke}
            type="button" className="btn btn-light"
          >
            IT'S MAGIC!
          </button>
        </div>
      );
  }
}

export default Right;
