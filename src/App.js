import React, {Component} from 'react';
import SessionProgress from './session-progress';
import Identification from './identification';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SessionProgress/>
        <Identification/>
      </div>
    );
  }
}

export default App;
