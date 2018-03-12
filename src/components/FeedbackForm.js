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
  half: {
    width: '50%',
    paddingRight: '30px',
    marginBottom: '32px',
    [breakpoints.mobile]: {
      width: '100%',
      paddingRight: '0',
    },
  },
  full: {
    width: '100%',
    paddingRight: '30px',
    marginBottom: '32px',
    [breakpoints.mobile]: {
      paddingRight: '0',
    },
  },
  formControl: {
    width: '100%',
    padding: '10px 12px 9px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.black10,
    backgroundColor: colors.black02,
    fontSize: '14px',
    lineHeight: '17px',
    fontFamily: fonts.helveticaThin,
  },
  inputWrapper: {
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    margin: '0 0 9px',
    fontFamily: fonts.miller,
  },
  error: {
    position: 'absolute',
    top: 41,
    left: 0,
    display: 'block',
    fontSize: '10px',
    lineHeight: '1.4',
    fontFamily: fonts.helveticaRoman,
    color: colors.monza,
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
    color: colors.monza,
  },
  requiredText: {
    margin: '0 24px 0 0',
    fontSize: '12px',
    lineHeight: '1.4',
    fontFamily: fonts.helveticaRoman,
  },
  submitButtonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [breakpoints.mobile]: {
      padding: '24px 0 0',
      justifyContent: 'space-between',
    },
  },
  errorBorder: {
    borderColor: colors.monza,
  },
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Please enter a valid first name';
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter a valid last name';
  }

  if (!values.email) {
    errors.email = 'Please enter email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
}

const InputField = ({ label, id, style, description, input: { value, onChange }, meta: { touched, error, warning } }) => (
  <div style={styles.inputWrapper}>
    <input label={label} id={id} style={{ ...style, ...(touched && error) && styles.errorBorder }} value={value} onChange={onChange} />
    <span style={styles.description}>{description}</span>
    {

      touched &&
      (error && <span style={styles.error}>{error}</span>)
    }
  </div>
);


class FeedbackForm extends Component {
  render() {
    const { handleSubmit, submitting, valid } = this.props;

    return (
      <form style={styles.container} onSubmit={handleSubmit}>
        <div style={styles.half}>
          <label style={styles.label} htmlFor={`firstName`}>First Name <span style={styles.required}>*</span></label>
          <Field style={styles.formControl} id="firstName" name="firstName" component={InputField} label={`First Name`} />
        </div>
        <div style={styles.half}>
          <label style={styles.label} htmlFor={`lastName`}>Last Name <span style={styles.required}>*</span></label>
          <Field style={styles.formControl} id="lastName" name="lastName" component={InputField} label={`Last Name`} />
        </div>
        <div style={styles.full}>
          <label style={styles.label} htmlFor={`email`}>Email Address <span style={styles.required}>*</span></label>
          <Field style={styles.formControl} id="email" name="email" component={InputField} label={`Email Address`} />
        </div>
        <div style={styles.full}>
          <label style={styles.label} htmlFor={`phoneNumber`}>Phone Number</label>
          <Field style={styles.formControl} id="phoneNumber" name="phoneNumber" component={InputField} label={`Phone Number`} description={`Please include country code e.g. +44(0) 1234 222 333.`} />
        </div>
        <div style={{ ...styles.full, ...styles.submitButtonRow }}>
          <span style={styles.requiredText}>
            <span style={styles.required}>*</span> Required fields
          </span>
          {/* <BorderButton color={colors.monza} textColor={colors.white} filled text={'Submit'} disabled={submitting || !valid} /> */}
          <Button label={`Log in`} isDisabled={submitting || !valid} />
        </div>
      </form>

    );
  }
}

FeedbackForm = reduxForm({
  form: 'feedbackForm',
  validate, // <--- validation function given to redux-form
})(Radium(FeedbackForm))


export default FeedbackForm;
