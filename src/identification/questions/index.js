import React, {Component} from 'react';
import Document from '../document';
import DriversLicense from '../drivers-license';
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
        <DriversLicense/>
      </div>
    );
  }
}

export default Questions;
