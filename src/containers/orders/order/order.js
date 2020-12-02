import React from "react";
import "./order.css";

const order = (props) => {
  let stateValue = null;
  switch (props.state) {
    case "Pending":
      stateValue = (
        <td className="pending">
          <p>{props.state}</p>
        </td>
      );
      break;
    case "Denied":
      stateValue = (
        <td className="denied">
          <p>{props.state}</p>
        </td>
      );
      break;
    case "Approved":
      stateValue = (
        <td className="approved">
          <p>{props.state}</p>
        </td>
      );
      break;
    case "Delivered":
      stateValue = (
        <td className="delivered">
          <p>{props.state}</p>
        </td>
      );
      break;
    default:
      stateValue = <td>No price</td>;
  }
  return (
    <tr>
      <td>
        <p>{props.id}</p>
      </td>
      <td>
        <p>{Number(props.total).toLocaleString()} ALL</p>
      </td>
      {stateValue}
      <td>
        <p>{props.date}</p>
      </td>
    </tr>
  );
};

export default order;
