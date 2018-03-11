import React, { Component } from 'react';
import Radium from 'radium';
import Button from '../components/Button';
import { reduxForm, Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import { colors, breakpoints } from '../theme';
import { requestSignUp } from '../actions';
import Spinner from 'react-activity/lib/Spinner';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 200px 0 0',
    [breakpoints.mobile]: {
      paddingRight: '0',
    },
  },
  half: {
    width: '50%',
    paddingRight: '28px',
    marginBottom: '25px',
    [breakpoints.mobile]: {
      width: '100%',
      paddingRight: '0',
    },
  },
  full: {
    width: '100%',
    paddingRight: '28px',
    paddingTop: '35px',
    [breakpoints.mobile]: {
      paddingRight: '0',
    },
  },
  formControl: {
    width: '100%',
  },
  error: {
    position: 'relative',
    margin: '-1px 0 0',
    padding: '8px 0 0',
    display: 'block',
    fontSize: '12px',
    lineHeight: '1.3',
    color: colors.buttonRed,
  },
  loaderWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: colors.whiteOpacity,
    zIndex: 10000
  }
};

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'This field is required.';
  }
  if (!values.lastName) {
    errors.lastName = 'This field is required.';
  }

  if (!values.email) {
    errors.email = 'This field is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please type an email address of the format name@example.com';
  }

  if (!values.emailConfirm) {
    errors.emailConfirm = 'This field is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailConfirm)) {
    errors.emailConfirm = 'Please type an email address of the format name@example.com';
  } else if (values.emailConfirm !== values.email) {
    errors.emailConfirm = 'Two email addresses doesn\'t match';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'This field is required.';
  } else if (isNaN(Number(values.phoneNumber))) {
    errors.phoneNumber = 'Must be a number';
  } else if (values.phoneNumber.length < 4) {
    errors.phoneNumber = 'Must be at least 4 digits';
  }

  if (!values.company) {
    errors.company = 'This field is required.';
  }


  return errors;
}

const InputField = ({ label, style, input: { value, onChange }, meta: { touched, error, warning } }) => (
  <div>
    <TextField label={label} style={style} value={value} onChange={onChange} />
    {
      touched &&
      (error && <span style={styles.error}>{error}</span>)
    }
  </div>
);

class RegisterForm extends Component {
  render() {
    const { handleSubmit, submitting, error } = this.props;
    const submit = handleSubmit(requestSignUp);
    return (
      <form style={styles.container} onSubmit={submit}>
        <div style={styles.half}>
          <Field style={styles.formControl} name="firstName" component={InputField} label={`First name`} />
        </div>
        <div style={styles.half}>
          <Field style={styles.formControl} name="lastName" component={InputField} label={`Last name`} />
        </div>
        <div style={styles.half}>
          <Field style={styles.formControl} name="email" component={InputField} label={`Email address`} />
        </div>
        <div style={styles.half}>
          <Field style={styles.formControl} name="phoneNumber" component={InputField} label={`Phone number`} />
        </div>
        <div style={styles.half}>
          <Field style={styles.formControl} name="company" component={InputField} label={`Job title`} />
        </div>
        <div style={styles.half}>
        </div>
        {error &&
          <div style={styles.error}>{error}</div>
        }
        <div style={styles.full}>
          <Button label={`Sign up`} disabled={submitting} fullWidth={`true`}></Button>
        </div>
        {submitting && <div style={styles.loaderWrap}>
          <Spinner size={21} color={colors.loaderBlue} />
        </div>}
      </form>
    );
  }
}

// Decorate with redux-form
RegisterForm = reduxForm({
  form: 'registerForm',
  validate, // <--- validation function given to redux-form
})(Radium(RegisterForm))

export default RegisterForm;
