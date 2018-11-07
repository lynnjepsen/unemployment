import React, {Component} from 'react';
import Questions from './questions';
import incompleteQuestionSet from './incomplete-question-set.svg';
import connector from './connector.svg';
import './index.scss';

class Identification extends Component {
  render() {
    return (
      <div className="identification">
        <Questions className="indentification__questions"/>
        <div className="identification__navigator">
          <div className="identification__question-set">
            <img src={incompleteQuestionSet} className="identification__question-set-indicator" alt="question set indicator" />
            <span className="identification__question-set-name">Identification</span>
          </div>
          <img src={connector} className="identification__connector" alt="connector" />
          <div className="identification__question-set">
            <img src={incompleteQuestionSet} className="identification__question-set-indicator" alt="question set indicator" />
            <span className="identification__question-set-name">Drivers License</span>
          </div>
          <img src={connector} className="identification__connector" alt="connector" />
          <div className="identification__question-set">
            <img src={incompleteQuestionSet} className="identification__question-set-indicator" alt="question set indicator" />
            <span className="identification__question-set-name">Social Security Card</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Identification;
