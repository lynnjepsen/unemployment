import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class GenderTextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <TextField
          className="gender-text-field"
          outlined
          label='Gender'
          helperText={<HelperText persistent>What is your gender?</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}/>
        </TextField>
      </div>
    );
  }
}

export default GenderTextField;
