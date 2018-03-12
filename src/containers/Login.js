import React, { Component } from 'react';
import Radium from 'radium';
import { colors, breakpoints, icons, fonts, shadows, h2 } from '../theme';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const styles = {
  container: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: '35px 28px 13px',
    width: 400,
    maxWidth: '90%',
    borderRadius: '8px',
    backgroundColor: colors.white,
    boxShadow: shadows.popup,
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  h2: h2,
};

class Login extends Component {
  submit = values => {
    console.log('Login form values are: ', values);
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Link style={styles.close} to={`/landing`}><Icon type={icons.close} size={20} color={colors.black} /></Link>
          <h2 style={styles.h2}>Log in</h2>
          <LoginForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

export default Radium(Login);
