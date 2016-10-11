import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  input: {
    margin: 20,
  },
};

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  handleClick() {
    this.props.handleClick(this.state.message);
    this.setState({ message: '' });
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-11" style={styles.input}>
          <TextField
            hintText=""
            floatingLabelText="Enter your message here..."
            fullWidth
            value={this.state.message}
            onChange={(e) => { this.setState({ message: e.target.value })}}
          />
        </div>
        <div className="col-xs-12 text-center">
          <RaisedButton label="Send" primary fullWidth onClick={() => this.handleClick()} />
        </div>
      </div>
    );
  }
}

MessageInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

