import React, { Component } from 'react';
import Radium from 'radium';
import { colors, fonts, breakpoints } from '../theme';

const styles = {
  container: {
    marginBottom: '25px',
    color: colors.grey,
    lineHeight: '1.4',
  },
  heading: {
    padding: '0 0 10px',
    fontSize: '22px',
    fontFamily: fonts.defaultFont,
    fontWeight: fonts.types.bold,
    textTransform: 'uppercase',
  },
  content: {
    color: colors.black,
    fontSize: '14px',
    paddingRight: '320px',

    [breakpoints.mobile]: {
      fontSize: '15px',
      paddingRight: '0',
    }
  }
};

class TextBox extends Component {
  render() {
    const { children, label } = this.props;
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>{label}</h2>
        <div style={styles.content}>{children}</div>
      </div>
    );
  }
}

export default Radium(TextBox);
