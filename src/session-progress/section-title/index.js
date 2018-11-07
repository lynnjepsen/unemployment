import React, {Component} from 'react';
import './index.scss';

class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title">
        {this.props.title}
      </div>
    );
  }
}

export default SectionTitle;
