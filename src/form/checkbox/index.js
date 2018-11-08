import React, {Component} from 'react';
import MaterialCheckbox from '@material/react-checkbox';
import './index.scss';

class Checkbox extends Component {
  state = {checked: false, indeterminate: false};

  render() {
    return (
      <MaterialCheckbox
        className="checkbox"
        nativeControlId={this.props.id}
        checked={this.state.checked}
        indeterminate={this.state.indeterminate}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }

  handleChange(e) {
    if (this.state.checked != e.target.checked) {
      this.props.onCheck(e.target.checked);
    }
    this.setState({
      checked: e.target.checked,
      indeterminate: e.target.indeterminate
    });
  }
}

export default Checkbox;
