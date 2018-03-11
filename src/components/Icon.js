import React, { Component } from 'react';
import Radium from 'radium';
import { colors, sizes, transitions, fonts } from '../theme';

const styles = {
  icon: {
    display: 'inline-block',
    fontFamily: 'horizon',
    fontStyle: 'normal',
    fontWeight: fonts.types.medium,
    fontVariant: 'normal',
    lineHeight: 1,
    textDecoration: 'inherit',
    textRendering: 'optimizeLegibility',
    textTransform: 'none',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    transition: transitions.button,
  }
};

const DEFAULT_SIZE = sizes.svg;
const DEFAULT_COLOR = colors.white;

class Icon extends Component {
  render() {
    let { type, size = DEFAULT_SIZE, color = DEFAULT_COLOR, colorHover = DEFAULT_COLOR, isHovered = false } = this.props;

    return (
      <i
        style={{
          ...styles.icon,
          fontSize: size,
          color: isHovered ? colorHover : color,
        }}
        dangerouslySetInnerHTML={{ __html: type }}
      ></i>
    );
  }
}

export default Radium(Icon);
