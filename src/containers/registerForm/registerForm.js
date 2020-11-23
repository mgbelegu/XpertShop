import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../ui/input/input";
import "./registerForm.css";
import Spinner from "../ui/spinner/spinner";
import * as actions from "../store/actions/index";

class RegisterForm extends Component {
  state = {
    registerForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Emri",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Emri i Plotë",
      },
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
        passwordValidation:
          "Fjalëkalimi duhet të ketë të paktën nga një karakter special, shkronjë dhe numër. *",
      },
      /*passwordRepeat: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Fjalëkalimi sërish",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          isPassword: true,
        },
        valid: false,
        touched: false,
        labelName: "Konfirmo Fjalëkalimin",
      },*/
      phoneNumber: {
        elementType: "input",
        elementConfig: {
          type: "tel",
          placeholder: "+3556********",
          pattern: "[+]{1}[0-9]{3}[0-9]{9}",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        labelName: "Numri i Celularit",
      },
      business: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "individ", displayValue: "Individ" },
            { value: "biznes", displayValue: "Biznes" },
          ],
        },
        value: "individ",
        validation: {},
        valid: true,
        labelName: "Zgjidhni Llojin e biznesit",
      },
    },
    formIsValid: false,
    loading: false,
  };

  /*orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[
        formElementIdentifier
      ].value;
    }
    const register = {
      userData: formData,
    };
    axios
      .post("/registeredUsers.json", register)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };*/

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
    const updatedRegisterForm = {
      ...this.state.registerForm,
    };
    const updatedRegisterFormElement = {
      ...updatedRegisterForm[inputIdentifier],
    };
    updatedRegisterFormElement.value = event.target.value;
    updatedRegisterFormElement.valid = this.checkValidity(
      updatedRegisterFormElement.value,
      updatedRegisterFormElement.validation
    );
    updatedRegisterFormElement.touched = true;
    updatedRegisterForm[inputIdentifier] = updatedRegisterFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedRegisterForm) {
      formIsValid = updatedRegisterForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      registerForm: updatedRegisterForm,
      formIsValid: formIsValid,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.registerForm.email.value,
      this.state.registerForm.password.value
    );
  };

  render() {
    const registerFormElementsArray = [];
    for (let key in this.state.registerForm) {
      registerFormElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }

    let form = (
      <form onSubmit={this.submitHandler}>
        <label className="labelTitle">Rregjistrohuni për të vazhduar</label>
        <label className="labelSubtitle">Bëhu pjesë e Xpert eShop</label>
        {registerFormElementsArray.map((formElement) => (
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
        <label className="labelNotify">
          Fushat e shënuara me * janë të detyrueshme
        </label>
        <label className="labelButtons">
          DUKE U RREGJISTRUAR, JU KENI RËNË DAKORD ME TERMAT E PËRDORIMIT
        </label>
        <button
          className="loginButton"
          style={{ marginBottom: "15px" }}
          type="submit"
          disabled={!this.state.formIsValid}
        >
          RREGJISTROHU
        </button>
        <label className="labelButtons">APO JENI TASHMË TË RREGJISTRUAR</label>
        <a
          href="/kycu"
          className="loginButton"
          style={{ marginBottom: "15px" }}
        >
          KYCU
        </a>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return <div>{form}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterForm);