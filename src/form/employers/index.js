import React, {Component} from 'react';
import TextField from '../text-field';
import Checkbox from '../checkbox';
import './index.scss';

class Employers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOccupationSet: false,
      workedOutsideCa: false,
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
        <div className="employers__outside-ca">
          <div className="employers__question mdc-typography--body2">Did you work in a state other than California during the last 18 months?</div>
          <Checkbox id="employers-outside-ca"
            onCheck={(checked) => this.setState({workedOutsideCa: checked})}/>
          <label htmlFor="employers-outside-ca" className="mdc-typography--body2">Yes</label>
        </div>
        {this.renderOutsideCaTextField()}
      </div>
    );
  }

  renderOutsideCaTextField() {
    if (this.state.workedOutsideCa) {
      return (
        <TextField className="employers__state"
          label="State"
          question="In which state outside of California did you work?"/>
      );
    }
    return (<div/>);
  }
}

export default Employers;
