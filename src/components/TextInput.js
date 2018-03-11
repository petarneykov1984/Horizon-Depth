import React, { Component } from 'react';
import { colors } from '../theme';

const styles = {
  container: {
    position: 'relative',
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    color: colors.black,
    backgroundColor: colors.white,
  },
  input: {
    display: 'block',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: colors.grey,
    color: colors.grey,
    marginTop: '5px',
    padding: '8px 12px',
    borderRadius: '4px',
  },
  error: {
    color: colors.danger,
    position: 'absolute',
    bottom: '-15px',
    left: '0',
    fontSize: '11px',
  }
};

class TextInput extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    }
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleContentChange(event) {
    this.validateCurrentContent(event.target.value);
  }

  validateCurrentContent(content) {
    let isValid;
    let msg;

    msg = 'Please, enter value';
    if (!content) {
      isValid = false;
    } else {
      isValid = true;
    }

    this.setState({
      content: content,
    });

    this.props.setCurrentContent(content, isValid, msg);
  }

  render() {
    let { label, type, errorMsg } = this.props;

    return (
      <div style={styles.container}>
        <label style={styles.label}>
          {label}
          <input
            style={styles.input}
            type={type}
            onBlur={this.handleContentChange}
            onChange={this.handleContentChange}
          />
        </label>
        {(!!errorMsg && !this.props.isValid) && <div style={styles.error}> {errorMsg} </div>}

      </div>
    );
  }
}

export default TextInput;
