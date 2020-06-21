import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, onClick, type }) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: "click",
  type: "button",
};
