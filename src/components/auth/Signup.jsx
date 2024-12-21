import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";
import Button from "../Button";
import ImageUploader from "../ImageUpload";
import { signup } from "../../redux/user/userActions";
import toast from "react-hot-toast";

const SignupCom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { loading, error, user } = useSelector((state) => state.auth); 

  console.log("Redux state.auth:", { loading, error, user });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatarUrl,
    };

    dispatch(signup(userData))
      .unwrap() // Allow direct access to the fulfilled/rejected result
      .then(() => {
        navigate("/otp");
        toast.success("Signup successful! Please verify email.");
      })
      .catch((error) => {
        console.error("Signup error:", error);
        toast.error(error); // Optionally show the error in a toast
      });
  };

  return (
    <form className="w-full md:mt-5 mt-2" onSubmit={handleRegisterSubmit}>
      {/* Avatar Upload */}
      <div className="mt-2">
        <ImageUploader
          value={avatarUrl}
          label="Avatar"
          onChange={(file) => setAvatarUrl(file.target.value)}
          accept="image/jpeg, image/png, image/jpg"
          onImageSelect={(file) => setAvatarUrl(file)}
        />
      </div>

      {/* Name Input */}
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="outlined"
        size="default"
        required
      />

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
        <Button className="text-center" Variant="black" type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default SignupCom;
