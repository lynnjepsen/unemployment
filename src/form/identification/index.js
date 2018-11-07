import React, {Component} from 'react';
import DriversLicense from './drivers-license';
import './index.scss';

class Identification extends Component {
  render() {
    return (
      <div className="identification">
        <div className="identification__title">Drivers License</div>
        <DriversLicense/>
      </div>
    );
  }
}

export default Identification;
