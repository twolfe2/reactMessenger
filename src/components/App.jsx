import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
