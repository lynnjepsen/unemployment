import React, {Component} from 'react';
import './index.scss';

class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title  mdc-typography--headline6">
        {this.props.title}
      </div>
    );
  }
}

export default SectionTitle;
