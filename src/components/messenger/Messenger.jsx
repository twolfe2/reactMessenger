import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MessagePage from './MessagePage';
import AppBar from 'material-ui/AppBar';


class Messenger extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Messenger"
        />
        <div className="row">
          <div className="col-md-6">
            <MessagePage {...{ userName: 'A' }} />
          </div>
          <div className="col-md-6">
            <MessagePage {...{ userName: 'B' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
