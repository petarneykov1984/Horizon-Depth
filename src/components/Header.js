import React, { Component } from 'react';
import Radium from 'radium';
import { colors, fonts, icons, shadows } from '../theme';
import Icon from '../components/Icon';
import FeedbackForm from '../components/FeedbackForm';
import Dialog from '../components/Dialog';

const styles = {
  container: {
    width: '100%',
    padding: '18px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colors.navDarkGrey,
  },
  logo: {
    padding: '0 0 0 9px',
    fontSize: '12px',
    fontWeight: fonts.types.semibold,
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'middle',
  },
  simpleLink: {
    display: 'inline-block',
    marginLeft: '15px',
    fontSize: '12px',
    fontWeight: fonts.types.semibold,
    cursor: 'pointer',
  },
  flyout: {
    borderRadius: '4px',
    padding: '8px 22px',
    fontSize: '12px',
    color: colors.navDarkGrey,
    backgroundColor: colors.white,
    boxShadow: shadows.flyout,
    position: 'absolute',
    top: 27,
    right: -5,
    zIndex: 20,
    cursor: 'pointer',
  },
  posRel: {
    position: 'relative',
  },
  arrowUp: {
    position: 'absolute',
    top: -4,
    right: 8,
    width: 0,
    height: 0,
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',

    borderBottom: `4px solid ${colors.white}`,
  },
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dialogIsVisible: false,
      logoutIsVisible: false,
    };
  }

  toggleDialog() {
    this.setState({
      dialogIsVisible: !this.state.dialogIsVisible,
    });
  }

  toggleLogout() {
    this.setState({
      logoutIsVisible: !this.state.logoutIsVisible,
    });
  }

  submit = values => {
    console.log('Feedback form values are: ', values);
  }

  logout = () => {
    this.props.history.push('/');
  }

  render() {
    const { theme } = this.props;
    const themeColor = (theme === 'dark') ? colors.white : colors.navDarkGrey;

    return (
      <header style={styles.container}>
        <div style={styles.wrap}>
          <Icon type={icons.logo} color={colors.accentYellow} size={22} />
          <span style={{ ...styles.logo, color: themeColor, }}>HorizonDepth</span>
        </div>
        <div style={styles.wrap}>
          <span style={{ ...styles.simpleLink, color: themeColor }} onClick={() => this.toggleDialog()}>Feedback</span>

          {
            this.state.dialogIsVisible && (
              <Dialog title={`Send us feedback!`} onClose={() => this.toggleDialog()}>
                <FeedbackForm onSubmit={this.submit} />
              </Dialog>
            )
          }

          <div style={styles.posRel}>
            <span
              style={{ ...styles.simpleLink, marginBottom: -3, }}
              onClick={() => this.toggleLogout()}
            >
              <Icon type={icons.cog} color={themeColor} size={15} />
            </span>

            {
              this.state.logoutIsVisible && (
                <div
                  style={styles.flyout}
                  onClick={this.logout}
                >
                  <span style={styles.arrowUp}></span>
                  Logout
              </div>
              )
            }
          </div>
        </div>
      </header >
    );
  }
}

export default Radium(Header);
