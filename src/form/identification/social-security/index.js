import React, {Component} from 'react';
import TextField from '../../text-field';
import './index.scss';

class SocialSecurity extends Component {

  render() {
    return (
      <div className="social-security">
        <TextField className="social-security__number"
          label="SSN"
          question="What is your Social Security Number?"/>
      </div>
    );
  }
}

export default SocialSecurity;
