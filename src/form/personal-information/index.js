import React, {Component} from 'react';
import BirthDateTextField from './birth-date-text-field';
import GenderTextField from './gender-text-field';
import './index.scss';

class PersonalInformation extends Component {
  render() {
    return (
      <div className="personal-information">
        <BirthDateTextField className="personal-information__birth-date"/>
        <GenderTextField className="personal-information__gender"/>
      </div>
    );
  }
}

export default PersonalInformation;
