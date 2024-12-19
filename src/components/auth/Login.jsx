import React, { useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import Button from "../Button";
import ErrorMessage from "../Error";

const LoginCom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({email:"", password:""});

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let newError = {}


    if(!email.trim()){
      newError.email = "Email is required";
    }
    if(!password.trim()){
      newError.password = "Password is required";
    }

    setError(newError)

    setEmail('');
    setPassword('');

    console.log('login inputs',email, password)

  }
  return (
    <form className="w-full md:mt-5 mt-2 py-2" onSubmit={handleLoginSubmit}>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError((prev) => ({ ...prev, email: "" })); // Clear email error when typing
        }}
        label={"Email"}
        placeholder={"Enter your Email Address"}
        type="email"
        variant="outlined"
        size="default"
        required
      />
      <div className="mb-1 w-full">
        <ErrorMessage message={error.email}/>
      </div>
      <Input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError((prev) => ({...prev, password:""}))
        }}
        label={"Password"}
        placeholder={"Enter your password"}
        type="password"
        variant="outlined"
        size="default"
        required
      />
       <div className="mb-1 w-full">
        <ErrorMessage message={error.password}/>
      </div>
      <div className="flex mt-2 flex-col gap-2">
        <p className="font-semibold">
          Don&apos;t have an account {" "}
          <Link to={"/signup"} className="text-blue-600">
            Signup
          </Link>
        </p>
        <Button className=" text-center" Variant="black">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginCom;
