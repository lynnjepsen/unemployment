import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class LicenseNumberTextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <TextField
          className="license-number-text-field"
          outlined
          label='License #'
          helperText={<HelperText persistent>What is your license number?</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}/>
        </TextField>
      </div>
    );
  }
}

export default LicenseNumberTextField;
