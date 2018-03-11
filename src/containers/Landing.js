import React, { Component } from 'react';
import Radium from 'radium';
import { colors, breakpoints, icons } from '../theme';
import Icon from '../components/Icon';

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
        <Icon type={icons.twitter} color={colors.black} />
        <Icon type={icons.logo} color={colors.black} />
      </div>
    );
  }
}

export default Radium(Landing);
