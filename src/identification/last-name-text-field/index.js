import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class LastNameTextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <TextField
          className="last-name-text-field"
          outlined
          label='Last Name'
          helperText={<HelperText persistent>What is your last name?</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}/>
        </TextField>
      </div>
    );
  }
}

export default LastNameTextField;
