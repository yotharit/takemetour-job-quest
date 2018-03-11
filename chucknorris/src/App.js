import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}


class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="test" style={styles.fadeIn}>
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </StyleRoot>

    );
  }
}
export default App;
