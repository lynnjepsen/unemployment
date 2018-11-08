import React, {Component} from 'react';
import './typography/global-classnames.scss';
import SessionProgress from './session-progress';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SessionProgress/>
      </div>
    );
  }
}

export default App;
