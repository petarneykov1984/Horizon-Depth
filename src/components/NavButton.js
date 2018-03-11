import React, { Component } from 'react';
import Radium from 'radium';
import { colors, transitions, fonts, breakpoints } from '../theme';
import Icon from '../components/Icon';

const styles = {
  btn: {
    display: 'inline-block',
    padding: '7px 0',
    margin: '0 20px',
    color: colors.white,
    fontWeight: fonts.types.large,
    cursor: 'pointer',
    opacity: .8,
    transition: transitions.default,
    ':hover': {
      opacity: 1,
      transition: transitions.default,
    },
    [breakpoints.mobile]: {
      padding: '12px 0',
    },
  },
  icon: {
    display: 'inline-block',
    paddingLeft: '7px',
  },
};

class NavButton extends Component {
  render() {
    let { label, url, title, icon, outsideStyle } = this.props;
    return (
      <a
        style={[styles.btn, outsideStyle]}
        href={url}
        title={title}
        target='_blank'
      >
        {label}  <span style={styles.icon}><Icon type={icon}></Icon></span>
      </a>
    );
  }
}

export default Radium(NavButton);

