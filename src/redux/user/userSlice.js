import { createSlice } from "@reduxjs/toolkit";
import { getotp, login, logout, signup } from "./userActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save to localStorage
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // OTP Verification
    builder.addCase(getotp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getotp.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save to localStorage
    });

    builder.addCase(getotp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save to localStorage
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      console.log("Logout fulfilled reducer triggered"); // Debug log
      state.loading = false;
      state.user = null;
      localStorage.removeItem("user");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setUser, clearUser, resetError } = authSlice.actions;
export default authSlice.reducer;
