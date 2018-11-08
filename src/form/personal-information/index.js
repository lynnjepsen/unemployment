import React, {Component} from 'react';
import TextField from '../text-field';
import './index.scss';

class PersonalInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBirthdaySet: false,
      isGenderSet: false,
      isWrittenLanguageSet: false,
      isTelephoneNumberSet: false,
      isMailingAddressSet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = this.state.isBirthdaySet && this.state.isGenderSet && this.state.isWrittenLanguageSet;
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
        <TextField className="personal-information__birth-date"
          label="Birth Date (MM / DD / YYYY)"
          question="When were you born?"
          onUserInput={(isUserInput) => this.setState({isBirthdaySet: isUserInput})}/>
        <TextField className="personal-information__gender"
          label="Gender"
          question="What is your gender?"
          onUserInput={(isUserInput) => this.setState({isGenderSet: isUserInput})}/>
        <TextField className="personal-information__telephone-number"
          label="Telephone #"
          question="What is your telephone number?"
          onUserInput={(isUserInput) => this.setState({isTelephoneNumberSet: isUserInput})}/>
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
        <TextField className="personal-information__mailing-address"
          label="Street, City, State, ZIP"
          question="What is your mailing address?"
          onUserInput={(isUserInput) => this.setState({isMailingAddressSet: isUserInput})}/>
        
      </div>
    );
  }
}

export default PersonalInformation;
