import React, {Component} from 'react';
import IdentificatonQuestions from '../identification';
import Navigator from '../navigator';
import './index.scss';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="form__questions">
          <IdentificatonQuestions/>
        </div>
        <Navigator className="form__navigator"/>
      </div>
    );
  }
}

export default Form;
