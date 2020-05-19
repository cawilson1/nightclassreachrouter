import React from "react";

const NotFound = ({ variable1, variable2 }) => {
  return (
    <>
      <p>{variable1}</p>
      <p>{variable2}</p>
      <p>Oops, looks like you went to a page that doesn't exist!</p>
    </>
  );
};

export default NotFound;
