import React, { Component } from 'react';
import Radium from 'radium';
import { colors, breakpoints } from '../theme';

const styles = {
  page: {
    position: 'relative',
    backgroundColor: colors.white,

    [breakpoints.mobile]: {
      padding: '0 20px',
    },
  },
  header: {

  },
};

class NotFound extends Component {
  render() {
    return (
      <div style={styles.page}>
        <h1>404 - Page not found</h1>
      </div>
    );
  }
}

export default Radium(NotFound);