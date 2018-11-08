import React, {Component} from 'react';
import TextField from '../../text-field';
import './index.scss';

class DriversLicense extends Component {

  render() {
    return (
      <div className="drivers-license">
        <TextField className="drivers-license__birth-date"
          label="Birth Date (MM / DD / YYYY)"
          question="When were you born?"/>
        <div className="drivers-license__name-form">
          <TextField className="drivers-license__first-name"
            label="First Name"
            question="What is your first name?"/>
          <TextField className="drivers-license__last-name"
            label="Last Name"
            question="What is your last name?"/>
        </div>
        <div className="drivers-license__issued">
          <TextField className="drivers-license__number"
            label="License #"
            question="What is your drivers license?"/>
          <TextField className="drivers-license__state"
            label="State/Entity"
            question="What state/entity issued the license?"/>
        </div>
      </div>
    );
  }
}

export default DriversLicense;
