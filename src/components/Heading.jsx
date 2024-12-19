import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ heading = "h1", variant = "default", children }) => {
  let variantStyles = "";
  let headingStyles = "";
  // Variant-specific styles
  switch (variant) {
    case "primary":
      variantStyles = "text-blue-500";
      break;
    case "secondary":
      variantStyles = "text-gray-900";
      break;
    default:
      variantStyles = "text-black";
  }

  // Heading-specific styles
  switch (heading) {
    case "h1":
      headingStyles = "text-4xl font-extrabold";
      break;
    case "h2":
      headingStyles = "text-3xl font-bold";
      break;
    case "h3":
      headingStyles = "text-2xl font-semibold";
      break;
    case "h4":
      headingStyles = "text-xl font-medium";
      break;
    case "h5":
      headingStyles = "text-lg font-normal";
      break;
    case "h6":
      headingStyles = "text-base font-light";
      break;
    case "p":
      headingStyles = "text-sm font-regular";
      break;
    default:
      headingStyles = "text-2xl font-semibold"; // Default styling for invalid or unspecified tags
  }

  // Dynamic tag rendering
  const HeadingTag = heading !== "default" ? heading : "h3"; // Default to `h3` if not specified or invalid

  return (
    <HeadingTag className={`${variantStyles} ${headingStyles}`}>
      {children}
    </HeadingTag>
  );
};

Heading.propTypes = {
  heading: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  variant: PropTypes.oneOf(["primary", "secondary", "default"]),
  children: PropTypes.node.isRequired,
};

export default Heading;
