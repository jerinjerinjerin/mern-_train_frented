import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getotp } from "../../redux/user/userActions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OtpScreen = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  console.log("Redux state.auth:", { loading, error, user });
  console.log(user?.data.isValidUser    ,'validuser')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move to next input if a number is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      toast.error("Please enter the complete OTP.");
      return;
    }
    console.log("Entered OTP:", otpValue);
    const otpNumber = otpValue
    dispatch(getotp(otpNumber))
  };

  useEffect(() => {
   if(user?.data.isValidUser){
    navigate('/login')
    toast.success('OTP verified successfully please login')
   }
 
  },[])

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Enter OTP</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="grid grid-cols-6 gap-2 mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength="1"
              className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpScreen;
