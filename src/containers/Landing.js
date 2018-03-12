import React, { Component } from 'react';
import Radium from 'radium';
import { colors, breakpoints, icons, fonts, h2 } from '../theme';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const styles = {
  page: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  headingWrapper: {
    padding: '112px 30px',
  },
  content: {
    padding: '0 30px 85px',
    flex: '1',
  },
  h1: {
    color: colors.veryDarkGrey,
    fontSize: '48px',
    letterSpacing: '45px',
    textTransform: 'uppercase',
    lineHeight: 1.6,
  },
  h2: h2,
  small: {
    fontSize: '12px',
    color: colors.headingGrey,
    lineHeight: 2,
  },
  footer: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: colors.borderGrey,
    textAlign: 'center',
    padding: '12px 0 22px',
  },
  footerItem: {
    display: 'inline-block',
    textAlign: 'center',
    color: colors.lightGrey,
    fontSize: '12px',
  },
  footerItemLink: {
    display: 'inline-block',
    padding: '18px',
    lineHeight: 1.8,
  },
};

class Landing extends Component {
  render() {
    return (
      <div style={styles.page}>
        <div style={styles.content}>
          <div style={styles.headingWrapper}>
            <h1 style={styles.h1}>Hori<Icon type={icons.logo} size={52} color={colors.accentYellow} />on</h1>
            <h1 style={{ ...styles.h1, color: colors.lightGrey }}>Depth</h1>
          </div>

          <h2 style={styles.h2}>New generation of image editing by artificial intelligence, for artists</h2>
          <Link to={`/login`}><Button label={`Log in`} /></Link>
          <div style={{ ...styles.small, fontWeight: fonts.types.semibold }}>Invites only.</div>
          <div style={styles.small}>For more info, contact us through social media.</div>
        </div>

        <footer style={styles.footer}>
          <ul>
            <li style={styles.footerItem}>
              <a href={`http://google.com`} style={styles.footerItemLink}>
                <Icon type={icons.facebook} size={20} color={colors.lightGrey} />
                <div>Facebook</div>
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href={`http://google.com`} style={styles.footerItemLink}>
                <Icon type={icons.instagram} size={20} color={colors.lightGrey} />
                <div>Instagram</div>
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href={`http://google.com`} style={styles.footerItemLink}>
                <Icon type={icons.twitter} size={20} color={colors.lightGrey} />
                <div>Twitter</div>
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href={`http://google.com`} style={styles.footerItemLink}>
                <Icon type={icons.tumblr} size={20} color={colors.lightGrey} />
                <div>Tumblr</div>
              </a>
            </li>
            <li style={styles.footerItem}>
              <a href={`http://google.com`} style={styles.footerItemLink}>
                <Icon type={icons.pinterest} size={20} color={colors.lightGrey} />
                <div>Pinterest</div>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Radium(Landing);
