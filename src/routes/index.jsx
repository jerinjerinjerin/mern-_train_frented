import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/Loading";
import NotFound from "../components/NotFound";
const Home = React.lazy(() => import("../pages/home"))
const Signup = React.lazy(() => import("../pages/signup"))
const Login = React.lazy(() => import("../pages/login"));
const OtpScreen = React.lazy(() => import("../components/auth/Otp"));
const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpScreen/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
