import React, {Component} from 'react';
import './typography/global-classnames.scss';
import SessionProgress from './session-progress';
import Form from './form';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SessionProgress/>
        <Form/>
      </div>
    );
  }
}

export default App;
