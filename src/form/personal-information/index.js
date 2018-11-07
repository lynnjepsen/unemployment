import React, {Component} from 'react';
import BirthDatTextField from './birth-date-text-field';
import './index.scss';

class PersonalInformation extends Component {
  render() {
    return (
      <div className="personal-information">
        <BirthDatTextField className="personal-information__birth-date"/>
      </div>
    );
  }
}

export default PersonalInformation;
