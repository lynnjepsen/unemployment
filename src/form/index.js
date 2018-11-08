import React, {Component} from 'react';
import PersonalInformation from './personal-information';
import IdentificatonQuestions from './identification';
import Navigator from './navigator';
import './index.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPersonalInformationComplete: false,
      isIdentificationComplete: false
    };
  }

  render() {
    return (
      <div className="form">
        <div className="form__questions">
          <PersonalInformation onComplete={(isComplete) => this.setState({isPersonalInformationComplete: isComplete})}/>
          <IdentificatonQuestions  onComplete={(isComplete) => this.setState({isIdentificationComplete: isComplete})}/>
        </div>
        <Navigator className="form__navigator" 
          isPersonalInformationComplete={this.state.isPersonalInformationComplete}
          isIdentificationComplete={this.state.isIdentificationComplete}/>
      </div>
    );
  }
}

export default Form;
