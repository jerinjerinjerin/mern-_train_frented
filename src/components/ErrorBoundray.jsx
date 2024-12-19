import React, { Component } from "react";
import PropTypes from "prop-types";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to show the fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error (you can send this to a monitoring service)
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-2xl font-bold text-red-500">Something went wrong.</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};



export default ErrorBoundary;
