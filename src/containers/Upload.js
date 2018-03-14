import React, { Component } from 'react';
import Radium from 'radium';
import { colors, icons, shadows, h2 } from '../theme';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  container: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
  },
  content: {
    padding: '20px',
  },
  h2: h2,
};

class Upload extends Component {
  submit = values => {
    console.log('Login form values are: ', values);
  }
  render() {
    return (
      <div style={styles.page}>
        <Header />
        <div style={styles.container}>
          <div style={styles.content}>
            Upload functionality here!
        </div>
        </div>
      </div>
    );
  }
}

export default Radium(Upload);
