import React, { useState } from "react";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/userActions";
import toast from "react-hot-toast";

const LoginCom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const loginData = { email, password };

    dispatch(login(loginData))
    .unwrap()
    .then(() => {
      toast.success("Login successful! Redirecting...");
      setEmail("");
      setPassword("");
      navigate("/");
    })
    .catch((error) => {
      console.error("Login error:", error);
      const errorMessage = error?.message || "Unable to login. Please check your credentials.";
      toast.error(errorMessage);
    });
  
  };

  return (
    <form className="w-full md:mt-5 mt-2 py-2" onSubmit={handleLoginSubmit}>
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

      {/* Submit Button */}
      <div className="flex mt-2 flex-col gap-2">
        <p className="font-semibold">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Signup
          </Link>
        </p>
        <Button className="text-center" Variant="black" type="submit" disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              Logging in...<span className="animate-spin">🔄</span>
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoginCom;
