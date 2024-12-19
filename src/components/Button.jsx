import React from "react";
import PropTypes from "prop-types";

const Button = ({ Variant = "black", Size = "md", children }) => {
  let buttonStyles = "";
  let sizeStyles = "";

  switch (Size) {
    case "small":
      sizeStyles = "py-1 px-3 text-sm w-full";
      break;

    case "large":
      sizeStyles = "py-3 px-6 text-lg w-full";
      break;

    default:
        sizeStyles = "py-2 px-4 text-base w-full";
  }


  switch(Variant){
    case "black":
        buttonStyles = "bg-black text-white rounded-md hover:bg-gray-800";
      break;

    case "red":
         buttonStyles = "bg-red-500 text-white rounded-md hover:bg-red-700";
      break;

    case "border-black":
        buttonStyles = "border border-black text-white rounded-md hover:border-gray-800";
      break;

      default:

       buttonStyles = "bg-black text-white hober:gray-800"
  }
  return <div>
    <button className={`${buttonStyles} ${sizeStyles}`}>
        {children}
    </button>
  </div>;
};

Button.propTypes = {
  Variant: PropTypes.oneOf(['black', 'red', 'border-black']),
  Size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
}

export default Button;
