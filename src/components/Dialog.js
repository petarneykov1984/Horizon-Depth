import React, { Component } from 'react';
import Radium from 'radium';
import Animated from 'animated/lib/targets/react-dom';
import Icon from '../components/Icon';
import { colors, icons, h2, shadows } from '../theme';

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    padding: '25px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: colors.black85,
  },
  modal: {
    position: 'relative',
    zIndex: 20,
    margin: '0 auto',
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '100%',
    width: 400,
    maxWidth: '90%',
    borderRadius: '8px',
    backgroundColor: colors.white,
    boxShadow: shadows.popup,
  },
  modalContent: {
    padding: '35px 28px 13px',
  },
  titleWrap: {
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
    cursor: 'pointer',
  },
  h2: h2,
};

class Dialog extends Component {
  constructor() {
    super();
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation(1, () => { });
  }

  startAnimation(toValueInput, callback) {
    Animated.timing(this.state.anim, {
      toValue: toValueInput,
      duration: 300,
    }).start(({ finished }) => finished && callback());
  }

  closeModal() {
    this.startAnimation(0, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }

  render() {
    const { title, children } = this.props;

    return (
      <div style={styles.container}>
        <Animated.div
          onClick={event => {
            this.closeModal();
          }}
          style={{
            ...styles.background,
            opacity: this.state.anim,
          }}
        />

        <Animated.div
          style={{
            ...styles.modal,
            opacity: this.state.anim,
            transform: [
              {
                scale: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }),
              },
            ],
          }}
        >
          <div style={styles.modalContent}>
            <span
              style={styles.close}
              onClick={event => {
                this.closeModal();
              }}
            >
              <Icon type={icons.close} color={colors.black} size={20} />
            </span>
            <div style={styles.titleWrap}>
              <h2 style={styles.h2}>{title}</h2>
            </div>
            {children}
          </div>
        </Animated.div>
      </div>
    );
  }
}

export default Radium(Dialog);
