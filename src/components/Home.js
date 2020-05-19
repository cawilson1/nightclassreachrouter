import React from "react";

const Home = props => {
  props.setCurrentPage("Home");
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

export default Home;
