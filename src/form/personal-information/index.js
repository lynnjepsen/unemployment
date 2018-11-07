import React, {Component} from 'react';
import TextField from '../text-field';
import './index.scss';

class PersonalInformation extends Component {
  render() {
    return (
      <div className="personal-information">
        <TextField className="personal-information__birth-date"
          label="Birth Date (MM / DD / YYYY)"
          question="When were you born?"/>
        <TextField className="personal-information__gender"
          label="Gender"
          question="What is your gender?"/>
      </div>
    );
  }
}

export default PersonalInformation;
