import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../ui/input/input";
import ShopLogo from "../../assets/shop.png";
import "./loginForm.css";
import * as actions from "../store/actions/index";
import Spinner from "../../containers/ui/spinner/spinner";
import Layout from "../layout/layout";

class LoginForm extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
        labelName: "Adresa e Email",
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Fjalëkalimi",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          isPassword: true,
        },
        valid: false,
        touched: false,
        labelName: "Fjalëkalimi",
      },
    },

    formIsValid: false,
    loading: false,
    isSignup: false,
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isPassword) {
      const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      isValid = passw.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const updatedLoginFormElement = {
      ...updatedLoginForm[inputIdentifier],
    };
    updatedLoginFormElement.value = event.target.value;
    updatedLoginFormElement.valid = this.checkValidity(
      updatedLoginFormElement.value,
      updatedLoginFormElement.validation
    );
    updatedLoginFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedLoginFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      loginForm: updatedLoginForm,
      formIsValid: formIsValid,
    });
  };

  loginHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value,
      this.state.isSignup
    );
  };

  render() {
    const loginFormElementsArray = [];
    for (let key in this.state.loginForm) {
      loginFormElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }

    let login = loginFormElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        labelName={formElement.config.labelName}
        passwordMsg={formElement.config.passwordValidation}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        invalid={!formElement.config.valid}
      />
    ));

    if (this.props.loading) {
      login = <Spinner />;
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p className="loginError">{this.props.error.message}</p>;
    }

    return (
      <Layout>
        <form onSubmit={this.loginHandler}>
          {errorMessage}
          <img className="shopLogo" src={ShopLogo} alt="Xpert Shop Logo" />
          <label className="labelTitle">Kyçuni</label>
          {login}
          <button type="submit" className="loginButton">
            KYCU
          </button>
          <label className="labelQuestion">Nuk keni Adrese?</label>
          <a className="registerLink" href="/regjistrohu">
            Rregjistrohuni
          </a>
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
