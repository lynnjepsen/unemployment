import React, {Component} from 'react';
import PersonalInformation from './personal-information';
import IdentificatonQuestions from './identification';
import Navigator from './navigator';
import './index.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPersonalInformationComplete: false
    };
  }

  render() {
    return (
      <div className="form sheet">
        <div className="form__questions">
          <PersonalInformation onComplete={(isComplete) => this.setState({isPersonalInformationComplete: isComplete})}/>
          <IdentificatonQuestions/>
        </div>
        <Navigator className="form__navigator" isPersonalInformationComplete={this.state.isPersonalInformationComplete}/>
      </div>
    );
  }
}

export default Form;
