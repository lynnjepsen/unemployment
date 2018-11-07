import React, {Component} from 'react';
import TextField, {HelperText, Input} from '@material/react-text-field';
import './index.scss';

class BirthDateTextField extends Component {
  state = {value: ''};

  render() {
    return (
      <div className={this.props.className}>
        <TextField
          className="birth-date-text-field"
          outlined
          label='Birth Date (MM / DD / YYYY)'
          helperText={<HelperText persistent>When were you born?</HelperText>}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}/>
        </TextField>
      </div>
    );
  }
}

export default BirthDateTextField;
