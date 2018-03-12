import React, { Component } from 'react';
import Radium from 'radium';
import { reduxForm, Field } from 'redux-form';
import { colors, breakpoints, fonts } from '../theme';
import Button from './Button';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [breakpoints.mobile]: {
      paddingRight: '0',
    },
  },
  full: {
    width: '100%',
    marginBottom: '8px',
    [breakpoints.mobile]: {
      paddingRight: '0',
    },
  },
  submitButtonRow: {
    padding: '10px 0 0',
  },
  formControl: {
    width: '100%',
    padding: '10px 12px 9px',
    backgroundColor: colors.formGrey,
    color: colors.darkGrey,
    fontSize: '14px',
    lineHeight: '17px',
    borderRadius: '2px',
    border: 'none',
    fontFamily: fonts.default,
  },
  inputWrapper: {
    position: 'relative',
  },
  error: {
    position: 'absolute',
    bottom: 10,
    right: 11,
    display: 'block',
    fontSize: '14px',
    lineHeight: '1.4',
    fontFamily: fonts.defdault,
    color: colors.dangerRed,
  },
  description: {
    position: 'absolute',
    top: 42,
    left: 0,
    display: 'block',
    fontSize: '12px',
    lineHeight: '1.25',
    fontFamily: fonts.helveticaRoman,
    color: colors.superLightGrey,
  },
  required: {
    color: colors.dangerRed,
  },
  requiredText: {
    margin: '0 24px 0 0',
    fontSize: '12px',
    lineHeight: '1.4',
    fontFamily: fonts.helveticaRoman,
  },
  errorBorder: {
    borderColor: colors.dangerRed,
  },
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Please, enter username';
  }
  if (!values.password) {
    errors.password = 'Please, enter password';
  }

  return errors;
}

const InputField = ({ label, id, style, placeholder, description, input: { value, onChange }, meta: { touched, error, warning } }) => (
  <div style={styles.inputWrapper}>
    <input placeholder={placeholder} label={label} id={id} style={{ ...style, ...(touched && error) && styles.errorBorder }} value={value} onChange={onChange} />
    <span style={styles.description}>{description}</span>
    {

      touched &&
      (error && <span style={styles.error}>{error}</span>)
    }
  </div>
);


class LoginForm extends Component {
  render() {
    const { handleSubmit, submitting, valid } = this.props;

    return (
      <form style={styles.container} onSubmit={handleSubmit}>
        <div style={styles.full}>
          <Field placeholder="Username" style={styles.formControl} id="username" name="username" component={InputField} label={`Username`} />
        </div>
        <div style={styles.full}>
          <Field placeholder="Password" style={styles.formControl} id="password" name="password" component={InputField} label={`Passsword`} />
        </div>
        <div style={{ ...styles.full, ...styles.submitButtonRow }}>
          <Button label={`Log in`} isDisabled={submitting || !valid} />
        </div>
      </form>

    );
  }
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate, // <--- validation function given to redux-form
})(Radium(LoginForm))


export default LoginForm;
