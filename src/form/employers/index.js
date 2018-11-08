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
      seasonalWork: false,
      wasInCorporation: false,
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
        <div className="employers__seasonal">
          <div className="mdc-typography--body2">Is your usual work seasonal?</div>
          <Checkbox id="employers-seasonal"
            onCheck={(checked) => this.setState({seasonalWork: checked})}/>
          <label htmlFor="employers-seasonal" className="mdc-typography--body2">Yes</label>
        </div>
        {this.renderSeasonalWorker()}
        <div className="employers__last-year mdc-typography--body1">In the past 18 months</div>
        <div className="employers__outside-ca">
          <div className="mdc-typography--body2">Did you work in a state other than California?</div>
          <Checkbox id="employers-outside-ca"
            onCheck={(checked) => this.setState({workedOutsideCa: checked})}/>
          <label htmlFor="employers-outside-ca" className="mdc-typography--body2">Yes</label>
        </div>
        {this.renderOutsideCaTextField()}
        <div className="employers__corporation">
          <div className="mdc-typography--body2">Were you an officer or the sole major stockholder of a corporation?</div>
          <Checkbox id="employers-corporation"
            onCheck={(checked) => this.setState({wasInCorporation: checked})}/>
          <label htmlFor="employers-corporation" className="mdc-typography--body2">Yes</label>
        </div>
        {this.renderCorporationWorker()}
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

  renderSeasonalWorker() {
    if (this.state.seasonalWork) {
      return (
        <div className="employers__seasonal-form">
          <TextField className="employers__season-start"
            label="Season Start"
            question="When does the season usually begin?"/>
          <TextField className="employers__season-end"
            label="Season End"
            question="When does the season usually end?"/>
        </div>
      );
    }
    return (<div/>);
  }

  renderCorporationWorker() {
    if (this.state.wasInCorporation) {
      return (
        <div>
          <TextField className="employers__organization-name"
            label="Organization"
            question="What is the name of the organization?"/>
          <TextField className="employers__corporation-position"
            label="Title/position"
            question="What was your title/position?"/>
        </div>
      );
    }
    return (<div/>);
  }
}

export default Employers;
