import React, { Component, PropTypes } from 'react';


const styles = {
  sender: {
    position: 'relative',
    width: 200,
    minHeight: 20,
    padding: 10,
    borderRadius: 5,
    border: 'solid lightgrey',
    background: 'lightgrey',
    margin: 5,
  },
  reciever: {
    position: 'relative',
    width: 200,
    minHeight: 20,
    padding: 10,
    borderRadius: 5,
    border: 'solid #66D7E6',
    background: '#66D7E6',
    margin: 5,
  },
  message: {
    position: 'inherit',
    width: 'inherit',
    height: 'inherit',
    background: 'inherit',
    margin: 0,
    padding: 0,
    border: 'none',
    resize: 'none',
  },

};


const TalkBubble = (props) => {
  const bubbleStyle = props.person;
  return (
    <div style={styles[bubbleStyle]}>
      <div style={styles.message}>{props.message}</div>
    </div>
  );
};

TalkBubble.propTypes = {
  person: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default TalkBubble;
