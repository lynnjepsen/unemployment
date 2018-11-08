import React, {Component} from 'react';
import DriversLicense from './drivers-license';
import SocialSecurity from './social-security';
import './index.scss';

class Identification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDriversLicenseSet: false,
      isComplete: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const isComplete = 
      this.state.isDriversLicenseSet;
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
        <div className="identification__title">Drivers License</div>
        <DriversLicense onComplete={(isComplete) => this.setState({isDriversLicenseSet: isComplete})}/>
      <div className="identification__title">Social Security</div>
        <SocialSecurity/>
      </div>
    );
  }
}

export default Identification;
