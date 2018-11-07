import React, {Component} from 'react';
import Logo from './logo';
import SectionTitle from './section-title';
import './index.scss';

class SessionProgress extends Component {
  render() {
    return (
      <div className="session-progress">
        <Logo className="session-progress__logo"/>
        <div className="session-progress__section-titles">
          <SectionTitle title="Introduction" />
          <SectionTitle title="Form" />
          <SectionTitle title="Print" />
          <SectionTitle title="Finish" />
        </div>
      </div>
    );
  }
}

export default SessionProgress;
