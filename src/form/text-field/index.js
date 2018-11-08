import React, {Component} from 'react';
import MaterialTextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class TextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <MaterialTextField
          className="form-text-field"
          outlined
          label={this.props.label}
          helperText={<HelperText persistent>{this.props.question}</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}/>
        </MaterialTextField>
      </div>
    );
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    if (this.props.onUserInput) {
      const isUserInput = e.target.value !== '';
      this.props.onUserInput(isUserInput);
    }
  }
}

export default TextField;
