import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  variant = "default",
  size = "default",
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
}) => {
  let inputStyles = "";
  let sizeStyles = "";

  switch (size) {
    case "small":
      sizeStyles = "py-1 px-3 text-sm";
      break;
    case "large":
      sizeStyles = "py-4 px-6 text-lg";
      break;
    default:
      sizeStyles = "py-2 px-4 text-base";
  }

  switch (variant) {
    case "filled":
      inputStyles =
        "bg-gray-200 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
      break;
    case "outlined":
      inputStyles =
        "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-transparent";
      break;
    default:
      inputStyles =
        "bg-transparent border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          className={`${inputStyles} ${sizeStyles} w-full rounded-md resize-none`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          className={`${inputStyles} ${sizeStyles} w-full rounded-md`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        ></input>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "textarea", "email", "password"]),
  variant: PropTypes.oneOf(["filled", "outlined", "default"]),
  size: PropTypes.oneOf(["small", "large", "default"]),
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export default Input;
