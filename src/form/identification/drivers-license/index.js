import React, {Component} from 'react';
import TextField from '../../text-field';
import './index.scss';

class DriversLicense extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBirthdaySet: false,
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
      <div className="drivers-license">
        <TextField className="drivers-license__birth-date"
          label="Birth Date (MM / DD / YYYY)"
          question="When were you born?"
          onUserInput={(isUserInput) => this.setState({isBirthdaySet: isUserInput})}/>
        <div className="drivers-license__name-form">
          <TextField className="drivers-license__first-name"
            label="First Name"
            question="What is your first name?"
            onUserInput={(isUserInput) => this.setState({isFirstNameSet: isUserInput})}/>
          <TextField className="drivers-license__last-name"
            label="Last Name"
            question="What is your last name?"
            onUserInput={(isUserInput) => this.setState({isLastNameSet: isUserInput})}/>
        </div>
        <div className="drivers-license__issued">
          <TextField className="drivers-license__number"
            label="License #"
            question="What is your drivers license?"
            onUserInput={(isUserInput) => this.setState({isNumberSet: isUserInput})}/>
          <TextField className="drivers-license__state"
            label="State/Entity"
            question="What state/entity issued the license?"
            onUserInput={(isUserInput) => this.setState({isStateEntitySet: isUserInput})}/>
        </div>
      </div>
    );
  }
}

export default DriversLicense;
