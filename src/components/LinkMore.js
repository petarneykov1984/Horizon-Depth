import React, { Component } from 'react';
import { colors, fonts, transitions, icons } from '../theme';
import Radium from 'radium';
import Icon from '../components/Icon';

const styles = {
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 0',
    fontFamily: fonts.default,
    fontSize: '15px',
    fontWeight: fonts.types.large,
    color: colors.robinBlue,
    cursor: 'pointer',
    opacity: .8,
    transition: transitions.opacity,
    ':hover': {
      opacity: 1,
    },
  },
  label: {
    margin: '0 6px 0 0',
  },
};

class LinkMore extends Component {
  render() {
    let { label } = this.props;
    return (
      <div style={styles.link} onClick={this.props.onClick}>
        <span style={styles.label}>{label}</span>
        <Icon
          type={icons.arrowRight}
          size={12}
          color={colors.robinBlue}
        />
      </div>
    );
  }
}

export default Radium(LinkMore);
