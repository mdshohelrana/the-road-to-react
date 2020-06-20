import React from "react";
import PropTypes from "prop-types";

export default function InputText({ onChange, placeholder, value, type }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
InputText.propType = {
  onChange: PropTypes.func.required,
  placeholder: PropTypes.string,
  value: PropTypes.string.required,
  type: PropTypes.string.required,
};

InputText.defaultProps = {
  placeholder: "Some text",
  value: "fake text..",
  type: "input",
};
