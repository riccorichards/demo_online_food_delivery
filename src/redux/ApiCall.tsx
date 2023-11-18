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

////////////////////////////////////////////////vendor api

export type GetFoodsType = {
  _id: string;
  price: string;
  images: string;
  name: string;
  description: string;
  foodType: string[];
  rating: number;
  readyTime: number;
  vendorId: string;
};

export type Vendor = {
  name: string;
  ownerName: string;
  foodType: string[];
  pincode: string;
  address: string;
  status: string;
  phone: string;
  email: string;
  coverImage: string;
  serviceAvailable: boolean;
  rating: string;
  foods: GetFoodsType[];
  lat: string;
  lng: string;
  _id: string;
};
export type ListOfVendorsType = {
  name: string;
  foodType: string[];
  address: string;
  phone: string;
  email: string;
  serviceAvailable: boolean;
  rating: string;
  foods: [string];
  coverImage: string;
  lat: string;
  lng: string;
  _id: string;
};

export type TopVendorsType = {
  name: string;
  rating: string;
  _id: string;
};

export type IdType = string | undefined;

export type VendorCreateInput = {
  name: string;
  ownerName: string;
  foodType: string;
  pincode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  lat: string;
  lng: string;
};

export const createVendor = createAsyncThunk<
  Vendor,
  VendorCreateInput,
  { rejectValue: string }
>(
  "vendor/createVendor",
  async (vendor: VendorCreateInput, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8000/admin/vendor",
        data: vendor,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Error creating vendor: " + error.message);
      }
      return rejectWithValue("Error creating vendor");
    }
  }
);

export const getVendors = createAsyncThunk<
  ListOfVendorsType[],
  undefined,
  { rejectValue: string }
>("vendor/getVendors", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8000/admin/vendors",
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching vendors: " + error.message);
    }
    return rejectWithValue("Error fetching vendors");
  }
});

export const getTopVendors = createAsyncThunk<
  TopVendorsType[],
  undefined,
  { rejectValue: string }
>("vendor/getTopVendors", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8000/top-restaurant",
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});

export const getVendorById = createAsyncThunk<
  Vendor,
  IdType,
  { rejectValue: string }
>("vendor/getVendorById", async (id: IdType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8000/restaurant/${id}`,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});

////////////////////////////////////////  food

export type CreateFoodInput = {
  food: FormData;
  token: string;
};

export const createFood = createAsyncThunk<
  FormData,
  CreateFoodInput,
  { rejectValue: string }
>(
  "foods/createFood",
  async (foodData: CreateFoodInput, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `http://localhost:8000/vendor/food`,
        headers: {
          Authorization: `Beader ${foodData.token}`,
          "Content-Type": "multipart/form-data",
        },
        data: foodData.food,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Error fetching top vendors: " + error.message);
      }
      return rejectWithValue("Error fetching top vendors");
    }
  }
);

export type FilterByType = {
  cuisines?: string;
  vendor?: string;
  reset?: boolean;
  duration?: string;
};

export const getAllfoods = createAsyncThunk<
  GetFoodsType[],
  undefined,
  { rejectValue: string }
>("foods/getAllfoods", async (_: undefined, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8000/available-foods`,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});

export const getFilteredfoods = createAsyncThunk<
  GetFoodsType[],
  FilterByType,
  { rejectValue: string }
>(
  "foods/getFilteredfoods",
  async (filterBy: FilterByType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:8000/filtered-foods?vendor=${filterBy.vendor}&cuisines=${filterBy.cuisines}&duration=${filterBy.duration}&reset=${filterBy.reset}`,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Error fetching top vendors: " + error.message);
      }
      return rejectWithValue("Error fetching top vendors");
    }
  }
);

////////////////////////////////////// cart

export type CartType = {
  food: GetFoodsType;
  unit: number;
  _id: string;
};

export type AddFoodCartType = {
  _id: string;
  unit: number;
};

export type CartInput = {
  data: AddFoodCartType;
  signature: string;
};

export const AddFoodToCart = createAsyncThunk<
  CartType[],
  CartInput,
  { rejectValue: string }
>("cart/AddFoodToCart", async (cart: CartInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/customer/cart",
      headers: {
        Authorization: `Bearer ${cart.signature}`,
      },
      data: cart.data,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});

export const getCart = createAsyncThunk<
  CartType[],
  SignatureType,
  { rejectValue: string }
>("cart/getCart", async (signature: SignatureType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8000/customer/cart",
      headers: {
        Authorization: `Bearer ${signature}`,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching cart: " + error.message);
    }
    return rejectWithValue("Error fetching cart");
  }
});

export type UpdateCartType = {
  food: string;
  unit: number;
  _id: string;
};

export const updateCart = createAsyncThunk<
  UpdateCartType[],
  CartInput,
  { rejectValue: string }
>("cart/updateCart", async (cart: CartInput, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/customer/cart",
      headers: {
        Authorization: `Bearer ${cart.signature}`,
      },
      data: cart.data,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});

export type deleteFoodType = {
  signature: string;
  _id: string;
};

export const deleteFoodFromCart = createAsyncThunk<
  CartType[],
  deleteFoodType,
  { rejectValue: string }
>(
  "cart/deleteFoodFromCart",
  async (deleteFood: deleteFoodType, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `http://localhost:8000/customer/cart/${deleteFood._id}`,
        headers: {
          Authorization: `Bearer ${deleteFood.signature}`,
        },
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Error fetching top vendors: " + error.message);
      }
      return rejectWithValue("Error fetching top vendors");
    }
  }
);

export const deleteCart = createAsyncThunk<
  [],
  SignatureType,
  { rejectValue: string }
>("cart/deleteCart", async (signature: SignatureType, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: `https/http://localhost:8000/customer/cart`,
      headers: {
        Authorization: `Bearer ${signature}`,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue("Error fetching top vendors: " + error.message);
    }
    return rejectWithValue("Error fetching top vendors");
  }
});
