import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import ImageUploader from "../ImageUpload";
import ErrorMessage from "../Error";

const SignupCom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const [error, setError] = useState({name, password, confirmPassword})

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if(!name.trim()){
      newErrors.name = "Name is required";
    }

    if(!password.trim()){
      newErrors.password = "Password is required";
    }

    if(password !== confirmPassword){
      newErrors.confirmPassword = "Passwords do not match";
    }

    setError(newErrors);

    

    // Proceed with form submission (e.g., call API to register)

    // Reset form fields after successful submission
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAvatar(null);

    console.log(name, email, password, confirmPassword)
  };

  return (
    <form className="w-full md:mt-5 mt-2" onSubmit={handleRegisterSubmit}>
      {/* Avatar Upload */}
      <div className="mt-2">
        <ImageUploader
          value={avatar}
          label="Avatar"
          onChange={(file) => setAvatar(file.target.value)}
          accept="image/jpeg, image/png, image/jpg"
          onImageSelect={(file) => setAvatar(file)}
        />
      </div>

      {/* Name Input */}
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError((prev) => ({ ...prev, name: "" })); // Clear email error when typing
        }}
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="outlined"
        size="default"
        required
      />
       <div className="mb-1 w-full">
        <ErrorMessage message={error.name}/>
      </div>
      {/* Email Input */}
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="Enter your Email Address"
        type="email"
        variant="outlined"
        size="default"
        required
      />
      {/* Password Input */}
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="outlined"
        size="default"
        required
      />

      {/* Confirm Password Input */}
      <Input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="Confirm Password"
        placeholder="Enter your confirm password"
        type="password"
        variant="outlined"
        size="default"
        required
      />

      {/* Submit Button */}
      <div className="flex mt-2 flex-col gap-2">
        <p className="font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
        <Button className="text-center " Variant="black">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignupCom;
