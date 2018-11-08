import React, {Component} from 'react';
import DriversLicense from './drivers-license';
import SocialSecurity from './social-security';
import './index.scss';

class Identification extends Component {
  render() {
    return (
      <div className="identification">
        <div className="identification__title">Drivers License</div>
        <DriversLicense/>
      <div className="identification__title">Social Security</div>
        <SocialSecurity/>
      </div>
    );
  }
}

export default Identification;
