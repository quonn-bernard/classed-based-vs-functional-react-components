import React from "react";

const Button = (props) => {
  
  return (
    <button
      onClick={props.click}
      style={{
        backgroundColor: props.bg || "black",
        color: props.color || "white",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
