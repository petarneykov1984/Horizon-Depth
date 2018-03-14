import React, { Component } from 'react';
import Radium from 'radium';
import { colors, fonts, breakpoints, icons } from '../theme';
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
    margin: '0 0 0 15px',
    fontSize: '12px',
    fontWeight: fonts.types.semibold,
    cursor: 'pointer',
  }
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dialogIsVisible: false,
    };
  }

  toggleDialog() {
    this.setState({
      dialogIsVisible: !this.state.dialogIsVisible,
    });
  }

  submit = values => {
    console.log('Login form values are: ', values);
  }

  render() {
    return (
      <header style={styles.container}>
        <div style={styles.wrap}>
          <Icon type={icons.logo} color={colors.accentYellow} size={22} />
          <span style={styles.logo}>HorizonDepth</span>
        </div>
        <div style={styles.wrap}>
          <span style={styles.simpleLink} onClick={() => this.toggleDialog()}>Feedback</span>

          {
            this.state.dialogIsVisible && (
              <Dialog title={`Send us feedback!`} onClose={() => this.toggleDialog()}>
                <FeedbackForm onSubmit={this.submit} />
              </Dialog>
            )
          }
          <span style={{ ...styles.simpleLink, marginBottom: -3, }}><Icon type={icons.cog} color={colors.navDarkGrey} size={15} /></span>
        </div>
      </header>
    );
  }
}

export default Radium(Header);
