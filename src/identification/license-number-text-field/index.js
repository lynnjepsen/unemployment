import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class LicenseNumberTextField extends Component {
  state = {value: ''};

  render() {
    const className = "license-number-text-field "+this.props.className;
    return (
      <TextField
        className={className}
        outlined
        label='License #'
        helperText={<HelperText persistent>What is your license number?</HelperText>}>
        <Input
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}/>
      </TextField>
    );
  }
}

export default LicenseNumberTextField;
