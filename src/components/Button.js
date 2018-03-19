import React, { Component } from 'react';
import Radium from 'radium';
import { colors, transitions, shadows, fonts, breakpoints, gradients } from '../theme';
import Icon from '../components/Icon';
import Loader from '../components/Loader';

const DEFAULT_POSITION = 'left';

const styles = {
  btnWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 48px',
    margin: '0 0 15px',
    color: colors.white,
    backgroundImage: gradients.button,
    borderRadius: '2px',
    border: 'none',
    cursor: 'pointer',
    transition: transitions.default,
    [breakpoints.mobile]: {
      width: '100%',
    },
    ':hover': {
      transform: 'translate(0, -2px)',
    },
    error: {
      backgroundColor: colors.buttonRed,
      boxShadow: shadows.buttonRed,
    },
  },
  label: {
    fontFamily: fonts.default,
    fontWeight: fonts.types.semibold,
    fontSize: '14px',
    textDecoration: 'none',
    order: 1,
  },
  icon: {
    display: 'flex',
    left: {
      margin: '0 8px 0 0',
      order: 0,
    },
    right: {
      margin: '0 0 0 8px',
      order: 2,
    },
  },
};

class Button extends Component {
  constructor() {
    super();
    this.onClicked = this.onClicked.bind(this);
  }

  onClicked() {
    let { isDisabled } = this.props;

    if (!isDisabled) {
      this.props.onClick();
    }
  }

  getButtonStyles() {
    let { fullWidth = false, hasError = false, additionalStyle } = this.props;
    let buttonStyles = styles.btnWrap;

    if (fullWidth) {
      buttonStyles = { ...buttonStyles, width: '100%' };
    }
    if (hasError) {
      buttonStyles = { ...buttonStyles, ...styles.btnWrap.error };
    }
    if (additionalStyle) {
      buttonStyles = { ...buttonStyles, ...additionalStyle };
    }

    return buttonStyles;
  }

  getIconStyles() {
    let { iconPosition = DEFAULT_POSITION } = this.props;
    let isIconLeft = iconPosition === 'left' ? true : false;
    let iconStyles = styles.icon;

    if (isIconLeft) {
      iconStyles = { ...iconStyles, ...styles.icon.left };
    } else {
      iconStyles = { ...iconStyles, ...styles.icon.right };
    }

    return iconStyles;
  }

  render() {
    let { label, iconType, isDisabled = false, isLoading = false } = this.props;

    return (
      <button
        disabled={isDisabled}
        style={this.getButtonStyles()}
        onClick={() => this.onClicked(this)}
      >
        {/* if isLoading - hide this */}
        {iconType && !isLoading &&
          <div style={this.getIconStyles()}>
            <Icon
              type={iconType}
              size={14}
            />
          </div>
        }
        {
          !isLoading &&
          <div style={styles.label}>
            {label}
          </div>
        }
        {/* if isLoading - show this */}
        {
          isLoading &&
          <Loader color={colors.lightWhite} size={18} width={8} />
        }
      </button>
    );
  }
}

Button.defaultProps = {
  onClick: () => { }
};

export default Radium(Button);
