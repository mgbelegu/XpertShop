import React from "react";
import "./input.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = ["inputElement"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("invalidInputElement");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <div>
          <label>{props.labelName}</label>
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          <div className="passwordValidation">
            <p>{props.passwordMsg}</p>
          </div>
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <div>
          <label>{props.labelName}</label>
          <textarea
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
      break;
    case "select":
      inputElement = (
        <div>
          <label>{props.labelName}</label>
          <select
            className={inputClasses.join(" ")}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      inputElement = (
        <input
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return <div className="input">{inputElement}</div>;
};

export default input;
