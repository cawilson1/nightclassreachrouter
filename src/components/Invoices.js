import React from "react";
import { Link, navigate } from "@reach/router";

const Invoices = props => {
  props.setCurrentPage("Invoices");
  console.log(props);
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        <li>
          <Link to="123">Invoice 123</Link>
        </li>{" "}
        <li>
          {" "}
          <Link to="abc">Invoice ABC</Link>
        </li>
      </ul>

      <form
        onSubmit={event => {
          event.preventDefault();
          const id = event.target.elements[0].value;
          event.target.reset();

          navigate(`/invoices/${id}`);
        }}
      >
        <label>
          Enter an invoice id: <input />
        </label>
        <button type="submit">Create</button>
      </form>

      {props.children}
    </div>
  );
};

export default Invoices;
