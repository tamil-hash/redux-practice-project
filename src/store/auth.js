import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userName: "",
  password: "",
  isError: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userName = "";
      state.password = "";
    },
    setUserName(state, action) {
      console.log(action);
      state.userName = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    showError(state, action) {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    hideError(state) {
      state.isError = false;
      state.errorMessage = "";
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
