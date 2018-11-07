import React, {Component} from 'react';
import Document from '../document';
import LicenseNumberTextField from '../license-number-text-field';
import FirstNameTextField from '../first-name-text-field';
import LastNameTextField from '../last-name-text-field';
import AddressTextField from '../address-text-field';
import './index.scss';

class Questions extends Component {
  render() {
    const className = "questions "+this.props.className;
    return (
      <div className={className}>
        <div className="questions__title mdc-typography--headline6">Identification</div>
        <div className="questions__paragraph mdc-typography--body2">What identification documents have you brought with you?</div>
        <div className="questions__documents">
          <Document name="Drivers License" id="drivers-license"/>
          <Document name="ID card" id="id-card"/>
          <Document name="Social Security Card" id="social-security-card"/>
          <Document name="Work Permit" id="work-permit"/>
          <Document name="Visa" id="visa"/>
        </div>
        <div className="questions__document-name  mdc-typography--headline6">Drivers License</div>
        <LicenseNumberTextField className="questions__license-number"/>
        <div className="questions__name-form">
          <FirstNameTextField className="questions__first-name"/>
          <LastNameTextField  className="questions__last-name"/>
        </div>
        <AddressTextField className="questions__address"/>
      </div>
    );
  }
}

export default Questions;
