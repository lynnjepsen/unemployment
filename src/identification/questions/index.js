import React, {Component} from 'react';
import DriversLicense from '../drivers-license';
import './index.scss';

class Questions extends Component {
  render() {
    const className = "questions "+this.props.className;
    return (
      <div className={className}>
        <div className="questions__document-name  mdc-typography--headline6">Drivers License</div>
        <DriversLicense/>
      </div>
    );
  }
}

export default Questions;
