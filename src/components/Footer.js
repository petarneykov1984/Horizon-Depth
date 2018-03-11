import React, { Component } from 'react';
import Radium from 'radium';
import NavButton from '../components/NavButton';
import { colors, breakpoints, fonts } from '../theme';

const styles = {
  content: {
    width: '100%',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footer: {
    background: colors.grey,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'start',
    marginRight: '-20px',
    marginLeft: '-20px',

    [breakpoints.mobile]: {
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: '15px',
    },
  },
  listItem: {
    [breakpoints.mobile]: {
      width: '50%',
    },
  },

  copy: {
    padding: '7px 0',
    fontSize: '14px',
    opacity: .8,
    fontWeight: fonts.types.large,
  },
  footerContent: {
    clear: 'both',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '24px 0 24px',
    color: colors.white,

    [breakpoints.mobile]: {
      alignItems: 'flex-start',
      flexDirection: 'column-reverse',
    },
  },
};

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.content}>
          <div style={styles.footerContent}>
            <div style={styles.copy}>&copy; UTTO - Underground to cloud</div>
            <ul style={styles.list}>
              <li style={styles.listItem}><NavButton url={`http://utto.com`} target={`_blank`} title={`(opens in new window)`} label={`Download our app`} ></NavButton></li>
              <li style={styles.listItem}><NavButton url={`http://utto.com`} target={`_blank`} title={`(opens in new window)`} label={`FAQ`} ></NavButton></li>
              <li style={styles.listItem}><NavButton url={`http://utto.com`} target={`_blank`} title={`(opens in new window)`} label={`Support`} ></NavButton></li>
              <li style={styles.listItem}><NavButton url={`http://utto.com`} target={`_blank`} title={`(opens in new window)`} label={`About UTTO`} ></NavButton></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Radium(Footer);
