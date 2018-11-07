import React, {Component} from 'react';
import Questions from './questions';
import Navigator from '../navigator';
import './index.scss';

class Identification extends Component {
  render() {
    return (
      <div className="identification">
        <Questions className="identification__questions"/>
        <Navigator className="identification__navigator"/>
      </div>
    );
  }
}

export default Identification;
