import React, {Component} from 'react';
import TextField from '../text-field';
import './index.scss';

class Employers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOccupationSet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = 
      this.state.isOccupationSet;
    if (isComplete !== prevState.isComplete) {
      this.setState({isComplete:isComplete});
      if (this.props.onComplete) {
        this.props.onComplete(isComplete);
      }
    }
  }

  render() {
    return (
      <div className="employers">
        <div className="employers__title">Employers and Wages</div>
        <TextField className="employers__occupation"
          label="Occupation"
          question="What is your usual occupation?"
          onUserInput={(isUserInput) => this.setState({isOccupationSet: isUserInput})}/>
      </div>
    );
  }
}

export default Employers;
