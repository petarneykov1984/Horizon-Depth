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

class Landing extends Component {
  render() {
    return (
      <div style={styles.page}>
        <header style={styles.header}>
          Header
        </header>
        <h1>CONTENT HERE</h1>
      </div>
    );
  }
}

export default Radium(Landing);
