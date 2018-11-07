import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class AddressTextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <TextField
          className="address-text-field"
          outlined
          label='Address'
          helperText={<HelperText persistent>What is your address?</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}/>
        </TextField>
      </div>
    );
  }
}

export default AddressTextField;
