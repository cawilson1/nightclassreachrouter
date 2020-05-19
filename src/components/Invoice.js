import React from "react";

function Invoice(props) {
  return (
    <div>
      {/* do a database request with invoice id */}
      {/* axios or fetch{SELECT * FROM invoices WHERE id = props.invoiceId} */}
      <h2>Invoice {props.invoiceId}</h2>
    </div>
  );
}

export default Invoice;
