import React, {Component} from 'react';
import LicenseNumberTextField from './license-number-text-field';
import FirstNameTextField from './first-name-text-field';
import LastNameTextField from './last-name-text-field';
import AddressTextField from './address-text-field';
import './index.scss';

class DriversLicense extends Component {

  render() {
    return (
      <div className="drivers-license">
        <LicenseNumberTextField className="drivers-license__number"/>
        <div className="drivers-license__name-form">
          <FirstNameTextField className="drivers-license__first-name"/>
          <LastNameTextField  className="drivers-license__last-name"/>
        </div>
        <AddressTextField className="drivers-license__address"/>
      </div>
    );
  }
}

export default DriversLicense;
