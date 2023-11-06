import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type UserInput = {
  email: string;
  password: string;
  phone: string;
};
export type LoginInput = {
  email: string;
  password: string;
};

export type User = {
  signature: string;
  verified: string;
  status: string;
  _id: string;
};

export type VerifyUserInput = {
  signature: string | undefined;
  otpStr: string;
};

export type GetOtpAgain = string;

type SignatureType = string;

export const fetchRegister = createAsyncThunk<
  User,
  UserInput,
  { rejectValue: string }
>("auth/fetchRegister", async (user: UserInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/customer/signup",
      data: user,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error with Sign up: " + error.message);
    }
    return rejectWithValue("Error with Sign up");
  }
});

export const fetchVendorLogin = createAsyncThunk<
  User,
  LoginInput,
  { rejectValue: string }
>("auth/fetchVendorLogin", async (user: LoginInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/vendor/login",
      data: user,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error with Login: " + error.message);
    }
    return rejectWithValue("Error with Login");
  }
});

export const fetchCustomerLogin = createAsyncThunk<
  User,
  LoginInput,
  { rejectValue: string }
>("auth/fetchCustomerLogin", async (user: LoginInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/customer/login",
      data: user,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error with Login: " + error.message);
    }
    return rejectWithValue("Error with Login");
  }
});

export const fetchVerify = createAsyncThunk<
  User,
  VerifyUserInput,
  { rejectValue: string }
>("auth/fetchVerify", async (verify: VerifyUserInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "patch",
      url: "http://localhost:8000/customer/verify",
      data: { otp: verify.otpStr },
      headers: {
        Authorization: `Bearer ${verify.signature}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error with Verify User: " + error.message);
    }
    return rejectWithValue("Error with Verify User");
  }
});

export const fetchOtp = createAsyncThunk<
  GetOtpAgain,
  SignatureType,
  { rejectValue: string }
>("auth/fetchOtp", async (signature: SignatureType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8000/customer/otp",
      headers: {
        Authorization: `Bearer ${signature}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error with fetching otp: " + error.message);
    }
    return rejectWithValue("Error with fetching otp");
  }
});
