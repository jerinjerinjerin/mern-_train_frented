import React from "react";
import Heading from "../components/Heading";
import SignupCom from "../components/auth/Signup";

const Signup = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-white">
      <Heading heading="h1" variant="secondary">
        Sign Up
      </Heading>
      <div className="md:w-1/2 w-full md:px-0 px-5">
        {/* Sign Up Form */}
        <SignupCom />
      </div>
    </div>
  );
};

export default Signup;
