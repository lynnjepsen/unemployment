import React, {Component} from 'react';
import TextField from '../text-field';
import Checkbox from '../checkbox';
import './index.scss';

class PersonalInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGenderSet: false,
      isWrittenLanguageSet: false,
      isSpokenLanguageSet: false,
      isTelephoneNumberSet: false,
      isMailingAddressSet: false,
      isRaceSet: false,
      isEducationSet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = 
      this.state.isGenderSet && 
      this.state.isWrittenLanguageSet &&
      this.state.isSpokenLanguageSet &&
      this.state.isTelephoneNumberSet &&
      this.state.isMailingAddressSet &&
      this.state.isRaceSet &&
      this.state.isEducationSet;
    if (isComplete !== prevState.isComplete) {
      this.setState({isComplete:isComplete});
      if (this.props.onComplete) {
        this.props.onComplete(isComplete);
      }
    }
  }

  render() {
    return (
      <div className="personal-information">
        <div className="personal-information__title">Personal Information</div>
        <TextField className="personal-information__telephone-number"
          label="Telephone #"
          question="What is your telephone number?"
          onUserInput={(isUserInput) => this.setState({isTelephoneNumberSet: isUserInput})}/>
        <TextField className="personal-information__mailing-address"
          label="Street, City, State, ZIP"
          question="What is your mailing address?"
          onUserInput={(isUserInput) => this.setState({isMailingAddressSet: isUserInput})}/>
        <div className="personal-information__languanges">
          <TextField className="personal-information__written-language"
            label="Written Language"
            question="What is your preferred written language?"
            onUserInput={(isUserInput) => this.setState({isWrittenLanguageSet: isUserInput})}/>
          <TextField className="personal-information__spoken-language"
            label="Spoken Language"
            question="What is your preferred spoken language?"
            onUserInput={(isUserInput) => this.setState({isSpokenLanguageSet: isUserInput})}/>
        </div>
        <TextField className="personal-information__race"
          label="Race or Ethnic Group"
          question="What race or ethnic group do you identify with?"
          onUserInput={(isUserInput) => this.setState({isRaceSet: isUserInput})}/>
        <TextField className="personal-information__gender"
          label="Gender"
          question="What is your gender?"
          onUserInput={(isUserInput) => this.setState({isGenderSet: isUserInput})}/>
        <TextField className="personal-information__education"
          label="Highest Grade of School"
          question="What is the highest grade of school you have completed?"
          onUserInput={(isUserInput) => this.setState({isEducationSet: isUserInput})}/>
        <div className="personal-information__communication-title mdc-typography--body2">Do you use any of the following to communicate:</div>
        <div className="personal-information__communcation">
          <Checkbox id="personal-information-tty"/>
          <label htmlFor="personal-information-tty" className="mdc-typography--body2">TTY (non-voice)</label>
        </div>
        <div className="personal-information__communcation">
          <Checkbox id="personal-information-relay-service"/>
          <label htmlFor="personal-information-relay-service" className="mdc-typography--body2">California Relay Service</label>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
