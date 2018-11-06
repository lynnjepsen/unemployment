import React, {Component} from 'react';
import logo from './logo.svg';
import './index.scss';

class Logo extends Component {
  render() {
    return (
      <img src={logo} className="logo" alt="logo" />
    );
  }
}

export default Logo;
