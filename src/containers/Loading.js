import React, { Component } from 'react';
import Radium from 'radium';
import { h2, icons, colors } from '../theme';
import Header from '../components/Header';
import LogoGradient from '../assets/logo-gradient.svg';

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
  logo: {
    marginBottom: 50,
  },
  h1: {
    fontSize: '32px',
    margin: '0 0 198px',
    color: colors.headingGrey,
  },
  cancel: {
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

class Loading extends Component {
  render() {
    return (
      <div style={styles.page}>
        <Header {...this.props} />
        <div style={styles.container}>
          <div style={styles.content}>
            <img style={styles.logo} src={LogoGradient} alt={`Please wait...`} />
            <h1 style={styles.h1}>Creating Depth <br />Please wait…</h1>
            <div style={styles.cancel} onClick={() => { this.props.history.push('/upload') }}>Cancel</div>
          </div>
        </div>
      </div >
    );
  }
}

export default Radium(Loading);
