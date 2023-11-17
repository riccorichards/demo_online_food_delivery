import { createSlice } from "@reduxjs/toolkit";
import {
  AddFoodToCart,
  CartType,
  deleteCart,
  deleteFoodFromCart,
  getCart,
  updateCart,
} from "../ApiCall";

type OrderInfoType = {
  address: string;
  phone: string;
};
type CartStateType = {
  cart: CartType[] | null;
  orderInfo: OrderInfoType | null;
  loading: boolean;
  error: string | null;
};

const initialState: CartStateType = {
  cart: null,
  orderInfo: null,
  loading: false,
  error: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOrderInfo: (state, action) => {
      state.orderInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddFoodToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddFoodToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart?.forEach((item) => {
          const update = action.payload.find(
            (update) => update.food.toString() === item.food._id.toString()
          );
          if (update) {
            item.unit = update.unit;
          }
        });
      })
      .addCase(deleteFoodFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFoodFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(deleteCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });
  },
});

export const { setOrderInfo } = CartSlice.actions;

export default CartSlice.reducer;
