import React, {Component} from 'react';
import incompleteQuestionSet from './incomplete-question-set.svg';
import completeQuestionSet from './complete-question-set.svg';
import connector from './connector.svg';
import './index.scss';

class Navigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: "navigator "+props.className,
      top: 0,
      left: 0
    }
    this.element = React.createRef();
  }

  componentDidMount() {
    const viewportPosition = this.getViewportPosition();
    this.setState({
      top: viewportPosition.y, 
      left: viewportPosition.x, 
      classes: this.state.classes+" navigator--fixed"});
  }

  getViewportPosition() {
    var xPosition = 0;
    var yPosition = 0;

    let element = this.element.current;
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  }

  render() {
    const style = {top:this.state.top, left:this.state.left};
    return (
      <div className={this.state.classes} ref={this.element} style={style}>
        <div className="navigator__question-set">
          {this.renderPersonalInformationIndictor()}
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

  renderPersonalInformationIndictor() {
    if (this.props.isPersonalInformationComplete) {
      return (
        <img src={completeQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
      );
    }
    return (
      <img src={incompleteQuestionSet} className="navigator__question-set-indicator" alt="question set indicator" />
    );
  }
}

export default Navigator;
