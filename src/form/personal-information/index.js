import React, {Component} from 'react';
import TextField from '../text-field';
import './index.scss';

class PersonalInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBirthdaySet: false,
      isGenderSet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = this.state.isBirthdaySet && this.state.isGenderSet;
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
      </div>
    );
  }
}

export default PersonalInformation;
