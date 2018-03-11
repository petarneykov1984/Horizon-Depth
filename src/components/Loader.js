import React, { Component } from 'react';
import Radium from 'radium';
import { colors, transitions } from '../theme';

const DEFAULT_SIZE = 60;
const DEFAULT_COLOR = colors.buttonBlue;
const DEFAULT_WIDTH = 5;

const animation = {
  running: 'running',
  paused: 'paused',
};

const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  spinner: {
    position: 'relative',
    transition: transitions.default,
    strokeWidth: 5,
  },
  path: {
    fill: 'transparent',
    strokeDasharray: 170,
    strokeDashoffset: 20,
  },
};

class Loader extends Component {
  constructor() {
    super();
    this.state = {
      mounted: true,
      generatedId: '',
    };
  }

  componentDidMount() {
    let { color } = this.props;
    this.setState({
      generatedId: color,
    });
  }

  getKeyFrames() {
    return [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' },
    ];
  }

  getTiming(duration, delay = 0) {
    return {
      duration: duration,
      delay: delay,
      iterations: 100,
      fill: 'forwards',
    };
  }

  getPlayState() {
    return this.state.mounted
      ? animation.running
      : animation.paused;
  }

  getUrl() {
    return `url(#${this.state.generatedId})`;
  }

  render() {
    let { color = DEFAULT_COLOR, size = DEFAULT_SIZE, width = DEFAULT_WIDTH, style } = this.props;

    return (
      <section style={styles.wrap}>
        <svg style={{ ...styles.spinner, ...style }} width={size} height={size} viewBox='0 0 66 66'>
          <linearGradient id={this.state.generatedId}>
            <stop offset={'10%'} stopOpacity={1} stopColor={color} />
            <stop offset={'100%'} stopOpacity={0} stopColor={color} />
          </linearGradient>
          <circle style={styles.path} stroke={this.getUrl()} cx='33' cy='33' r='30' strokeWidth={width} />
        </svg>
      </section>
    );
  }
}

export default Radium(Loader);
