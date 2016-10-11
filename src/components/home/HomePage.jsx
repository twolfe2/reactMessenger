import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>React Boiler</h1>
        <Link to="messenger" className="btn btn-primary">Goto Messenger</Link>|
      </div>
    );
  }
}

export default HomePage;
