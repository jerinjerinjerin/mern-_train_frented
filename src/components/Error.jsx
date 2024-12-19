
import React from 'react';
import PropTypes from 'prop-types';


const ErrorMessage = ({message, className = ""}) => {
    if(!message){
        return null;
    }
    return(
      <p className={`text-red-500 ${className}`}>
         {message}
      </p>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ErrorMessage;