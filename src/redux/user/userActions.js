import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../../api/apiUrl";
import axios from "axios";


export const signup = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      if (userData.avatarUrl) {
        formData.append("avatarUrl", userData.avatarUrl); // Append the file
      }

      const response = await axios.post(`${serverUrl}/user/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);



export const getotp = createAsyncThunk(
  "user/getotp",
  async (otpNumber, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${serverUrl}/user/otp-varifiction`,
        { otpNumber },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${serverUrl}/user/login-user`,
        loginData,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    console.log("Logout API call initiated"); // Debug log
    try {
      const response = await axios.get(`${serverUrl}/user/logout-user`, {
        withCredentials: true,
      });
      console.log("Logout API call success:", response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error("Logout API call error:", error.response); // Debug log
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
