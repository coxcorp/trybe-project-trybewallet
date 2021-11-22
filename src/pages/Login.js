import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ref.: https://www.youtube.com/watch?v=NoZOqtK6ecI&t=220s
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    const { email, password } = this.state;
    const minLen = 4;
    const regex = /\S+@\S+\.\S+/;
    const validateEmail = regex.test(email);
    if (validateEmail && minLen < password.length) {
      this.setState({ submitButton: false });
    } else {
      this.setState({ submitButton: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, submitButton } = this.state;
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email-input">
            email
            <input
              data-testid="email-input"
              type="email"
              id="email-input"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Password
            <input
              data-testid="password-input"
              type="password"
              id="password-input"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ submitButton }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(inputEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
