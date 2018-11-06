import React, {Component} from 'react';
import Checkbox from './checkbox';
import './index.scss';
import '../../typography.scss';

class Document extends Component {
  render() {
    return (
      <div className="document">
        <Checkbox id="document-checkbox"/>
        <label for="document-checkbox" className="document__name mdc-typography--body2">{this.props.name}</label>
      </div>
    );
  }
}

export default Document;
