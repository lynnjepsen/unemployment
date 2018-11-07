import React, {Component} from 'react';
import incompleteQuestionSet from './incomplete-question-set.svg';
import connector from './connector.svg';
import './index.scss';

class Navigator extends Component {
  render() {
    const className = "navigator "+this.props.className;
    return (
      <div className={className}>
        <div className="navigator__question-set">
          <img src={incompleteQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
          <span className="navigator__question-set-name">Personal Information</span>
        </div>
        <img src={connector} className="navigator__connector" alt="connector" />
        <div className="navigator__question-set">
          <img src={incompleteQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
          <span className="navigator__question-set-name">Identification</span>
        </div>
        <img src={connector} className="navigator__connector" alt="connector" />
        <div className="navigator__question-set">
          <img src={incompleteQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
          <span className="navigator__question-set-name">Employers and Wages</span>
        </div>
        <img src={connector} className="navigator__connector" alt="connector" />
        <div className="navigator__question-set">
          <img src={incompleteQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
          <span className="navigator__question-set-name">Last Employer</span>
        </div>
      </div>
    );
  }
}

export default Navigator;
