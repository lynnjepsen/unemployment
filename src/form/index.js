import React, {Component} from 'react';
import PersonalInformation from './personal-information';
import IdentificatonQuestions from './identification';
import Navigator from './navigator';
import './index.scss';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="form__questions">
          <PersonalInformation/>
          <IdentificatonQuestions/>
        </div>
        <Navigator className="form__navigator"/>
      </div>
    );
  }
}

export default Form;
