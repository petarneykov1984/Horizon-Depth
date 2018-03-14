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
  if (!values.subject) {
    errors.subject = 'Please, enter username';
  }
  if (!values.message) {
    errors.message = 'Please, enter your message';
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

const InputArea = ({ label, id, style, children, placeholder, description, input: { onChange }, meta: { touched, error, warning } }) => (
  <div style={styles.inputWrapper}>
    <textarea placeholder={placeholder} label={label} id={id} style={{ ...style, ...(touched && error) && styles.errorBorder }} onChange={onChange}>{children}</textarea>
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
        <div style={styles.full}>
          <Field placeholder="Subject" style={styles.formControl} id="subject" name="subject" component={InputField} label={`Subject`} />
        </div>
        <div style={styles.full}>
          <Field placeholder="Message" style={{ ...styles.formControl, minHeight: 212, }} id="subject" name="subject" component={InputArea} label={`Message`} />
        </div>
        <div style={{ ...styles.full, ...styles.submitButtonRow }}>
          <Button fullWidth label={`Send feedback`} isDisabled={submitting || !valid} />
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
