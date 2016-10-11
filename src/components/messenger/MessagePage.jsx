import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';
import messageActions from '../../actions/messageActions';
import TalkBubble from './TalkBubble';
import MessageInput from './MessageInput';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const styles = {
  window: {
    height: '50vh',
    overflow: 'auto',
    border: 'solid 1px',
    borderRadius: 10,
    margin: 10
  },
}


class MessagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    const { userName, addMessage } = this.props;
    const reciever = userName === 'A' ? 'B' : 'A';
    const message = {
      sender: userName,
      reciever,
      message: text,
    };

    addMessage(message);
  }
  render() {
    const { userName, messages } = this.props;

    let view = messages.map((message, i) => {
      if (message.sender === userName) {
        return <div className="row" key={i}><div className="col-xs-6"><TalkBubble message={message.message} person={'sender'} /></div></div>;
      }
      return <div className="row" key={i}><div className="col-xs-offset-8 col-xs-6"><TalkBubble message={message.message} person={'reciever'} /></div></div>;
    });

    return (
      <Paper zDepth={2}>
        <div>
          <h1 style={{ textAlign: 'center' }}>{ userName }</h1>
          <div style={styles.window}>
            {view}
          </div>
          <MessageInput handleClick={this.handleClick}/>
        </div>
      </Paper>
    );
  }
}


MessagePage.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: message => dispatch(messageActions.addMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage);
