import React, { Component } from 'react';
import Radium from 'radium';
import { colors, gradients, icons } from '../theme';
import Header from '../components/Header';
import Icon from '../components/Icon';
import Button from '../components/Button';

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundImage: gradients.result,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  aside: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 2,
    width: 210,
    paddingTop: 35,
    color: colors.white,
    textAlign: 'left',
  },
  h1: {
    fontSize: '24px',
    margin: '0 0 40px',
  },
  playerWrapper: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  player: {
    minWidth: 600,
    minHeight: 600,
    backgroundColor: colors.black85,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.footerGrey,
    width: '100%',
    color: colors.white,
    position: 'relative',
    minHeight: 62,
  },
  imageName: {
    padding: '0 220px',
    flex: 1,
  },
  close: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    height: '100%',
    lineHeight: '62px',
    padding: '3px 26px 0',
    cursor: 'pointer',
  },
  buttonWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },
  list: {
    marginTop: -32,
    padding: '0 0 0 10px',
    fontSize: '12px',
    borderTop: `1px  solid ${colors.listBorderGrey}`,
  },
  listItem: {
    marginTop: -1,
    borderTop: `1px  solid ${colors.listBorderGrey}`,
    color: colors.almostWhite,
    padding: '12px 0',
  },
  export: {
    backgroundImage: gradients.exportButton,
    borderRadius: 0,
    height: 62,
    margin: 0,
  },
};

class Result extends Component {
  render() {
    return (
      <div style={styles.page}>
        <Header {...this.props} theme={`dark`} />
        <div style={styles.container}>
          <div style={styles.content}>
            <aside style={styles.aside}>
              <h1 style={styles.h1}>24 seconds</h1>
              <h1 style={styles.h1}>5 objects</h1>
              <ul style={styles.list}>
                <li style={styles.listItem}>River</li>
                <li style={styles.listItem}>Mountain</li>
                <li style={styles.listItem}>Forest</li>
                <li style={styles.listItem}>Man</li>
                <li style={styles.listItem}>Boat</li>
              </ul>
            </aside>
            <div style={styles.playerWrapper}>
              <div style={styles.player}></div>
            </div>
          </div>
          <div style={styles.footer} >
            <span
              style={styles.close}
              onClick={event => {
                this.props.history.push('/upload');
              }}
            >
              <Icon type={icons.close} color={colors.white} size={20} />
            </span>
            <div style={styles.imageName}>Man_and_the_river.jpg</div>
            <div style={styles.buttonWrapper}>
              <Button label={`Export to GIF`} additionalStyle={styles.export} iconType={icons.arrowRight} iconPosition={`right`} onClick={() => { console.log('Export to GIF'); }} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Radium(Result);
