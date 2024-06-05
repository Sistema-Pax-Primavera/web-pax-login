import React from "react";
import "./icone-button.css";

const ButtonComponent = ({ icon, title, funcao }) => {
  return (
    <div className="button-login">
      <button onClick={funcao}>
        {title}
        {icon}
      </button>
    </div>
  );
};

export default ButtonComponent;
