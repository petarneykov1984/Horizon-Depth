import React, { Component } from 'react';
import Radium from 'radium';
import { h2 } from '../theme';
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
