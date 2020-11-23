import React, { Component } from "react";
import Input from "../ui/input/input";
import ShopLogo from "../../assets/shop.png";
import "./loginForm.css";

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

  loginHandler = () => {
    //null
  };
  render() {
    const loginFormElementsArray = [];
    for (let key in this.state.loginForm) {
      loginFormElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }

    return (
      <form onSubmit={this.loginHandler}>
        <img className="shopLogo" src={ShopLogo} alt="Xpert Shop Logo" />
        <label className="labelTitle">Vendosni numrin e celularit</label>
        {loginFormElementsArray.map((formElement) => (
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
        ))}
        <button type="submit" className="loginButton">
          KYCU
        </button>
        <label className="labelQuestion">Nuk keni Adrese?</label>
        <a className="registerLink" href="/regjistrohu">
          Rregjistrohuni
        </a>
      </form>
    );
  }
}

export default LoginForm;
