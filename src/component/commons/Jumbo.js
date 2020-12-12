import React from "react";

const Jumbo = (props) => {
  return (
    <React.Fragment>
      <div className="px-3 pt-3 h1 text-dark jumbo">{props.children}</div>
      <div className="px-3 pb-3 text-muted small mb-0">{props.subHead}</div>
    </React.Fragment>
  );
};

export default Jumbo;
