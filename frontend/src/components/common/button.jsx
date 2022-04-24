import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button className="btn  btn-dark" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
