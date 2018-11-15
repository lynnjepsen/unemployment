import React, {Component} from 'react';
import PersonalInformation from './personal-information';
import Identification from './identification';
import Employers from './employers';
import Navigator from './navigator';
import './index.scss';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPersonalInformationComplete: false,
      isIdentificationComplete: false,
      isEmployersComplete: false
    };
  }

  render() {
    return (
      <div className="form sheet">
        <div className="form__questions">
          <PersonalInformation onComplete={(isComplete) => this.setState({isPersonalInformationComplete: isComplete})}/>
          <Identification  onComplete={(isComplete) => this.setState({isIdentificationComplete: isComplete})}/>
          <Employers onComplete={(isComplete) => this.setState({isEmployersComplete: isComplete})}/>
        </div>
        <Navigator className="form__navigator" 
          isPersonalInformationComplete={this.state.isPersonalInformationComplete}
          isIdentificationComplete={this.state.isIdentificationComplete}
          isEmployersComplete={this.state.isEmployersComplete}/>
      </div>
    );
  }
}

export default Form;
