import React from "react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/userActions";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log("User:", user);
  const handleLogout = () => {
    console.log("Logout button clicked");
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success("User logout successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error || "Failed to logout. Please try again.");
      });
  };
  

  const isSignupPage = location.pathname === "/signup";
  const buttonText = isSignupPage ? "Login" : "Signup";
  const linkTarget = isSignupPage ? "/login" : "/signup";

  return (
    <div className="w-full top-0 items-center h-[70px] sticky z-10 px-5 md:flex justify-between hidden flex-row bg-gradient-to-br from-blue-400  to-blue-700">
      <h1 className="font-bold text-white text-center">Welcome Curd</h1>
      {user ? (
        <button 
          className="px-4 py-2 bg-red-600 hover:bg-red-900 font-semibold text-white rounded-md"
          onClick={handleLogout}
        >Logout</button>
      ) : (
        <Link to={linkTarget}>
          <Button Variant={"black"} Size="large">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
