import { AnyAction, createSlice } from "@reduxjs/toolkit";
import {
  User,
  fetchVendorLogin,
  fetchOtp,
  fetchRegister,
  fetchVerify,
  fetchCustomerLogin,
} from "../ApiCall";

type AuthState = {
  auth: User | null;
  resend: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  auth: null,
  resend: null,
  loading: false,
  error: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.auth = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
      })
      .addCase(fetchVendorLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendorLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
      })
      .addCase(fetchCustomerLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
      })
      .addCase(fetchVerify.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVerify.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(fetchOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOtp.fulfilled, (state, action) => {
        state.resend = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("reject");
}
