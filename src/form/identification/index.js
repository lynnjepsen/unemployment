import React, {Component} from 'react';
import TextField from '../text-field';
import './index.scss';

class Identification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBirthdaySet: false,
      isSsnSet: false,
      isFirstNameSet: false,
      isLastNameSet: false,
      isNumberSet: false,
      isStateEntitySet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = 
      this.state.isBirthdaySet && 
      this.state.isSsnSet &&
      this.state.isFirstNameSet &&
      this.state.isLastNameSet &&
      this.state.isNumberSet &&
      this.state.isStateEntitySet;
    if (isComplete !== prevState.isComplete) {
      this.setState({isComplete:isComplete});
      if (this.props.onComplete) {
        this.props.onComplete(isComplete);
      }
    }
  }

  render() {
    return (
      <div className="identification">
        <div className="identification__title">Identification</div>
        <TextField className="identification__birth-date"
          label="Birth Date (MM / DD / YYYY)"
          question="When were you born?"
          onUserInput={(isUserInput) => this.setState({isBirthdaySet: isUserInput})}/>
        <TextField className="identification__ssn"
          label="SSN"
          question="What is your Social Security Number?"
          onUserInput={(isUserInput) => this.setState({isSsnSet: isUserInput})}/>
        <div className="identification__name-form">
          <TextField className="identification__first-name"
            label="First Name"
            question="What is your first name?"
            onUserInput={(isUserInput) => this.setState({isFirstNameSet: isUserInput})}/>
          <TextField className="identification__last-name"
            label="Last Name"
            question="What is your last name?"
            onUserInput={(isUserInput) => this.setState({isLastNameSet: isUserInput})}/>
        </div>
        <div className="identification__license">
          <TextField className="identification__license-number"
            label="License #"
            question="What is your drivers license?"
            onUserInput={(isUserInput) => this.setState({isNumberSet: isUserInput})}/>
          <TextField className="identification__issuing-state"
            label="State/Entity"
            question="What state/entity issued the license?"
            onUserInput={(isUserInput) => this.setState({isStateEntitySet: isUserInput})}/>
        </div>
      </div>
    );
  }
}

export default Identification;
